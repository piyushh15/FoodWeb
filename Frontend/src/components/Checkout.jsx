import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useContext(CartContext);
  const [deliveryInfo, setDeliveryInfo] = useState({
    fullName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const deliveryFee = 50;
  const total = (parseFloat(calculateSubtotal()) + deliveryFee).toFixed(2);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const totalprice = parseFloat(total);
    const { email, phone, street, city, state, pincode, country } = deliveryInfo;
    const address = `${street}, ${city}, ${state}, ${pincode}, ${country}`;

    try {
      const authToken = localStorage.getItem("authToken");
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      };
      const response = await fetch('https://food-web-backend.vercel.app/purchase', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          items: cartItems.map(item => ({
            title: item.name,
            img: item.img,
            size: item.size,
            quantity: item.quantity,
            price: item.price,
          })),
          totalprice,
          email,
          phone,
          address,
        }),
      });

      if (response.ok) {
        clearCart();
        navigate('/');
        toast.success('Order Purchased successfully', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        const data = await response.json();
        alert("purchase failed due to some error");
        console.error('Purchase failed:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-custom-dark to-custom-gray min-h-screen flex flex-col">
      <Navbar />
      <div className="w-full p-8 grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
        <div>
          <h2 className="text-xl font-bold mb-4 text-white font-montserrat">Delivery Information</h2>
          <div className='h-full'>
            <form onSubmit={handleSubmit}>
              {Object.keys(deliveryInfo).map((key) => (
                <div className="mb-4" key={key}>
                  <label className="block text-white font-bold mb-2 capitalize text-sm" htmlFor={key}>
                    {key.replace(/([A-Z])/g, ' $1')}
                  </label>
                  <input
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                    type="text"
                    name={key}
                    id={key}
                    value={deliveryInfo[key]}
                    onChange={handleChange}
                    required
                  />
                </div>
              ))}
            </form>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4 text-white font-montserrat">Cart Totals</h2>
          <div className="p-4 rounded-lg shadow-md">
            <div className="mb-2 flex justify-between">
              <span className='text-white font-montserrat'>Subtotal</span>
              <span className='text-white font-montserrat'>₹{calculateSubtotal()}</span>
            </div>
            <div className="mb-2 flex justify-between">
              <span className='text-white font-montserrat'>Delivery Fee</span>
              <span className='text-white font-montserrat'>₹{deliveryFee}</span>
            </div>
            <hr className="my-2" />
            <div className="mb-2 flex justify-between font-bold">
              <span className='text-white font-montserrat'>Total</span>
              <span className='text-white font-montserrat'>₹{total}</span>
            </div>
            <button 
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={handleSubmit} // Ensure handleSubmit is triggered on button click
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
