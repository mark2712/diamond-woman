import React from "react";
import { SparklesIcon } from "../../../blocks/icons";

interface GuideBioCardProps {
  name: string;
  role: string;
  bio: string;
  quote: string;
  accentColor: "gold" | "mist";
}

export default function GuideBioCard({
  name,
  role,
  bio,
  quote,
  accentColor,
}: GuideBioCardProps) {
  const isGold = accentColor === "gold";

  return (
    <div
      className={`glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between border-t-4 bg-white/90 shadow-sm ${
        isGold ? "border-t-[#735c00]" : "border-t-[#5e5e5c]"
      }`}
    >
      <div>
        <div
          className={`flex items-center gap-2 mb-2 ${
            isGold ? "text-[#735c00]" : "text-[#5e5e5c]"
          }`}
        >
          <SparklesIcon className="w-4 h-4" />
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold">
            Проводник
          </span>
        </div>
        <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#1b1c1c] font-bold mb-2">
          {name}
        </h3>
        <p
          className={`text-xs sm:text-sm font-semibold mb-4 ${
            isGold ? "text-[#735c00]" : "text-[#5e5e5c]"
          }`}
        >
          {role}
        </p>
        <p className="text-sm text-[#4d4635] leading-relaxed">{bio}</p>
      </div>
      <div className="mt-8 pt-6 border-t border-[#d0c5af]/40 text-xs text-[#7f7663] italic font-serif-luxury">
        {quote}
      </div>
    </div>
  );
}
