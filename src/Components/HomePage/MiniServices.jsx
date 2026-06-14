import React from "react";
const miniservices = [
  { img: "/homeImg/houseIcon.svg", title: "Account Service" },
  { img: "/homeImg/houseIcon.svg", title: "Business Lending" },
  { img: "/homeImg/houseIcon.svg", title: "Trade Finance & Remittance" },
  { img: "/homeImg/houseIcon.svg", title: "Business Cash Management" },
  { img: "/homeImg/houseIcon.svg", title: "Treasury Service" },
];

const MiniServices = () => {
  return;
  <>
    <div>Hello</div>
    <div>
      {miniservices.map((service, i) => (
        <div key={i}>
          <img src={service.img} alt="" />
          <p>{service.title}</p>
        </div>
      ))}
    </div>
  </>;
};

export default MiniServices;
