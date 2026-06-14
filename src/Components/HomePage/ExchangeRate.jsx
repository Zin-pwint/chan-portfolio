import React from "react";
import { motion } from "framer-motion";
const ExchangeRate = () => {
  return (
    <>
      <div className="bg-[url('/frameBg.svg')] bg-center">
        <motion.div className="cusContainer mx-auto md:flex-row flex flex-col-reverse justify-center items-center gap-4 py-0 md:py-15 md:px-2 lg:px-0 px-0 overflow-hidden">
          {/* left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-[500px]">
            <img
              src="/homeImg/mobBank.svg"
              alt="Exchange Rate"
              className="w-full"
            />
          </motion.div>
          {/* right */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=" bg-[url('/homeImg/yellowBg.svg')] bg-center md:w-[700px] lg:p-14 py-5 px-10">
            {/* <div> */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl uppercase text-red-100 font-bold">
              Myanmar Oriental Bank
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-[12px] font-semibold py-6">
              <p>
                Myanmar Oriental Bank Limited was incorporated as a private
                limited bank under the Financial Institutions of Myanmar Law and
                started its operations on 18th November 1993. Its founding
                members were prominent bankers retired from state-owned banks,
                family members holding the majority of shares, and their close
                friends and relatives from the business circle.
              </p>
              <p>
                Over the past 24 years, the bank has played an important role in
                the stability and success of domestic banking in Myanmar by
                contributing its efficient and reliable banking services and
                promoting financial intermediation in the country..
              </p>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="bg-red-100 px-4 py-2 text-white rounded-sm">
              Read More
            </motion.button>
            {/* </div> */}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ExchangeRate;
