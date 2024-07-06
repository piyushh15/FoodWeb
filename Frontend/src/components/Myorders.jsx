import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import loaderSvg from '../assets/icons/loader.svg'; // Path to your SVG loader

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // State to track loading status
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      const authToken = localStorage.getItem('authToken');
      try {
        const response = await fetch('https://food-web-backend.vercel.app/myorders', {
          headers: {
            'Authorization': `Bearer ${authToken}`,
          },
        });
        const data = await response.json();
        if (data.success) {
          setOrders(data.orders);
        } else {
          console.error('Failed to fetch orders:', data.message);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setIsLoading(false); // Set isLoading to false regardless of success or failure
      }
    };

    fetchOrders();
  }, []);

  const handleToggleExpand = (orderId) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  const renderTable = () => (
    <div className="bg-gradient-to-r from-custom-dark to-custom-gray min-h-screen w-full flex flex-col">
      <Navbar />
      <div className="container mx-auto p-4 flex-grow">
        <h1 className="text-2xl font-bold mb-4 text-white">My Orders</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-opacity-80 rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 text-white font-montserrat">Date and Time</th>
                <th className="py-2 px-4 text-white font-montserrat">Total Price</th>
                <th className="py-2 px-4 text-white font-montserrat">Email</th>
                <th className="py-2 px-4 text-white font-montserrat">Address</th>
                <th className="py-2 px-4 text-white font-montserrat">Phone</th>
                <th className="py-2 px-4 text-white font-montserrat">View Details</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td className="px-4 py-2 text-white text-center font-palanquin text-[15px]">{new Date(order.date).toLocaleString()}</td>
                    <td className="px-4 py-2 text-white text-center font-palanquin text-[15px]">₹{order.totalprice.toFixed(2)}</td>
                    <td className="px-4 py-2 text-white text-center font-palanquin text-[15px]">{order.email}</td>
                    <td className="px-4 py-2 text-white text-center font-palanquin text-[15px]">{order.address}</td>
                    <td className="px-4 py-2 text-white text-center font-palanquin text-[15px]">{order.phone}</td>
                    <td className="px-4 py-2 text-white text-center font-palanquin text-[15px]">
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={() => handleToggleExpand(index)}
                      >
                        {expandedOrderId === index ? 'Hide Details' : 'View Details'}
                      </button>
                    </td>
                  </tr>
                  {expandedOrderId === index && (
                    <tr>
                      <td colSpan="6" className="px-4 py-2 text-white">
                        <div className="flex flex-wrap">
                          {order.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="mb-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                              <div className="p-1 border flex items-center justify-center flex-col rounded-lg">
                                <div className="font-semibold">{item.title}</div>
                                <div>Quantity: {item.quantity}</div>
                                <div>Price: ₹{item.price}</div>
                                <img src={item.img} alt={item.title} className="w-[10rem] h-[10rem] rounded-[20%] object-cover mt-2" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex justify-center items-center min-h-screen">
      {isLoading ? ( // Render loader if isLoading is true, otherwise render table
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <img src={loaderSvg} alt="Loading..." />
        </div>
      ) : (
        renderTable()
      )}
    </div>
  );
};

export default MyOrders;
