import React from "react";

interface DiagnosticFeatureItemProps {
  label: string;
  value: string;
}

export default function DiagnosticFeatureItem({
  label,
  value,
}: DiagnosticFeatureItemProps) {
  return (
    <div className="p-4 rounded-2xl bg-[#f6f3f2] border border-[#d0c5af]/50 text-center shadow-sm">
      <span className="text-xs uppercase tracking-wider text-[#7f7663] block mb-1 font-medium">
        {label}
      </span>
      <span className="text-sm font-bold text-[#1b1c1c]">{value}</span>
    </div>
  );
}
