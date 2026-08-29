import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ЗА ПРЕДЕЛАМИ СИЛЫ — Сакральные ретриты с шаманами Мексики",
  description:
    "5 дней в Мексике · VIP-группа 4–6 человек · 3 недели подготовки · 4 месяца интеграции. Трансформация за пределами человеческой силы.",
  keywords: [
    "Сакральные ретриты в Мексике",
    "За пределами силы",
    "Ретрит с шаманами",
    "Юрий Бузько",
    "Татьяна Мунтяну",
    "Темаскаль",
    "Интеграция психоделического опыта",
    "VIP ретрит",
  ],
};

export default function RetreatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#07080b] text-[#f2efe9] antialiased selection:bg-[#d4af37] selection:text-black">
      {children}
    </div>
  );
}
