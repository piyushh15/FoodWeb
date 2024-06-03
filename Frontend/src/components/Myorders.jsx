import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      const authToken = localStorage.getItem('authToken');
      try {
        const response = await fetch('http://localhost:5000/api/myorders', {
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
      }
    };

    fetchOrders();
  }, []);

  const handleToggleExpand = (orderId) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">My Orders</h1>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 text-white bg-gray-800">Date and Time</th>
              <th className="py-2 px-4 text-white bg-gray-800">Total Price</th>
              <th className="py-2 px-4 text-white bg-gray-800">View Details</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td className="border px-4 py-2 text-white">{new Date(order.date).toLocaleString()}</td>
                  <td className="border px-4 py-2 text-white">₹{order.totalprice.toFixed(2)}</td>
                  <td className="border px-4 py-2 text-white">
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
                    <td colSpan="3" className="border px-4 py-2 text-white">
                      <div className="flex flex-wrap">
                        {order.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="mb-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                            <div className="p-1 border flex items-center justify-center flex-col rounded-lg ">
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
    </>
  );
};

export default MyOrders;
