import React from "react";
import grainImage from "../assets/images/grain.jpg";

const Card = ({children}) => {
  return (
    <div className="relative bg-white/15 outline outline-2 outline-white/20 rounded-xl overflow-hidden ">
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      {children}
    </div>
  );
};

export default Card;
