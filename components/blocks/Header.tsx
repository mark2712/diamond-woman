"use client";

import React, { useState, useEffect } from "react";
import { DiamondIcon, MenuIcon, CrossIcon } from "./icons";
import { siteData } from "@/data/data";
import CtaButton from "./CtaButton";
import { reachGoal } from "@/lib/metrika";

interface HeaderProps {
  onOpenModal?: (source: string) => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Лаконичные, ключевые пункты для десктопа (без переносов строк)
  const desktopNavItems = [
    { label: "О пространстве", href: "#about" },
    { label: "Сценарии", href: "#patterns" },
    { label: "Философия", href: "#philosophy" },
    { label: "Проводники", href: "#guides" },
    { label: "Ритм недели", href: "#week-rhythm" },
    { label: "Диагностика", href: "#diagnostic" },
  ];

  // Полное меню для мобильной шторки
  const mobileNavItems = [
    { label: "О пространстве", href: "#about" },
    { label: "Сценарии отношений", href: "#patterns" },
    { label: "Главная философия", href: "#philosophy" },
    { label: "Кто такая Женщина-Бриллиант", href: "#diamond-woman" },
    { label: "Отношения на одной волне", href: "#relationships" },
    { label: "Проводники Татьяна и Юрий", href: "#guides" },
    { label: "Живой ритм недели", href: "#week-rhythm" },
    { label: "Персональная диагностика", href: "#diagnostic" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 pt-safe ${isScrolled
            ? "bg-[#fcf9f8]/95 backdrop-blur-xl border-b border-[#d0c5af]/40 shadow-[0_4px_25px_rgba(77,70,53,0.06)] py-3"
            : "bg-transparent py-4 sm:py-5"
          }`}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
          {/* Brand / Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group shrink-0 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="w-8 h-8 rounded-full bg-[#735c00]/10 border border-[#735c00]/30 flex items-center justify-center group-hover:border-[#735c00] transition-colors shadow-sm">
              <DiamondIcon className="w-4 h-4 text-[#735c00] group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-sm sm:text-base tracking-[0.15em] uppercase text-[#1b1c1c] font-semibold">
                Женщина-Бриллиант
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#735c00] font-medium opacity-90">
                Живое пространство
              </span>
            </div>
          </a>

          {/* Desktop Nav: Spacious, whitespace-nowrap, zero collisions */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {desktopNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-xs uppercase tracking-[0.14em] text-[#4d4635] hover:text-[#735c00] font-medium transition-colors duration-200 whitespace-nowrap py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <CtaButton
              actionType="TRY_7_DAYS"
              variant="primary"
              size="sm"
              label="Попробовать 7 дней"
              modalSource="Шапка сайта"
              onOpenModal={onOpenModal}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-10 h-10 flex items-center justify-center text-[#1b1c1c] hover:text-[#735c00] transition-colors rounded-full hover:bg-black/5"
            aria-label="Меню"
          >
            {mobileMenuOpen ? <CrossIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden flex flex-col bg-[#fcf9f8]/98 backdrop-blur-3xl pt-20 px-6 pb-8 transition-all animate-fade-in overflow-y-auto">
          {/* Header in Mobile Menu */}
          <div className="flex items-center justify-between pb-4 border-b border-[#d0c5af]/30 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#735c00]/10 flex items-center justify-center">
                <DiamondIcon className="w-4 h-4 text-[#735c00]" />
              </div>
              <span className="font-serif-luxury text-base uppercase tracking-widest text-[#1b1c1c] font-semibold">
                Женщина-Бриллиант
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center text-[#1b1c1c]"
            >
              <CrossIcon className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-3 mb-8">
            {mobileNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="font-serif-luxury text-base text-[#1b1c1c] hover:text-[#735c00] transition-colors py-2 border-b border-black/5"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto space-y-3">
            <CtaButton
              actionType="TRY_7_DAYS"
              variant="primary"
              size="lg"
              className="w-full"
              label="Попробовать 7 дней"
              modalSource="Мобильное меню"
              onOpenModal={(src) => {
                setMobileMenuOpen(false);
                if (onOpenModal) onOpenModal(src);
              }}
            />

            <a
              href={siteData.footer.contacts.telegramUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => reachGoal("zakaz_telegram", { location: "diamond_header_mobile" })}
              className="w-full py-3.5 rounded-full border border-[#d0c5af] text-center block text-xs uppercase tracking-widest text-[#4d4635] hover:text-[#1b1c1c] hover:bg-white transition-colors font-medium shadow-sm"
            >
              Telegram сообщество
            </a>
          </div>
        </div>
      )}
    </>
  );
}
