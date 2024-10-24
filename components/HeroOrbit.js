import React from "react";

const HeroOrbit = ({ children, size, rotation }) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div className="animate-spin [animation-duration:30s]">
        <div
          className="flex items-start justify-start "
          style={{
            height: `${size}px`,
            width: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div
            className="inline-flex animate-spin [animation-duration:10s]"
            style={{
              transform: `rotate(${rotation * -1}deg)`,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
