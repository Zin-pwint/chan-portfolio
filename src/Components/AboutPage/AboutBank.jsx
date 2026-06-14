import React from "react";

const AboutBank = () => {
  return (
    <div className="flex justify-center items-center cusContainer mx-auto px-10">
      <div className="w-1/2">
        <p className="text-3xl font-bold py-5">
          ABOUT <span className="text-dark-red ">MOB</span> <br /> BANK.
        </p>
        <p className="w-100 font-bold">
          Myanmar Oriental Bank Limited was incorporated as a private limited
          bank under the Financial Institutions of Myanmar Law and started its
          operations on 18th November 1993. Its founding members were prominent
          bankers retired from state-owned banks, family members holding most
          shares, their close friends, and relatives from the business circle.
        </p>
      </div>
      <div className="w-1/2">
        <img src="/aboutImg/yellowMan.png" alt="a man with yellow shirt" />
      </div>
    </div>
  );
};

export default AboutBank;
