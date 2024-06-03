import React, { useState } from 'react';
import salad from '../assets/menu/salad.png';
import Dessert from '../assets/menu/Dessert.png';
import coke from '../assets/menu/coke.png';
import pasta from '../assets/menu/pasta.png';
import sandwich from '../assets/menu/sandwich.png';
import veg from '../assets/menu/veg.png';
import rolls from '../assets/menu/rolls.png';
import './Menu.css';
import Menuitem from './Menuitem'; 

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Salad"); 

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
    <div className="menu-container text-white font-briem">
      <h2>Explore Our Menu</h2>
      <p>
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div className="menu-image">
        <div className="menu-item" onClick={() => handleClick("Salad")}>
          <img src={salad} alt="Salad" />
          <p className='text-white'>Salad</p>
        </div>
        <div className="menu-item" onClick={() => handleClick("Dessert")}>
          <img src={Dessert} alt="Dessert" />
          <p>Dessert</p>
        </div>
        <div className="menu-item" onClick={() => handleClick("Pasta")}>
          <img src={pasta} alt="Pasta" />
          <p>Pasta</p>
        </div>
        <div className="menu-item" onClick={() => handleClick("Coke")}>
          <img src={coke} alt="Coke" />
          <p>Coke</p>
        </div>
        <div className="menu-item" onClick={() => handleClick("Veg")}>
          <img src={veg} alt="Veg" />
          <p>Veg</p>
        </div>
        <div className="menu-item" onClick={() => handleClick("Starters")}>
          <img src={sandwich} alt="Starters" />
          <p>Starters</p>
        </div>
        <div className="menu-item" onClick={() => handleClick("NonVeg")}>
          <img src={rolls} alt="NonVeg" />
          <p>NonVeg</p>
        </div>
      </div>
      {/* Render Menuitem only when a category is selected */}
      
      
    </div>
   
    {selectedCategory && <Menuitem categoryname={selectedCategory} />}
    
    </>
    
  );
};

export default Menu;
