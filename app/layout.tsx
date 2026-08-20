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
  themeColor: "#fcf9f8",
};

export const metadata: Metadata = {
  title: "Женщина-Бриллиант | Живое пространство глубокой трансформации",
  description:
    "Стань Женщиной-Бриллиантом — и тебе больше не придётся искать свою ценность через мужчину. Живое пространство глубокой работы с женщиной, её внутренними сценариями и отношениями. Татьяна Мунтяну и Юрий Бузько.",
  keywords: [
    "Женщина Бриллиант",
    "Татьяна Мунтяну",
    "Юрий Бузько",
    "самоценность женщины",
    "отношения мужчины и женщины",
    "глубинная психотерапия",
    "гипнотерапия",
    "трансформация сценариев",
  ],
  authors: [
    { name: "Татьяна Мунтяну" },
    { name: "Юрий Бузько" },
  ],
  openGraph: {
    title: "Женщина-Бриллиант — Живое пространство глубокой трансформации",
    description:
      "Стань Женщиной-Бриллиантом — и тебе больше не придётся искать свою ценность через мужчину. Живое поле, живая работа, живое сообщество.",
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
      <body className="min-h-screen bg-[#fcf9f8] text-[#1b1c1c] antialiased selection:bg-[#d4af37]/30 selection:text-[#1b1c1c] flex flex-col font-sans-modern">
        {children}
      </body>
    </html>
  );
}
