import React from "react";
import { FlameIcon } from "./icons";

interface RetreatDividerProps {
  className?: string;
  withIcon?: boolean;
}

export default function RetreatDivider({
  className = "my-16 sm:my-24",
  withIcon = true,
}: RetreatDividerProps) {
  return (
    <div className={`w-full flex items-center justify-center gap-4 ${className}`}>
      <div className="h-[1px] flex-1 max-w-[160px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-[#ff6240]/60" />
      {withIcon && (
        <div className="w-8 h-8 rounded-full bg-[#181a20] border border-[#d4af37]/40 flex items-center justify-center shadow-[0_0_15px_rgba(255,98,64,0.2)]">
          <FlameIcon className="w-3.5 h-3.5 text-[#ff7b25]" />
        </div>
      )}
      <div className="h-[1px] flex-1 max-w-[160px] bg-gradient-to-l from-transparent via-[#d4af37]/40 to-[#ff6240]/60" />
    </div>
  );
}
