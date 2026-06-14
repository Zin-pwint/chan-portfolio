import React from "react";

export default function BusinessProfile() {
  // Mock data structure prepared for future API binding
  const statsData = [
    {
      id: 1,
      number: "20",
      title: "Currency Exchange",
      description: "Includes pixel-perfect icons, flags, logos and more.",
    },
    {
      id: 2,
      number: "29+",
      title: "Relationship Local Bank",
      description: "Includes pixel-perfect icons, flags, logos and more.",
    },
    {
      id: 3,
      number: "48+",
      title: "Local Branches",
      description: "Includes pixel-perfect icons, flags, logos and more.",
    },
    {
      id: 4,
      number: "550+",
      title: "Media assets",
      description: "Includes pixel-perfect icons, flags, logos and more.",
    },
  ];

  return (
    <div className="bg-nude text-[#1A1A1A] font-sans antialiased selection:bg-red-200">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-12">
        {/* Header Section */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-wider text-black">
            BUSINESS PROFILE
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-4xl font-normal">
            Upon approval from the Central Bank of Myanmar, the bank was among
            the first few selected financial institutions that were allowed to
            deal in foreign currencies and international banking. It was among
            the first batch of six private banks to be permitted to open
            currency exchange counters in the country. The bank has now opened
            20 currency exchange counters in the commercial cities of Yangon and
            other business hub areas. As a leading member of the Myanmar Payment
            Union, the bank has introduced ATM and POS debit card and credit
            card facilities for the promotion of electronic payment systems in
            the country. The bank has developed an overseas network by
            establishing corresponding banking relationships with 29 banks in
            local and 57 banks in worldwide. The bank has also signed a
            partnership agreement with Western Union through which customers
            could transfer funds using its affiliated network from/to over a
            hundred countries from/to the bank.
          </p>
        </section>

        <hr className="border-t border-gray-200" />

        {/* Dynamic Stats Grid Component */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 py-4">
          {statsData.map((stat) => (
            <div key={stat.id} className="space-y-2 group">
              <div className="text-3xl md:text-4xl font-black text-[#D32F2F] tracking-tight transition-transform duration-200 group-hover:scale-105 origin-left">
                {stat.number}
              </div>
              <h3 className="text-sm md:text-base font-bold text-black leading-snug">
                {stat.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-500 leading-normal font-normal">
                {stat.description}
              </p>
            </div>
          ))}
        </section>

        <hr className="border-t border-gray-200" />

        {/* Footer/Subsidiary Section */}
        <section className="pt-2">
          <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-4xl font-normal">
            Apart from its core banking business, MOB established the Oriental
            Leasing Company Limited (OLCL), as a subsidiary, extending financial
            assistance to its customers in acquiring their household and other
            durable consumer items. The bank owns 99% of the company's share
            capital.
          </p>
        </section>
      </div>
    </div>
  );
}
