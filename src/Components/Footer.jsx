import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-dark-red pt-8">
      {/* Yellow Main Container */}
      <div className="cusContainer mx-auto bg-yellow-100 px-8 py-12 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-8 ">
        {/* Left Column: Brand & Socials */}
        <div className="md:col-span-4 flex flex-col justify-between space-y-6">
          <div>
            {/* Logo area */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-bg-dark-red rounded-tl-xl rounded-br-xl flex items-center justify-center">
                {/* Fallback stylized shape matching the logo vibe */}
                <span className="text-yellow-100 font-bold text-xl">M</span>
              </div>
              <div>
                <img src="mobNewLogo.svg" alt="" />
              </div>
            </div>

            <hr className="border-[#6B0012]/20 my-6 max-w-[80%]" />

            <p className="text-sm font-medium opacity-90 max-w-xs leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-5 text-xl pt-4">
            <a href="#" className="hover:opacity-70 transition-opacity">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <FaTwitter />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Center Columns: Links */}
        <div className="md:col-span-5 grid grid-cols-3 gap-4">
          {/* Company Pages */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-wider mb-4">
              Company Pages
            </h3>
            <ul className="space-y-2 text-xs font-medium opacity-90">
              <li>
                <a href="#" className="hover:underline">
                  Lorem Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Lorem Ipsum
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Lorem Ipsum
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Lorem Ipsum
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Lorem Ipsum
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Lorem Ipsum
                </a>
              </li>
            </ul>
          </div>

          {/* Account Services */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-wider mb-4">
              Account Services
            </h3>
            <ul className="space-y-2 text-xs font-medium opacity-90">
              <li>
                <a href="#" className="hover:underline">
                  Lorem Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Lorem Ipsum
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Lorem Ipsum
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Lorem Ipsum
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Lorem Ipsum
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Lorem Ipsum
                </a>
              </li>
            </ul>
          </div>

          {/* Card Services */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-wider mb-4">
              Card Services
            </h3>
            <ul className="space-y-2 text-xs font-medium opacity-90">
              <li>
                <a href="#" className="hover:underline">
                  Lorem Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Lorem Ipsum
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Lorem Ipsum
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Lorem Ipsum
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Lorem Ipsum
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Lorem Ipsum
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Contact Info */}
        <div className="md:col-span-3 space-y-4 text-xs font-medium">
          <h3 className="font-bold text-xs uppercase tracking-wider mb-4">
            LOREM US
          </h3>

          <div className="flex items-start space-x-3">
            <FaMapMarkerAlt className="mt-0.5 flex-shrink-0" />
            <p className="opacity-90 leading-tight">
              123 Lorem Ipsum Lorem 123 Lorem Ipsum Lorem
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="flex-shrink-0" />
            <p className="opacity-90">0923-456789-10</p>
          </div>

          <div className="flex items-center space-x-3">
            <FaEnvelope className="flex-shrink-0" />
            <p className="opacity-90">Lorem Ipsum Lorem</p>
          </div>
        </div>
      </div>

      {/* Maroon Slogan Bar */}
      <div className="w-full text-center py-4 bg-[#6B0012]">
        <p className="text-white text-[11px] font-bold tracking-widest uppercase">
          Always With You!
        </p>
      </div>

      {/* Black Bottom Bar */}
      <div className="w-full bg-[#222222] text-center py-3 border-t border-zinc-800">
        <p className="text-zinc-400 text-[10px] tracking-wide">
          Copyright © MOB Bank Myanmar Co.,Ltd. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
