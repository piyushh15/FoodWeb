import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Cart = () => {
 
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate(); // Hook for navigation

  const handleIncrement = (item) => {
    addToCart(item, 1, item.size, item.price);
  };
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      addToCart(item, -1, item.size, item.price);
    } else {
      removeFromCart(item);
    }
  };
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };
  const handleRemove = (item) => {
    removeFromCart(item);
  };
  const handleCheckout = () => {
    navigate('/checkout'); 
  };

  return (
    <div className="bg-gradient-to-r from-custom-dark to-custom-gray min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto p-6 pt-0 flex-grow">
        <h2 className="text-2xl font-bold mb-6 pl-2 font-madimi text-white">Your Cart</h2>
        <table className="min-w-full  border border-gray-900 font-montserrat">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left text-white">S.No</th>
              <th className="py-2 px-4 border-b text-left text-white">Image</th>
              <th className="py-2 px-4 border-b text-left text-white">Title</th>
              <th className="py-2 px-4 border-b text-left text-white">Option Selected</th>
              <th className="py-2 px-4 border-b text-white">Quantity</th>
              <th className="py-2 px-4 border-b text-white">Total</th>
              <th className="py-2 px-4 border-b text-white">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b text-white">{index + 1}</td>
                <td className="py-2 px-4 border-b text-white">
                  <img src={item.img} alt={item.name} className="h-16 w-16 object-cover"/>
                </td>
                <td className="py-2 px-4 border-b text-white">{item.name}</td>
                <td className="py-2 px-4 border-b text-white">{item.size}</td>
                <td className="py-2 px-4 border-b text-center">
                  <button className="text-white bg-gray-700 rounded-lg px-[0.4rem] text-2xl" onClick={() => handleDecrement(item)}>-</button>
                  <span className="mx-2 text-white">{item.quantity}</span>
                  <button className="text-white bg-gray-700 rounded-lg px-[0.4rem] text-2xl" onClick={() => handleIncrement(item)}>+</button>
                </td>
                <td className="py-2 px-4 border-b text-white">₹{(item.price * item.quantity).toFixed(2)}</td>
                <td className="py-2 px-4 border-b text-white">
                  <button onClick={() => handleRemove(item)} className="text-red-500">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-6 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-white">Subtotal: ₹{calculateSubtotal()}</h3>
          <button 
            className="mt-2 px-4 py-2 bg-yellow-700 text-white rounded-lg hover:bg-yellow-900"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
