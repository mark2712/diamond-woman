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
      className={`glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between border-t-2 ${
        isGold ? "border-t-[#e9c349]" : "border-t-[#dde1ff]"
      }`}
    >
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              isGold
                ? "bg-[#e9c349]/10 border border-[#e9c349]/40 text-[#e9c349]"
                : "bg-[#dde1ff]/10 border border-[#dde1ff]/40 text-[#dde1ff]"
            }`}
          >
            {icon}
          </div>
          <div>
            <h3 className="font-serif-luxury text-2xl text-white font-bold tracking-wide">
              {title}
            </h3>
            <p
              className={`text-xs uppercase tracking-wider ${
                isGold ? "text-[#e9c349]" : "text-[#dde1ff]"
              }`}
            >
              {subtitle}
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#8f9194] mb-4">{desc}</p>

        <ul className="space-y-3">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-sm text-[#e1e2e7]">
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  isGold ? "bg-[#e9c349]" : "bg-[#dde1ff]"
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
