import React from "react";
const localizations = [
  { text: "English", img: "/topbarImg/eng.svg" },
  { text: "Chinese", img: "/topbarImg/chinese.svg" },
  { text: "Myanamr", img: "/topbarImg/mm.svg" },
];
const TopBar = () => {
  return (
    <>
      <div className="bg-red-100 border-b border-yellow-100/50">
        <div className="cusContainer mx-auto flex justify-end items-center py-3 gap-4 pe-4 lg:pr-8">
          {localizations.map((lang, i) => (
            <div className="flex justify-center items-center gap-2 text-white">
              <p>{lang.text}</p>
              <img src={lang.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopBar;
