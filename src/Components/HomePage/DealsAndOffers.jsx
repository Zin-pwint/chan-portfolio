import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function DealsAndOffers() {
  // Array of card data for clean rendering
  const deals = Array(4).fill({
    image: "homeImg/dealImg.png", // Replace with your actual image paths
    title: "How To Start Using MOB",
    description:
      "Get 30% Off Up To INR 3000 At Select Premium Restaurants With Axis Bank Credit And Debit Cards.",
    expiry: "Expires On 02/01/2027",
  });

  return (
    <section className="w-full bg-[#f8f6ed] py-16 px-4 md:px-8 mt-10">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <p className="text-orange font-semibold text-xs tracking-wider  mb-2">
          Market Place
        </p>
        <h2 className="text-[#2D2D2D] text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
          Exciting Deals and Offers.
        </h2>
        <p className="text-[#666666] text-xs md:text-sm font-medium max-w-xl mx-auto mb-12">
          Start or Expand your Business with Arizona Banks Exclusive Business
          Loans
        </p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 text-left">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="bg-white rounded-none shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col overflow-hidden border border-gray-100">
              {/* Card Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-gray-200">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-[#2D2D2D] font-bold text-lg mb-2 leading-snug">
                    {deal.title}
                  </h3>
                  <p className="text-[#666666] text-xs font-normal leading-relaxed mb-4 line-clamp-3">
                    {deal.description}
                  </p>
                </div>

                <div>
                  <p className="text-[#999999] text-[11px] font-medium italic mb-4">
                    {deal.expiry}
                  </p>

                  {/* Read More Link */}
                  <a
                    href="#"
                    className="inline-flex items-center text-dark-red font-bold text-xs uppercase tracking-wider group hover:opacity-80 transition-opacity">
                    Read More
                    <FaArrowRight className="ml-2 text-[10px] transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <button className="bg-dark-red text-white font-semibold text-xs uppercase tracking-widest px-8 py-3.5 hover:bg-[#52000E] transition-colors duration-200">
          View All
        </button>
      </div>
    </section>
  );
}
