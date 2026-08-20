import React from "react";

interface GuideScopeCardProps {
  title: string;
  subtitle: string;
  desc: string;
  items: string[];
  icon: React.ReactNode;
  theme: "mist" | "gold";
}

export default function GuideScopeCard({
  title,
  subtitle,
  desc,
  items,
  icon,
  theme,
}: GuideScopeCardProps) {
  const isGold = theme === "gold";

  return (
    <div
      className={`glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between border-t-4 bg-white/90 shadow-sm ${
        isGold ? "border-t-[#735c00]" : "border-t-[#5e5e5c]"
      }`}
    >
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              isGold
                ? "bg-[#735c00]/10 border border-[#735c00]/30 text-[#735c00]"
                : "bg-[#5e5e5c]/10 border border-[#5e5e5c]/30 text-[#5e5e5c]"
            }`}
          >
            {icon}
          </div>
          <div>
            <h3 className="font-serif-luxury text-2xl text-[#1b1c1c] font-bold tracking-wide">
              {title}
            </h3>
            <p
              className={`text-xs uppercase tracking-wider font-semibold ${
                isGold ? "text-[#735c00]" : "text-[#5e5e5c]"
              }`}
            >
              {subtitle}
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#7f7663] mb-4 font-medium">{desc}</p>

        <ul className="space-y-3">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-sm text-[#1b1c1c]">
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  isGold ? "bg-[#735c00]" : "bg-[#5e5e5c]"
                }`}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
