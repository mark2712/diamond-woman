import React from "react";

interface DiamondDividerProps {
  className?: string;
  glow?: boolean;
}

export default function DiamondDivider({ className = "", glow = true }: DiamondDividerProps) {
  return (
    <div className={`flex items-center justify-center w-full py-10 opacity-75 ${className}`}>
      {/* Левая линия */}
      <div className="h-[1px] w-20 sm:w-32 md:w-48 bg-gradient-to-r from-transparent via-[#d0c5af]/60 to-[#d4af37]" />
      
      {/* Центральный ромб с подсветкой */}
      <div className="relative mx-4 flex items-center justify-center">
        <div className="w-2 h-2 rotate-45 bg-[#735c00] transition-transform duration-700 hover:rotate-90" />
        {glow && (
          <div className="absolute inset-0 w-2 h-2 rotate-45 bg-[#d4af37] blur-[4px] opacity-60 pointer-events-none" />
        )}
      </div>

      {/* Правая линия */}
      <div className="h-[1px] w-20 sm:w-32 md:w-48 bg-gradient-to-l from-transparent via-[#d0c5af]/60 to-[#d4af37]" />
    </div>
  );
}
