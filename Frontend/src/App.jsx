import React from 'react';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Cart from './components/Cart';
import Myorders from './components/Myorders';
import Checkout from './components/Checkout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

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
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
}

export default App;
