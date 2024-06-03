import React from 'react';
import Home from './screens/Home';
import Login from './screens/Login';
import { Toaster } from 'react-hot-toast';
import {
  BrowserRouter as Router,
  Routes,
  Route,     
} from "react-router-dom";
import Signup from './screens/Signup';
import Cart from './components/Cart';
import Myorders from './components/Myorders';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <div>
       
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/createuser" element={<Signup />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/myorders" element={<Myorders />}></Route>
          <Route exact path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
