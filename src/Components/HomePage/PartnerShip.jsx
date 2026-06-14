import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fadeUp } from "../../animation";
const PartnersImg = [
  "/homeImg/partnerLogo1.png",
  "/homeImg/partnerLogo2.png",
  "/homeImg/partnerLogo3.png",
  "/homeImg/partnerLogo4.png",
  "/homeImg/partnerLogo5.png",
  "/homeImg/partnerLogo6.png",
];

const PartnerShip = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-10 overflow-x-hidden bg-white">
        <p className="text-gray-500 text-3xl font-semibold pl-1">Our Client</p>
        <motion.p
          variants={fadeUp(0.4)}
          initial="hidden"
          whileInView="show"
          className="text-gray-400 pt-3 px-3 md:px-0 text-center">
          We have been working with some Fortune 500+ clients
        </motion.p>

        <div className=" mx-auto overflow-hidden cusContainer my-10 relative">
          {/* LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex">
            <motion.div
              className="flex w-max shrink-0"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ ease: "linear", duration: 20, repeat: Infinity }}>
              {PartnersImg.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  className="xl:w-40 w-30 h-auto pr-10  object-contain"
                />
              ))}
            </motion.div>
            <motion.div
              className="flex w-max shrink-0"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ ease: "linear", duration: 20, repeat: Infinity }}>
              {PartnersImg.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  className="w-30 xl:w-40 h-auto pr-10 object-contain"
                />
              ))}
            </motion.div>
            <motion.div
              className="flex w-max shrink-0"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ ease: "linear", duration: 20, repeat: Infinity }}>
              {PartnersImg.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  className="w-30 xl:w-40 h-auto pr-10 object-contain"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerShip;
