import React from "react";

const SectionHeader = ({
    title,
    description,
    eyebrow,
}) => {
  return (
    <div>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-500 to-sky-300 text-transparent bg-clip-text ">
          {eyebrow}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 mt-10 max-w-sm mx-auto">
        <h1 className="font-medium text-3xl md:text-5xl text-center font-serif ">
          {title}
        </h1>
        <p className="text-center md:text-lg lg:text-xl text-white/60 ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;
