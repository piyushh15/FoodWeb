import React from 'react'
import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <div className='pl-[3rem] pr-[3rem]'>

   
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-white-50 py-6 text-center md:justify-between">
       <Typography color="white" className="font-normal">
         &copy; 2024 FoodWeb
       </Typography>
       <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
         <li>
           <Typography
             as="a"
             href="#"
             color="white"
             className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
           >
             About Us
           </Typography>
         </li>
         <li>
           <Typography
             as="a"
             href="#"
             color="white"
             className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
           >
             License
           </Typography>
         </li>
         <li>
           <Typography
             as="a"
             href="#"
             color="white"
             className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
           >
             Contribute
           </Typography>
         </li>
         <li>
           <Typography
             as="a"
             href="#"
             color="white"
             className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
           >
             Contact Us
           </Typography>
         </li>
       </ul>
     </footer>
     </div>
  )
}

export default Footer