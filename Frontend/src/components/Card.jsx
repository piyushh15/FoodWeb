import React from 'react';
import { Carousel } from "@material-tailwind/react";
import i5 from "../assets/carouselimage/i1.jpg";
import i2 from "../assets/carouselimage/i2.jpg";
import i3 from "../assets/carouselimage/i3.png";
import i4 from "../assets/carouselimage/i4.jpg";
import i1 from "../assets/carouselimage/i5.jpg";

const Card = () => {
  return (
    <div className='h-[95vh] p-[40px] '>
      <Carousel className="rounded-xl max-w-fit h-[32rem]">
      <img
        src={i1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={i2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={i3}
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
      src={i4}
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
       src={i5}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>

    </div>
    
    
  );
};

export default Card;
