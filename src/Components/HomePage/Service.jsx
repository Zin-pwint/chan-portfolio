import React from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa6";
import TextFloatImg from "../../shares/TextFloatImg";
import { delay, motion } from "framer-motion";
import { fadeUp } from "../../animation";
const services = [
  {
    title: "MPU CREDIT CARD",
    img: "/homeImg/service1.png",
    text: "Monthly Income of at least 150,000 kyats (Minimum annual income MMK 1,800,000/- or",
    readMore: "Read More",
    icon: <FaCaretRight />,
    delay: 0.2,
  },
  {
    title: "SAVINGS DEPOSIT ACCOUNT",
    img: "/homeImg/service1.png",
    text: "Earn interest by depositing money every month.",
    readMore: "Read More",
    icon: <FaCaretRight />,
    delay: 0.3,
  },
  {
    title: "Fixed Deposit",
    img: "/homeImg/service1.png",
    text: "Higher rate of interest than savings account until maturity date. Interest can be transferred to",
    readMore: "Read More",
    icon: <FaCaretRight />,
    delay: 0.4,
  },
  {
    title: "Loans",
    img: "/homeImg/service1.png",
    text: "Monthly Income of at least 150,000 kyats (Minimum annual income MMK 1,800,000/- or",
    readMore: "Read More",
    icon: <FaCaretRight />,
    delay: 0.5,
  },
  {
    title: "Import/Export (L/C)",
    img: "/homeImg/service1.png",
    text: "Monthly Income of at least 150,000 kyats (Minimum annual income MMK 1,800,000/- or",
    readMore: "Read More",
    icon: <FaCaretRight />,
    delay: 0.6,
  },
  {
    title: "Trustee Service",
    img: "/homeImg/service1.png",
    text: "Monthly Income of at least 150,000 kyats (Minimum annual income MMK 1,800,000/- or",
    readMore: "Read More",
    icon: <FaCaretRight />,
    delay: 0.7,
  },
];

const Service = () => {
  return (
    <>
      <div className="bg-[url('/frameBg.svg')] bg-center">
        <div className="cusContainer mx-auto">
          <p className="text-2xl text-red-100 uppercase font-semibold text-center md:pt-0 pt-10">
            MOB bank services
          </p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10 px-6 lg:px-0">
            {services.map((item, i) => (
              <motion.div
                variants={fadeUp(item.delay)}
                whileInView="show"
                initial="hidden"
                className="bg-white rounded-b-3xl shadow-md">
                <TextFloatImg img={item.img} title={item.title} />
                <div className="px-5">
                  <p className="pt-10">{item.text}</p>
                  <div className="flex items-center text-red-100 font-bold text-[14px] gap-4 py-4">
                    {item.readMore}
                    {item.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* <div>
        <div className="cusContainer mx-auto my-10">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10 px-4 lg:px-0">
            {services.slice(3, 6).map((item, i) => (
              <div className="bg-white rounded-b-3xl shadow-md">
                <TextFloatImg img={item.img} title={item.title} />
                <div className=" px-5 ">
                  <p className="pt-10">{item.text}</p>
                  <div className="flex items-center text-red-100 font-bold text-[14px] gap-4 py-4">
                    {item.readMore}
                    {item.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Service;
