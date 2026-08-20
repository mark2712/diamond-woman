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
    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
      <span className="text-xs uppercase tracking-wider text-[#8f9194] block mb-1">
        {label}
      </span>
      <span className="text-sm font-semibold text-white">{value}</span>
    </div>
  );
}
