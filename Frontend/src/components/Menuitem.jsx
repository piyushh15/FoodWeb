import React from 'react';
import Menuitemcard from './Menuitemcard'
import foodData from '../utils/FoodData'; 

const Menuitem = ({ categoryname }) => {
  // Filter the foodData based on the provided category name
  const filteredData = foodData.filter(item => item.CategoryName === categoryname);

  return (
    <div className='flex justify-center items-center flex-wrap max-h-max p-[3rem] '>
      {filteredData.map((item, index) => (
        <Menuitemcard
          key={index}
          name={item.name}
          img={item.img}
          options={item.options}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Menuitem;
