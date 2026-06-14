import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function QuestionsBanner() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Maroon Floating Container */}
        <div className="bg-[#6B0012] rounded-xl px-6 py-5 md:px-10 md:py-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 shadow-lg">
          {/* Left Text Column */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-lg md:text-xl tracking-tight">
              Still have questions?
            </h3>
            <p className="text-white/70 text-xs md:text-sm mt-0.5">
              We are here to help.
            </p>
          </div>

          {/* Right Content Group: Contacts & CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 lg:gap-12 w-full md:w-auto justify-center md:justify-end">
            {/* Phone Support */}
            <div className="flex items-center space-x-3 text-left">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white text-sm">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-white font-semibold text-xs tracking-wide">
                  +49 176 123 456
                </p>
                <p className="text-white/60 text-[10px]">Support Hotline</p>
              </div>
            </div>

            {/* Email Support */}
            <div className="flex items-center space-x-3 text-left">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white text-sm">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-white font-semibold text-xs tracking-wide">
                  help@bank.com
                </p>
                <p className="text-white/60 text-[10px]">Support Email</p>
              </div>
            </div>

            {/* Chat Button */}
            <button className="bg-[#FFD13B] hover:bg-[#e5bc35]  font-bold text-xs px-5 py-2.5 rounded-lg transition-colors duration-150 shadow-sm whitespace-nowrap">
              Chat with us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
