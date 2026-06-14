import React from "react";
import { gridSectionData } from "../../mock/gridSectionData";

export default function DashboardGrid() {
  const { videoTestimonial, otherTestimonials, podcast, blog } =
    gridSectionData;

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 font-sans">
      {/* COLUMN 1 & 2: Video Testimonial (Spans 2 columns on large screens) */}
      <div className=" grid grid-rows-1 ">
        {/* Top Red Section */}
        <div className="bg-[#C9252C] flex flex-col justify-between text-white text-left">
          <div>
            <span className="text-xs uppercase tracking-wider text-red-200 block ">
              {videoTestimonial.tagline}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {videoTestimonial.title}
            </h2>
            <p className="text-sm md:text-base text-red-100 max-w-xl font-light leading-relaxed">
              {videoTestimonial.description}
            </p>
          </div>
          <div className="mt-8">
            <button className="bg-white text-[#C9252C] text-xs font-bold tracking-wider px-6 py-3 flex items-center gap-2 hover:bg-red-50 transition-colors">
              {videoTestimonial.ctaText}
              <span className="text-[10px]">▶</span>
            </button>
          </div>
        </div>

        {/* Bottom Image Section */}
        <div className="relative">
          <img
            src={videoTestimonial.imageUrl}
            alt="Customer using device"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* COLUMN 3: Other Testimonials (Dark Grey Column) */}
      <div className="bg-[#333333] text-white flex flex-col divide-y divide-zinc-700">
        {otherTestimonials.map((item, index) => (
          <div
            key={item.id}
            className="flex-1 p-8 md:p-10 flex flex-col justify-between text-left">
            <div>
              {index === 0 && (
                <span className="text-xs uppercase tracking-wider text-orange-400 block mb-4">
                  Other Testimonials
                </span>
              )}
              <h3 className="text-base md:text-lg font-semibold leading-snug mb-3">
                {item.title}
              </h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed line-clamp-3">
                {item.description}
              </p>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="text-[#C9252C] text-xs font-bold tracking-wider inline-flex items-center gap-1 hover:underline">
                {item.ctaText} <span className="text-sm">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* COLUMN 4: Podcasts & Weekly Best Blog */}
      <div className="grid grid-rows-2">
        {/* Top White Section (Podcast) */}
        <div className="bg-white text-zinc-900 p-8 md:p-10 flex flex-col justify-between text-left border-b lg:border-b-0 border-zinc-100">
          <div>
            <span className="text-xs uppercase tracking-wider text-orange-400 block mb-4">
              {podcast.tagline}
            </span>
            <h3 className="text-base md:text-lg font-semibold leading-snug text-zinc-800 mb-3">
              {podcast.title}
            </h3>
            <p className="text-xs text-zinc-500 font-light leading-relaxed">
              {podcast.description}
            </p>
          </div>
          <div className="mt-6">
            <button className="bg-[#C9252C] text-white text-xs font-bold tracking-wider px-5 py-2.5 hover:bg-red-700 transition-colors">
              {podcast.ctaText}
            </button>
          </div>
        </div>

        {/* Bottom Yellow Section (Weekly Best Blog) */}
        <div className="bg-[#FFD43F] text-zinc-950 p-8 md:p-10 flex flex-col justify-between text-left">
          <div>
            <span className="text-xs uppercase tracking-wider text-zinc-800 font-medium block mb-4">
              {blog.tagline}
            </span>
            <h3 className="text-base md:text-lg font-bold leading-snug mb-3">
              {blog.title}
            </h3>
            <p className="text-xs text-zinc-800 font-normal leading-relaxed">
              {blog.description}
            </p>
          </div>
          <div className="mt-6">
            <button className="bg-white text-zinc-900 text-xs font-bold tracking-wider px-5 py-2.5 border border-transparent hover:bg-zinc-50 transition-colors shadow-sm">
              {blog.ctaText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
