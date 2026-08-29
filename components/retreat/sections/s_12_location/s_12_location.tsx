import React from "react";
import { retreatData } from "../../data/retreatData";
import { MapPinIcon } from "../../blocks/icons";

export default function SectionLocation() {
  const { location } = retreatData;

  return (
    <section id="location" className="py-24 sm:py-32 bg-[#08090c] text-[#f2efe9] relative z-10">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#F9D423] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            <MapPinIcon className="w-3.5 h-3.5" />
            <span>Локация и условия</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {location.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#a8a59f] max-w-xl mx-auto">
            {location.subheading}
          </p>
        </div>

        {/* Hacienda Gallery from Stitch */}
        {location.gallery && location.gallery.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {location.gallery.map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-[#252834] group shadow-2xl bg-[#101116]"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <span className="font-serif text-sm sm:text-base text-[#f2efe9] font-medium drop-shadow">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {location.highlights.map((h, index) => (
            <div
              key={index}
              className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#13151f] to-[#0c0d12] border border-[#252834] hover:border-[#d4af37]/40 transition-all duration-300 shadow-xl group"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff7b25] mb-4 group-hover:scale-150 transition-transform" />
              <h3 className="font-serif text-xl text-white font-semibold mb-2 group-hover:text-[#F9D423] transition-colors leading-snug">
                {h.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#9f9c94] leading-relaxed">
                {h.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
