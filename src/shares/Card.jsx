import React from "react";
import TextFloatImg from "./TextFloatImg";
import { delay, motion } from "framer-motion";
import { fadeUp } from "../animation";

const Card = ({ img, title, text, readMore, icon, mainTitle, delay }) => {
  return (
    <>
      <motion.div
        variants={fadeUp(delay)}
        initial="hidden"
        whileInView="show"
        className="bg-white rounded-b-3xl shadow-md">
        <TextFloatImg img={img} title={title} />
        <div className=" px-5 ">
          <p className="text-red-100 py-8">{mainTitle}</p>
          <p className="">{text}</p>
          <div className="flex items-center text-red-100 font-bold text-[14px] gap-4 py-4">
            {readMore}
            {icon}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Card;
