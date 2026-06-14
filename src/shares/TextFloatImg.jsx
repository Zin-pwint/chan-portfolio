import React from "react";

const TextFloatImg = ({ img, title }) => {
  return (
    <>
      <div className="relative ">
        <img src={img} alt="" className="w-full" />
        <div className="bg-yellow-100 px-3 py-2 text-red-100 rounded-full w-fit absolute left-4 -translate-y-7 font-bold text-[14px]">
          {title}
        </div>
      </div>
    </>
  );
};

export default TextFloatImg;
