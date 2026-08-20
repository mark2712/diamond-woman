import React from "react";

export default function CurrentStateItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-sm sm:text-base text-[#1b1c1c]">
      <div className="w-1.5 h-1.5 rounded-full bg-[#735c00]" />
      <span>{text}</span>
    </li>
  );
}
