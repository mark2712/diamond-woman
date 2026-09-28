import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#07080b",
};

export const metadata: Metadata = {
  title: "ЗА ПРЕДЕЛАМИ СИЛЫ — Сакральные ретриты с шаманами Мексики | retreats.guru",
  description:
    "5 дней в Мексике · VIP-группа 4–6 человек · 3 недели подготовки · 4 месяца интеграции. Трансформация за пределами человеческой силы. Татьяна Мунтяну и Юрий Бузько.",
  keywords: [
    "Сакральные ретриты в Мексике",
    "За пределами силы",
    "Ретрит с шаманами",
    "retreats guru",
    "Юрий Бузько",
    "Татьяна Мунтяну",
    "Темаскаль",
    "Интеграция психоделического опыта",
    "VIP ретрит",
  ],
  authors: [
    { name: "Татьяна Мунтяну" },
    { name: "Юрий Бузько" },
  ],
  openGraph: {
    title: "ЗА ПРЕДЕЛАМИ СИЛЫ — Сакральные ретриты в Мексике",
    description:
      "5 дней в Мексике · VIP-группа 4–6 человек · 3 недели подготовки · 4 месяца интеграции. Трансформация за пределами человеческой силы.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${playfair.variable} ${manrope.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#07080b] text-[#f2efe9] antialiased selection:bg-[#d4af37] selection:text-black flex flex-col font-sans-modern">
        {children}
      </body>
    </html>
  );
}
