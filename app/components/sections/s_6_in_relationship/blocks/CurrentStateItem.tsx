import React from "react";

export default function CurrentStateItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-sm sm:text-base text-[#e1e2e7]">
      <div className="w-1.5 h-1.5 rounded-full bg-[#e9c349]" />
      <span>{text}</span>
    </li>
  );
}
