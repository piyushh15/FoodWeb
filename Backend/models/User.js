const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PurchaseItemSchema = new Schema({
  title: { type: String, required: true },
  img: { type: String, required: true },
  size: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});


const PurchaseHistorySchema = new Schema({
  items: [PurchaseItemSchema],
  date: { type: Date, default: Date.now },
  totalprice: { type: Number, required: true },
});


const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  purchaseHistory: [PurchaseHistorySchema],
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
