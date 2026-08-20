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
  themeColor: "#111417",
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
      <body className="min-h-screen bg-[#111417] text-[#e1e2e7] antialiased selection:bg-[#e9c349]/30 selection:text-white flex flex-col font-sans-modern">
        {children}
      </body>
    </html>
  );
}
