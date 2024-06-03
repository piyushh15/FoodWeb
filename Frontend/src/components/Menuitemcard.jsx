import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import cart from "../assets/carts.png";


const MenuItemCard = ({ name, img, options, description }) => {
  const { addToCart } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState(Object.keys(options[0])[0]);
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = () => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      alert('Please log in to add items to the cart.');
      return;
    }

    const price = parseInt(options[0][selectedSize]) * quantity;
    addToCart({ name, img, description }, quantity, selectedSize, price);
    //toast.success('Item added to cart successfully!');
  };

  return (
    <div className="p-[20px] pt-[0] bg-black">
      <div className="max-w-[20rem] p-[5px]  border border-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="h-[15rem] w-[19.2rem] flex items-center justify-center">
          <img className="w-[19.2rem] h-[100%]" src={img} alt={name} />
        </div>
        <div className="p-3">
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-white">{name}</h5>
          <p className="mb-2 font-[500] text-[0.84rem] text-white font-sans">{description}</p>
          <div className="mb-3">
            <select
              className="block w-full p-2 text-black bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={selectedSize}
              onChange={handleSizeChange}
            >
              {Object.keys(options[0]).map((size, index) => (
                <option className="text-black bg-white"key={index} value={size}>
                  {size} - ₹{options[0][size]}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-[0.98rem] text-white">Price: ₹{(parseInt(options[0][selectedSize]) * quantity).toFixed(2)}</div>
            <div className='text-white'>
              Quantity:
              <input
                className="w-12 ml-2 border bg-white border-gray-300  text-black rounded-md p-1 text-center focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to Cart
            <img className="m-[4px] h-[1rem] w-[1rem]" src={cart} alt="" />
          </button>
        </div>
      </div>
     
    </div>
  );
};

export default MenuItemCard;
