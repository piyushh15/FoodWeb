require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const User = require('./models/User');
const app = express();
const jwtsecret = process.env.JWT_SECRET;
const mongourl = process.env.MONGO_URI;

mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/createuser', [
  body('email').isEmail().withMessage('Incorrect email'),
  body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const salt = await bcrypt.genSalt(10);
  const secpassword = await bcrypt.hash(req.body.password, salt);
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secpassword,
    });
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.post('/loginuser', [
  body('email').isEmail(),
  body('password').isLength({ min: 5 }).withMessage('Password is too small')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ errors: [{ msg: "Username not found" }] });

    const pwdCompare = await bcrypt.compare(password, user.password);
    if (!pwdCompare) return res.status(400).json({ errors: [{ msg: "Password incorrect" }] });

    const payload = {
      user: {
        id: user.id
      }
    };
    const authToken = jwt.sign(payload, jwtsecret, { expiresIn: '1h' });
    res.json({ success: true, authToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.post('/purchase', async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  
  if (!token) return res.status(401).json({ message: 'Authorization header missing' });

  try {
    const decoded = jwt.verify(token, jwtsecret);
    const userId = decoded.user.id;
    console.log(userId);

    const { items, totalprice, email, mobile, address } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });

    const newPurchase = {
      items: items.map(item => ({
        title: item.title,
        img: item.img,
        size: item.size,
        quantity: item.quantity,
        price: item.price,
      })),
      totalprice,
      email,
      mobile,
      address,
    };

    user.purchaseHistory.push(newPurchase);
    await user.save();

    res.status(200).json({ success: true, message: 'Purchase saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});


app.get('/myorders', async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Authorization header missing' });

  try {
    const decoded = jwt.verify(token, jwtsecret);
    const userId = decoded.user.id;
    

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });

    res.status(200).json({ success: true, orders: user.purchaseHistory });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
