"use client";

import React, { useState, useEffect } from "react";
import { FlameIcon, PhoneIcon } from "./icons";
import { retreatData } from "../data/retreatData";
import RetreatCtaButton from "./RetreatCtaButton";
import { reachGoal } from "@/lib/metrika";

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
    { label: "Авторы", href: "#authors" },
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

        {/* Action Button & Telegram */}
        <div className="flex items-center gap-3">
          <a
            href={retreatData.contacts.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => reachGoal("zakaz_telegram", { location: "retreat_header_desktop" })}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#2AABEE]/15 border border-[#2AABEE]/40 text-xs text-[#2AABEE] hover:bg-[#2AABEE]/25 transition-all shadow-[0_0_15px_rgba(42,171,238,0.15)] font-semibold"
            title="Написать в Telegram"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
            </svg>
            <span>{retreatData.contacts.telegramUsername}</span>
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
              href={retreatData.contacts.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => reachGoal("zakaz_telegram", { location: "retreat_header_mobile" })}
              className="w-full py-3 rounded-xl bg-[#2AABEE]/15 border border-[#2AABEE]/40 text-xs text-center text-[#2AABEE] font-semibold flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
              <span>Написать в Telegram ({retreatData.contacts.telegramUsername})</span>
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
