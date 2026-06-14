import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

export default function AppFeatureSection() {
  // Calculator Form State
  const [service, setService] = useState("My Bank Deposit");
  const [agentPoint, setAgentPoint] = useState("250");
  const [charge, setCharge] = useState("10");

  const handleCalculate = (e) => {
    e.preventDefault();
    console.log("Calculating values:", { service, agentPoint, charge });
    // Add logic here if needed
  };

  return (
    <section className="bg-nude min-h-[600px] py-16 md:py-24 relative overflow-hidden">
      {/* Dynamic Background Dotted World Map Graphic Overlay */}

      <div className="bg-[url('homeImg/Group.svg')] cusContainer mx-auto px-4 lg:px-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12  items-center">
          {/* Left Column: App Promo Content */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#6B001A] leading-tight tracking-tight">
                Discover great things <br />
                with our app
              </h2>
              <p className="text-sm md:text-base text-stone-600 max-w-lg leading-relaxed font-medium">
                Business plan lean startup holy grail disruptive. Crowdfunding
                beta prototype gen-z incubator niche market.
              </p>
            </div>

            {/* App Mockups Container */}
            <div className="flex items-end gap-4 pt-4">
              <img src="homeImg/mobile.png" alt="" />
            </div>

            {/* Store Download Badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              {/* Google Play */}
              <a href="#playstore" className="">
                <img
                  src="homeImg/googlestore.svg"
                  alt="Get it on Google Play"
                  className=""
                />
              </a>
              {/* App Store */}
              <a href="#appstore" className="">
                <img
                  src="homeImg/appstore.svg"
                  alt="Available on the App Store"
                  className=""
                />
              </a>
            </div>
          </div>

          {/* Right Column: Composite Image & Form Layout */}
          <div className="lg:col-span-6 relative w-full flex flex-col md:flex-row items-center justify-center min-h-[420px] pt-12 md:pt-0">
            {/* Main Lifestyle User Asset Photo */}
            <div className="w-full pr-40  rounded-xl overflow-hidden ">
              <img
                src="homeImg/manImg.png"
                alt="Smiling man holding debit card using digital device"
                className="w-full h-[320px] md:h-[380px] object-cover"
              />
            </div>

            {/* "My Calculator" Floating Card Panel Widget */}
            <div className="w-full md:w-[280px] lg:w-[320px] bg-[#6B001A] text-white p-6 shadow-2xl rounded-sm mt-6 md:mt-0 md:absolute md:bottom-[-20px] md:right-0 z-20 border border-[#520014]">
              <h3 className="text-xl font-bold tracking-tight mb-6">
                My Calculator
              </h3>

              <form onSubmit={handleCalculate} className="space-y-4">
                {/* Field 1: Services Select UI */}
                <div className="bg-white rounded px-3 py-1.5 relative group cursor-pointer">
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wide">
                    Services
                  </label>
                  <div className="flex items-center justify-between text-gray-800 font-bold text-xs mt-0.5">
                    <span>{service}</span>
                    <FaChevronDown className="text-[10px] text-gray-500" />
                  </div>
                </div>

                {/* Field 2: Agent Point Amount UI */}
                <div className="bg-white rounded px-3 py-1.5 relative group cursor-pointer">
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wide">
                    Agent Point Amount:
                  </label>
                  <div className="flex items-center justify-between text-gray-800 font-bold text-sm mt-0.5">
                    <span>{agentPoint}</span>
                    <FaChevronDown className="text-[10px] text-gray-500" />
                  </div>
                </div>

                {/* Field 3: Charge UI */}
                <div className="bg-white rounded px-3 py-1.5 relative group cursor-pointer">
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wide">
                    Charge
                  </label>
                  <div className="flex items-center justify-between text-gray-800 font-bold text-sm mt-0.5">
                    <span>{charge}</span>
                    <FaChevronDown className="text-[10px] text-gray-500" />
                  </div>
                </div>

                {/* Action Trigger Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#FBCD2A] hover:bg-[#e2b722] text-stone-900 text-xs font-extrabold tracking-wider py-3.5 rounded transition-colors uppercase mt-2 shadow-md">
                  Calculate
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
