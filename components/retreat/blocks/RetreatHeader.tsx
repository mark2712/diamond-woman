"use client";

import React, { useState, useEffect } from "react";
import { FlameIcon, PhoneIcon } from "./icons";
import { retreatData } from "../data/retreatData";
import RetreatCtaButton from "./RetreatCtaButton";

interface RetreatHeaderProps {
  onOpenModal: () => void;
}

export default function RetreatHeader({ onOpenModal }: RetreatHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Смысл", href: "#beyond-force" },
    { label: "Для кого", href: "#target-audience" },
    { label: "Результат", href: "#results" },
    { label: "Практики", href: "#practices" },
    { label: "Программа", href: "#program" },
    { label: "Интеграция", href: "#integration" },
    { label: "Хранители", href: "#guardians" },
    { label: "Хасиенда", href: "#location" },
    { label: "Даты", href: "#calendar" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0b0c10]/95 backdrop-blur-xl border-b border-[#d4af37]/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#e65c00] to-[#F9D423] p-[1.5px] shadow-[0_0_20px_rgba(230,92,0,0.4)] group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0c0d12] rounded-[10px] flex items-center justify-center text-[#F9D423]">
              <FlameIcon className="w-5 h-5" />
            </div>
          </div>
          <div>
            <span className="font-serif text-base sm:text-lg font-bold tracking-[0.16em] uppercase text-white block leading-none">
              ЗА ПРЕДЕЛАМИ СИЛЫ
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#d4af37] block mt-1">
              Сакральные ретриты в Мексике
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-5 text-xs uppercase tracking-[0.16em] text-[#a09e99]">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[#F9D423] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[1px] after:bg-[#F9D423] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Phone */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${retreatData.contacts.phone}`}
            className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-[#14161e] border border-[#252834] text-xs text-[#d4af37] hover:border-[#d4af37] transition-colors"
          >
            <PhoneIcon className="w-3.5 h-3.5" />
            <span className="font-semibold">{retreatData.contacts.phoneDisplay}</span>
          </a>

          <RetreatCtaButton onClick={onOpenModal} size="sm" variant="primary">
            Подать заявку
          </RetreatCtaButton>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-[#1a1c24] text-white border border-[#d4af37]/30 cursor-pointer"
            aria-label="Меню"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="6" x2="20" y2="6"/>
              <line x1="4" y1="12" x2="20" y2="12"/>
              <line x1="4" y1="18" x2="20" y2="18"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0e0f14]/98 border-b border-[#d4af37]/30 px-6 py-6 space-y-4 animate-fade-in backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-3 text-xs uppercase tracking-widest text-[#a8a59f]">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-[#F9D423] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-3">
            <a
              href={`tel:${retreatData.contacts.phone}`}
              className="w-full py-3 rounded-xl bg-[#14161e] border border-[#252834] text-xs text-center text-[#d4af37] font-semibold"
            >
              Позвонить: {retreatData.contacts.phoneDisplay}
            </a>
            <RetreatCtaButton onClick={() => { setMobileMenuOpen(false); onOpenModal(); }} fullWidth size="md">
              Подать заявку на отбор
            </RetreatCtaButton>
          </div>
        </div>
      )}
    </header>
  );
}
