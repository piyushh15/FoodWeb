import React from "react";
import "./Upper.css";

const Upper = () => {
  let url="https://media.istockphoto.com/id/922783734/photo/assorted-indian-recipes-food-various.jpg?s=612x612&w=0&k=20&c=p8DepvymWfC5j7c6En2UsQ6sUM794SQMwceeBW3yQ9M="
  return (
    <div className="upper-container font-madimi">
      <div className="upper-row">
        <div className="upper-left">
          <h1> Our food depends on your mood</h1>
          <h2 className="text-orange-700 font-bold"> Are you hungry?? Dont wait!!!</h2>
          <h3>Let's start to order food Now!!!</h3>
        </div>
        <div className="upper-right">
          <div className="upper-img">
            <img alt=""src={url}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upper;
