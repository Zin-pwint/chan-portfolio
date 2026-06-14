import React from "react";
import Card from "../../shares/Card";
import { FaCaretRight } from "react-icons/fa6";
const pnbDigiItems = [
  {
    img: "/homeImg/pnb.png",
    title: "29 October 2025",
    mainTitle: "သတိပြုစရာ ငွေကြေးလိမ်လည်မှု",
    text: "သတိပြုစရာ ငွေကြေးလိမ်လည်မှု - အထောက်အထားအတုဖြင့် ဘဏ်စာရင်းဖွင့်လှစ်ခြင်း ယနေ့ခေတ်တွင် နည်းပညာတိုးတက်လာသည်နှင့်အမျှ ...",
    readMore: "Read More",
    icon: <FaCaretRight />,
  },
  {
    img: "/homeImg/pnb.png",
    title: "29 October 2025",
    mainTitle: "လန်ချန်း-မဲခေါင် Initiative အရ နိုင်ငံတကာမှာ ",
    text: "လန်ချန်း-မဲခေါင် Initiative အရ နိုင်ငံတကာမှာ ဖြစ်ပေါ်နေတဲ့ Fraud Case အခြေအနေများနှင့်ပတ်သက်ပြီး...",
    readMore: "Read More",
    icon: <FaCaretRight />,
  },
  {
    img: "/homeImg/pnb.png",
    title: "29 October 2025",
    mainTitle:
      "သတိပြုဖွယ် နိုင်ငံသားစိစစ်ရေးကတ်အတုနှင့် အွန်လိုင်းလိမ်လည်မှု အန္တရာယ်",
    text: "လန်ချန်း-မဲခေါင် Initiative အရ နိုင်ငံတကာမှာ ဖြစ်ပေါ်နေတဲ့ Fraud Case အခြေအနေများနှင့်ပတ်သက်ပြီး...",
    readMore: "Read More",
    icon: <FaCaretRight />,
  },
];
const PnbDigi = () => {
  return (
    <>
      <div className="bg-[url('/frameBg.svg')] bg-cover bg-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-5 lg:px-0 cusContainer mx-auto gap-10 pb-10 md:pt-0 pt-20">
          {pnbDigiItems.map((item, i) => (
            <Card
              key={i}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              text={item.text}
              readMore={item.readMore}
              icon={item.icon}
              delay={0.1 * (i + 1)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PnbDigi;
