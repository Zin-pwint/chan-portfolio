import React from "react";

export const BankHistory = () => {
  return (
    <div className="flex justify-center items-center cusContainer mx-auto gap-3 mt-6">
      <div className="p-6">
        <img src="/aboutImg/history.png" alt="a man with yellow shirt" />
      </div>
      <div className="w-1/2">
        <p className="text-3xl text-dark-red font-bold py-5 uppercase">
          MOB Bank History
        </p>
        <p className="w-100 font-bold">
          Over the past 30 years, the bank has played an important role with
          stability and success of domestic banking in Myanmar by contributing
          its efficient and reliable banking services and promoting financial
          intermediation in the country. The bank accepts foreign currencies
          (USD, EUR, SGD, THB, CNY) as current accounts and Myanmar Kyat as
          Current, Call, Savings, and Fixed deposits within its present banking
          network of 48 branches across the country. In addition, the bank also
          provides banking facilities and other financial assistance to its
          customers in the form of commercial loans, trustee, remittance
          services, and mobile banking services.
        </p>
      </div>
    </div>
  );
};
