import React from "react";
import { motion } from "framer-motion";
import { fadeInFL, scaleUp } from "../../animation";
const ChairManMessage = () => {
  return (
    <>
      <div className="bg-[url('/frameBg.svg')] lg:bg-center bg-right">
        <div className="cusContainer mx-auto md:py-20 py-0 md:px-4 px-0">
          <div className="flex md:flex-row flex-col items-stretch justify-center md:gap-10 gap-0">
            {/* LEFT CONTENT */}
            <motion.div
              variants={fadeInFL(0.3)}
              initial="hidden"
              whileInView="show"
              className="bg-[url('/homeImg/yellowBg.svg')] bg-cover bg-center  p-8 lg:p-14 flex-1 flex flex-col justify-center max-h-[400px]">
              <p className="text-2xl lg:text-3xl uppercase text-red-100 font-bold">
                Chairman's Message
              </p>

              <p className="py-6 text-base leading-6 text-slate-800">
                “MOB bank is in the process of modernizing its technology
                platform with the launch of Temenos’s core banking system (T24)
                across all branches in 2018. This allows the bank to improve
                operations efficiency and customer service delivery. Off the T24
                platform, we will be able to reduce manual work and also launch
                internet banking, mobile banking and mobile wallet, bringing
                convenience to our customers.”
              </p>

              <p className="uppercase text-red-100 font-bold">
                Daw Kyi Kyi Than <br />
                Chairman, MOB Bank
              </p>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              variants={scaleUp()}
              initial="hidden"
              whileInView="show"
              className="flex-1 max-h-[400px]">
              <img
                src="/homeImg/chairman.png"
                alt="Chairman"
                className="w-full h-full object-cover "
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChairManMessage;
