import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// Note: If you use lucide-react or heroicons, swap the className icons below.
// For this clean mockup, we assume standard FontAwesome or SVG maps are available.

export default function HeroSection() {
  const features = [
    { id: 1, icon: "/homeImg/branchService.svg", label: "Account Service" },
    { id: 2, icon: "/homeImg/branchService.svg", label: "Loan" },
    { id: 3, icon: "/homeImg/branchService.svg", label: "Trade Finance" },
    { id: 4, icon: "/homeImg/branchService.svg", label: "Bank Holiday" },
    { id: 5, icon: "/homeImg/branchService.svg", label: "Smart Banking" },
    { id: 6, icon: "/homeImg/branchService.svg", label: "Calculator" },
  ];

  return (
    <div className="bg-nude min-h-screen flex flex-col justify-between overflow-x-hidden relative font-sans">
      {/* Slider Nav Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-dark-red text-white w-8 h-8 flex items-center justify-center rounded-sm hover:bg-dark-red transition-colors z-20"
        aria-label="Previous Slide">
        <IoIosArrowBack />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#700E26] text-white w-8 h-8 flex items-center justify-center rounded-sm hover:bg-[#540a1c] transition-colors z-20"
        aria-label="Next Slide">
        <IoIosArrowForward />
      </button>

      {/* Main Container */}
      <main className="cusContainer mx-auto w-full pt-12 md:pt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative flex-grow">
        {/* Left Side Copy */}
        <div className="lg:col-span-6 space-y-6 z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900浏览 leading-tight tracking-tight">
            Chase Your <br />
            <span>Dream with us</span>
          </h1>
          <p className="text-sm md:text-base text-gray-800 max-w-md font-medium leading-relaxed">
            The harder you work for something, the greater you'll feel when you
            achieve it.
          </p>

          {/* CTA Group */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="bg-dark-red text-white text-xs font-bold tracking-wider px-6 py-3.5 uppercase rounded-sm hover:bg-[#540a1c] transition-colors shadow-sm">
              Apply Loan
            </button>
            <button className="border-2 border-dark-red text-dark-red text-xs font-bold tracking-wider px-6 py-3.5 uppercase rounded-sm hover:bg-dark-red hover:text-white transition-all">
              Loan Calculator
            </button>
          </div>
        </div>

        {/* Right Side Visual Block */}
        <div className="lg:col-span-6 relative w-full h-[450px] md:h-[500px] flex items-end justify-end">
          {/* Geometrical Red Background Accent */}
          <div className="absolute inset-y-0 right-0 w-[85%] bg-[#D31329] rounded-tl-[40px] z-0" />

          {/* Cutout Hero Image */}
          <img
            src="homeImg/family.png"
            alt="Family smiling together"
            className="absolute bottom-0 right-0 h-[85%] w-auto object-contain z-10 pointer-events-none"
          />

          {/* Floating Pill 1: Car Loans */}
          <div
            className="absolute top-24 left-4 bg-white shadow-xl rounded-full px-5 py-2.5 flex items-center gap-3 z-20 border border-gray-100 animate-bounce"
            style={{ animationDuration: "4s" }}>
            <img src="/homeImg/car.svg" alt="" />
            <span className="text-xs font-semibold text-gray-800 tracking-wide">
              Car Loans
            </span>
          </div>

          {/* Floating Pill 2: Home Loan */}
          <div
            className="absolute top-44 right-6 bg-white shadow-xl rounded-full px-5 py-2.5 flex items-center gap-3 z-20 border border-gray-100 animate-bounce"
            style={{ animationDuration: "5s" }}>
            <img src="/homeImg/homeLoan.svg" alt="" />
            <span className="text-xs font-semibold text-gray-800 tracking-wide">
              Home Loan
            </span>
          </div>

          {/* Vertical Carousel Micro-dots */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
            <span className="w-2 h-2 rounded-full bg-pink-400" />
            <span className="w-2 h-2 rounded-full bg-white opacity-60" />
            <span className="w-2 h-2 rounded-full bg-white opacity-60" />
            <span className="w-2 h-2 rounded-full bg-white opacity-60" />
          </div>
        </div>
      </main>

      {/* Feature Navigation Bar */}
      <section className="w-full -mt-20 ">
        {/* Horizontal Slider Pagination Dots */}
        <div className="absolute left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {[...Array(7)].map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${index === 1 ? "bg-red-600 scale-110" : "bg-white/80"}`}
            />
          ))}
        </div>
        <div className=" bg-gray-900/20 backdrop-blur-xl py-6 px-19 mt-10 cusContainer mx-auto">
          <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((feat) => (
              <div
                key={feat.id}
                className="bg-[#FDF9EC] p-6 rounded-xl shadow-xl flex flex-col items-center text-center justify-center gap-4 border border-stone-200/20 hover:-translate-y-1 transition-transform duration-200 cursor-pointer group ">
                <div className="text-[#700E26] text-2xl group-hover:scale-110 transition-transform">
                  <img src={feat.icon} alt="" />
                </div>
                <span className="text-xs font-bold text-gray-800 tracking-tight leading-snug">
                  {feat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
