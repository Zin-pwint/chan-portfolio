import React from "react";
const texts = [
  "Calculate",
  "Auctions",
  "Public Notices",
  "Bank Holiday",
  "Digital Calendar",
];
const YellowBar = () => {
  return (
    <>
      <div className="bg-yellow-100">
        <div className="flex cusContainer justify-center items-center md:gap-10 gap-2 mx-auto py-4">
          {texts.map((text, i) => (
            <div className="">
              <div className="text-red-100 md:text-lg text-xs font-bold ">
                {text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default YellowBar;
