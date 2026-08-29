import React from "react";

interface GuideScopeCardProps {
  title: string;
  subtitle: string;
  desc: string;
  items: string[];
  focusQuestion: string;
  icon: React.ReactNode;
  theme: "mist" | "gold";
}

export default function GuideScopeCard({
  title,
  subtitle,
  desc,
  items,
  focusQuestion,
  icon,
  theme,
}: GuideScopeCardProps) {
  const isGold = theme === "gold";

  return (
    <div
      className={`glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between border-t-4 bg-white/95 shadow-[0_4px_25px_rgba(0,0,0,0.04)] ${
        isGold ? "border-t-[#b89628] border-x border-b border-[#e5e0d5]" : "border-t-[#4a4d52] border-x border-b border-[#e5e0d5]"
      }`}
    >
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div
            className={`w-11 h-11 rounded-full flex items-center justify-center ${
              isGold
                ? "bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#b89628]"
                : "bg-[#4a4d52]/10 border border-[#4a4d52]/30 text-[#111417]"
            }`}
          >
            {icon}
          </div>
          <div>
            <h3 className="font-serif-luxury text-2xl text-[#111417] font-bold tracking-wide">
              {title}
            </h3>
            <p
              className={`text-xs uppercase tracking-wider font-bold ${
                isGold ? "text-[#b89628]" : "text-[#787b80]"
              }`}
            >
              {subtitle}
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#787b80] mb-4 font-medium">{desc}</p>

        <ul className="space-y-2.5 mb-6">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#111417]">
              <div
                className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                  isGold ? "bg-[#d4af37]" : "bg-[#4a4d52]"
                }`}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 pt-5 border-t border-[#e5e0d5]">
        <span className="text-[10px] uppercase tracking-widest text-[#787b80] font-bold block mb-1">
          Главный вопрос:
        </span>
        <p className="font-serif-luxury text-base sm:text-lg text-[#111417] font-semibold italic">
          «{focusQuestion}»
        </p>
      </div>
    </div>
  );
}
