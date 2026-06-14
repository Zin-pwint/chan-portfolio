import React, { useState, useEffect, useRef } from "react";
import { FaCaretDown, FaBars, FaXmark } from "react-icons/fa6";
import { TiArrowSortedDown } from "react-icons/ti";
import { FiPhoneCall, FiMapPin, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const navbars = [
  {
    title: "Home",
    path: "/",
    megaMenu: [],
  },
  {
    title: "About MOB",
    icon: <FaCaretDown className="text-[10px]" />,
    megaMenu: [
      [
        { label: "Who We Are", path: "/about" },
        { label: "Mission & Vision", path: "/about/mission-vision" },
        { label: "Company Profile", path: "/about/profile" },
      ],
      [
        { label: "Our History", path: "/about/history" },
        { label: "Awards", path: "/about/awards" },
        { label: "CSR Activities", path: "/about/csr" },
      ],
      [
        { label: "Media Gallery", path: "/media" },
        { label: "Partners", path: "/partners" },
        { label: "Events", path: "/events" },
      ],
    ],
  },
  {
    title: "Personal",
    icon: <FaCaretDown className="text-[10px]" />,
    megaMenu: [
      [
        { label: "Personal", path: "/about" },
        { label: "Mission & Vision", path: "/about/mission-vision" },
      ],
      [
        { label: "Our History", path: "/about/history" },
        { label: "Awards", path: "/about/awards" },
      ],
      [
        { label: "Media Gallery", path: "/media" },
        { label: "Partners", path: "/partners" },
        { label: "Events", path: "/events" },
      ],
    ],
  },
  {
    title: "Business",
    icon: <FaCaretDown className="text-[10px]" />,
    megaMenu: [
      [
        { label: "Who We Are", path: "/about" },
        { label: "Mission & Vision", path: "/about/mission-vision" },
        { label: "Company Profile", path: "/about/profile" },
      ],
      [
        { label: "Our History", path: "/about/history" },
        { label: "Awards", path: "/about/awards" },
        { label: "CSR Activities", path: "/about/csr" },
      ],
      [
        { label: "Media Gallery", path: "/media" },
        { label: "Partners", path: "/partners" },
        { label: "Events", path: "/events" },
      ],
    ],
  },
  {
    title: "Smart Banking",
    icon: <FaCaretDown className="text-[10px]" />,
    megaMenu: [
      [
        { label: "Who We Are", path: "/about" },
        { label: "Mission & Vision", path: "/about/mission-vision" },
        { label: "Company Profile", path: "/about/profile" },
      ],
      [
        { label: "Our History", path: "/about/history" },
        { label: "Awards", path: "/about/awards" },
        { label: "CSR Activities", path: "/about/csr" },
      ],
      [
        { label: "Media Gallery", path: "/media" },
        { label: "Partners", path: "/partners" },
        { label: "Events", path: "/events" },
      ],
    ],
  },
  { title: "Careers", megaMenu: [] },
];

const languages = [
  { code: "mm", label: "Myanmar" },
  { code: "en", label: "English" },
  { code: "zh", label: "Chinese" },
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");

  // Ref to monitor clicks outside the main desktop navigation block
  const desktopNavRef = useRef(null);

  const selectedLanguage = languages.find((l) => l.code === selectedLang);

  // Close the desktop mega menu if a user clicks outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        desktopNavRef.current &&
        !desktopNavRef.current.contains(event.target)
      ) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Handler for desktop menu clicks
  const handleMenuClick = (index, hasSubmenu) => {
    if (!hasSubmenu) return; // If it's a direct route link, do nothing here

    // Toggle menu: Close if already active, open if not
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <>
      {/* 1. TOP NAV (Dark Maroon Red Background) */}
      <div className="bg-dark-red py-4">
        <div className="cusContainer flex justify-between items-center mx-auto py-2 px-4 lg:px-0">
          <div className="hidden md:block w-1/4"></div>

          {/* Desktop Utilities Layout */}
          <div className="hidden md:flex justify-end items-center gap-8 w-3/4 text-white font-medium text-sm">
            {/* Search Input Box */}
            <div className="relative w-48 xl:w-56 text-gray-700">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-nude rounded-md py-3 px-3 pr-8 text-xs outline-none text-dark-red placeholder:text-dark-red"
              />
              <FiSearch className="absolute right-2.5 top-1/2 -translate-y-1/2 text-dark-red" />
            </div>

            {/* Contact Link */}
            <a
              href="#contact"
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <span>Contact</span>
              <img src="phone.svg" alt="" />
            </a>

            {/* Branch/ATM Link */}
            <a
              href="#branches"
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <span>Branch/ATM</span>
              <img src="phoneIcon.svg" alt="" />
            </a>

            {/* Language Dropdown Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen((prev) => !prev)}
                className="flex items-center gap-1 hover:opacity-80 cursor-pointer">
                {selectedLanguage ? selectedLanguage.label : "Language"}
                <TiArrowSortedDown className="text-xs" />
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 bg-white rounded-md shadow-xl overflow-hidden z-50 w-28 border border-gray-100">
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      className="px-3 py-2 text-xs text-gray-800 hover:bg-[#6B001A] hover:text-white cursor-pointer transition-colors"
                      onClick={() => {
                        setSelectedLang(lang.code);
                        setLangOpen(false);
                      }}>
                      {lang.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile hamburger alignment toggle */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-white text-xl ml-auto py-1">
            {mobileMenu ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION (Cream / Nude Background) */}
      <div className="bg-nude border-b border-gray-200/50 sticky top-0 z-40 shadow-sm relative">
        <div className="cusContainer mx-auto flex items-center justify-between px-4 lg:px-0 py-3">
          {/* Brand Identity Logo Group */}
          <div className="flex items-center gap-2">
            <Link to="/">
              <img
                src="mobNewLogo.svg"
                alt="MOB Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Main desktop navigation items mapping process */}
          <div
            ref={desktopNavRef}
            className="hidden md:flex items-center justify-center gap-1 lg:gap-3">
            {navbars.map((item, i) => {
              const hasSubmenu = item.megaMenu?.length > 0;
              return (
                <div
                  key={i}
                  className="static select-none"
                  onClick={() => handleMenuClick(i, hasSubmenu)}>
                  {!hasSubmenu ? (
                    <Link
                      to={item.path || "/"}
                      className="flex items-center gap-1 text-[#6B001A] hover:text-red-700 font-bold text-xs lg:text-[14px] px-2.5 lg:px-3 py-2 transition-colors cursor-pointer">
                      {item.title}
                    </Link>
                  ) : (
                    <div className="flex items-center gap-1 text-[#6B001A] hover:text-red-700 font-bold text-xs lg:text-[14px] px-2.5 lg:px-3 py-2 transition-colors cursor-pointer">
                      <p>{item.title}</p>
                      {item.icon}
                    </div>
                  )}

                  {/* Submenu Dropdown Panel Container */}
                  {activeMenu === i && hasSubmenu && (
                    /* Restored standard top positioning alignment since we aren't relying on hover tracking gaps anymore */
                    <div className="hidden lg:block absolute top-full left-0 right-0 w-full z-50">
                      <div className="cusContainer mx-auto py-10 px-10 bg-white/20  backdrop-blur-2xl border border-gray-200 shadow-xl rounded-b-xl">
                        <div className="grid grid-cols-3 gap-10">
                          {item.megaMenu.map((column, idx) => (
                            <div key={idx} className="space-y-4">
                              {column.map((menuItem, index) => (
                                <Link
                                  key={index}
                                  to={menuItem.path}
                                  onClick={() => setActiveMenu(null)}
                                  className="block font-bold text-sm text-gray-700 hover:text-[#6B001A] cursor-pointer transition-all duration-200">
                                  {menuItem.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Action Trigger: Sign-In Dropdown */}
          <div className="hidden md:block relative">
            <button
              onClick={() => setSignInOpen(!signInOpen)}
              className="flex items-center justify-between gap-4 border border-[#6B001A] rounded bg-transparent px-4 py-1.5 text-[#6B001A] font-bold text-sm hover:bg-[#6B001A]/5 transition-colors cursor-pointer min-w-[100px]">
              <span>Sign In</span>
              <img src="lock.svg" className="w-3 h-3 text-[#6B001A]" alt="" />
              <TiArrowSortedDown className="text-xs" />
            </button>

            {signInOpen && (
              <div className="absolute right-0 mt-1 bg-white border border-gray-100 shadow-xl rounded w-44 overflow-hidden z-50">
                <div className="px-4 py-2.5 text-xs font-bold text-gray-700 hover:bg-[#6B001A] hover:text-white cursor-pointer transition-colors border-b border-gray-50">
                  iBanking
                </div>
                <div className="px-4 py-2.5 text-xs font-bold text-gray-700 hover:bg-[#6B001A] hover:text-white cursor-pointer transition-colors">
                  mBanking
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 3. MOBILE MENU BACKDROP TRAVERSAL */}
        {mobileMenu && (
          <div className="md:hidden bg-[#FFFDF6] border-t border-gray-100 px-4 py-2 space-y-1">
            {navbars.map((item, i) => (
              <div
                key={i}
                className="border-b border-gray-100 last:border-none">
                <div
                  onClick={() => setActiveMenu(activeMenu === i ? null : i)}
                  className="flex justify-between items-center py-3 font-bold text-[#6B001A] text-sm">
                  <p>{item.title}</p>
                  {item.icon}
                </div>

                {activeMenu === i && item.megaMenu?.length > 0 && (
                  <div className="bg-gray-50/50 rounded px-3 py-2 mb-2 space-y-3">
                    {item.megaMenu.flat().map((menu, index) => (
                      <p
                        key={index}
                        className="text-xs font-medium text-gray-600">
                        {menu.label || menu}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Sign In options */}
            <div className="pt-3 pb-4 grid grid-cols-2 gap-3">
              <div className="bg-[#6B001A] text-center text-white py-2 rounded text-xs font-bold">
                iBanking
              </div>
              <div className="bg-[#6B001A] text-center text-white py-2 rounded text-xs font-bold">
                mBanking
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
