"use client";

import React, { useState, useEffect } from "react";
import { DiamondIcon, MenuIcon, CrossIcon } from "../icons";
import { siteData } from "../../data/data";
import CtaButton from "./CtaButton";

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

  const navItems = [
    { label: "О пространстве", href: "#about" },
    { label: "Сценарии", href: "#patterns" },
    { label: "Философия", href: "#philosophy" },
    { label: "Кто она", href: "#diamond-woman" },
    { label: "Отношения", href: "#relationships" },
    { label: "Проводники", href: "#guides" },
    { label: "Ритм недели", href: "#week-rhythm" },
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
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 pt-safe ${
          isScrolled
            ? "bg-[#111417]/85 backdrop-blur-2xl border-b border-white/10 shadow-2xl py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="w-8 h-8 rounded-full bg-white/10 border border-[#e9c349]/40 flex items-center justify-center group-hover:border-[#e9c349] transition-colors">
              <DiamondIcon className="w-4 h-4 text-[#e9c349] group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-sm sm:text-base tracking-[0.18em] uppercase text-white font-medium">
                Женщина-Бриллиант
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#e9c349] opacity-80">
                Живое пространство
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-xs uppercase tracking-[0.15em] text-[#c5c7c9] hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-4">
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
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-[#e9c349] transition-colors"
            aria-label="Меню"
          >
            {mobileMenuOpen ? <CrossIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#111417]/95 backdrop-blur-3xl pt-24 px-6 pb-8 transition-all animate-fade-in overflow-y-auto">
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
            <div className="flex items-center gap-2">
              <DiamondIcon className="w-5 h-5 text-[#e9c349]" />
              <span className="font-serif-luxury text-base uppercase tracking-widest text-white">
                Женщина-Бриллиант
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white"
            >
              <CrossIcon className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-5 mb-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="font-serif-luxury text-lg text-[#e1e2e7] hover:text-[#e9c349] transition-colors py-2 border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto space-y-4">
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
              className="w-full py-3.5 rounded-full border border-white/20 text-center block text-xs uppercase tracking-widest text-white hover:bg-white/5 transition-colors"
            >
              Telegram сообщество
            </a>
          </div>
        </div>
      )}
    </>
  );
}
