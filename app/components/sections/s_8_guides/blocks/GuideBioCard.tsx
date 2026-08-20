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
      className={`glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between border-t-2 ${
        isGold ? "border-t-[#e9c349]/80" : "border-t-[#dde1ff]/80"
      }`}
    >
      <div>
        <div
          className={`flex items-center gap-2 mb-2 ${
            isGold ? "text-[#e9c349]" : "text-[#dde1ff]"
          }`}
        >
          <SparklesIcon className="w-4 h-4" />
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium">
            Проводник
          </span>
        </div>
        <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-bold mb-2">
          {name}
        </h3>
        <p
          className={`text-xs sm:text-sm font-medium mb-4 ${
            isGold ? "text-[#ffe088]" : "text-[#dde1ff]"
          }`}
        >
          {role}
        </p>
        <p className="text-sm text-[#c5c7c9] leading-relaxed">{bio}</p>
      </div>
      <div className="mt-8 pt-6 border-t border-white/10 text-xs text-[#8f9194] italic font-serif-luxury">
        {quote}
      </div>
    </div>
  );
}
