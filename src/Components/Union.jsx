import React from "react";
import { motion } from "framer-motion";
import { fadeInFL, fadeInFR } from "../animation";
const Union = () => {
  return (
    <>
      <div className="bg-[url('/bottomBanner.png')] bg-no-repeat bg-cover w-full bg-center mt-10 px-6 lg:px-0">
        <motion.div className="cusContainer mx-auto md:flex-row flex flex-col py-20 gap-10 overflow-hidden">
          <motion.div
            variants={fadeInFL(0.3)}
            initial="hidden"
            whileInView="show"
            className="bg-yellow-100 p-5 rounded-lg">
            <div className="flex gap-2">
              <img src="/homeImg/unionicon.svg" alt="" />
              <p className="text-red-100 font-bold uppercase">Union Pay</p>
            </div>
            <p className="py-5">
              MOB received Merchant Service & Trademark License Agreement from
              Union Pay International (UPI) on 24th December 2015 and started
              issuing MOB UnionPay Co-brand Credit Card.
            </p>
          </motion.div>
          <motion.div
            variants={fadeInFR(0.3)}
            initial="hidden"
            whileInView="show"
            className="bg-yellow-100 p-4 rounded-lg">
            <div className="flex gap-2">
              <img src="/homeImg/unionicon.svg" alt="" />
              <p className="text-red-100 font-bold uppercase">Union Pay</p>
            </div>
            <p className="py-5">
              MOB received Merchant Service & Trademark License Agreement from
              Union Pay International (UPI) on 24th December 2015 and started
              issuing MOB UnionPay Co-brand Credit Card.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Union;
