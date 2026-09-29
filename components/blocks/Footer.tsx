"use client";

import React from "react";
import { DiamondIcon, TelegramIcon, MailIcon, PhoneIcon } from "./icons";
import { siteData } from "@/data/data";
import { reachGoal } from "@/lib/metrika";

export default function Footer() {
  const { footer } = siteData;

  return (
    <footer className="w-full bg-[#f6f3f2] border-t border-[#d0c5af]/50 pt-16 pb-24 text-[#605e58] relative z-10">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#d0c5af]/40">
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#735c00]/10 border border-[#735c00]/30 flex items-center justify-center">
                <DiamondIcon className="w-3.5 h-3.5 text-[#735c00]" />
              </div>
              <span className="font-serif-luxury text-lg tracking-[0.18em] uppercase text-[#1b1c1c] font-semibold">
                {footer.brandName}
              </span>
            </div>
            <p className="text-sm text-[#4d4635] leading-relaxed max-w-sm">
              {footer.tagline}
            </p>
            <div className="text-xs text-[#605e58] pt-2">
              Проводники: <span className="text-[#1b1c1c] font-semibold">Татьяна Мунтяну</span> &amp;{" "}
              <span className="text-[#1b1c1c] font-semibold">Юрий Бузько</span>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#735c00] font-semibold mb-1">
              Навигация
            </span>
            <div className="grid grid-cols-2 gap-2.5 text-xs">
              {footer.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-[#735c00] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#735c00] font-semibold mb-1">
              Контакты и связь
            </span>
            <div className="flex flex-col gap-2.5 text-xs">
              <a
                href={footer.contacts.telegramUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => reachGoal("zakaz_telegram", { location: "diamond_footer" })}
                className="flex items-center gap-2 text-[#1b1c1c] hover:text-[#735c00] font-medium transition-colors"
              >
                <TelegramIcon className="w-4 h-4 text-[#2AABEE]" />
                {footer.contacts.telegramUsername}
              </a>

              {footer.contacts.email && (
                <a
                  href={`mailto:${footer.contacts.email}`}
                  className="flex items-center gap-2 hover:text-[#735c00] transition-colors"
                >
                  <MailIcon className="w-4 h-4 text-[#7f7663]" />
                  {footer.contacts.email}
                </a>
              )}

              {footer.contacts.phone && (
                <a
                  href={`tel:${footer.contacts.phone}`}
                  className="flex items-center gap-2 hover:text-[#735c00] transition-colors"
                >
                  <PhoneIcon className="w-4 h-4 text-[#7f7663]" />
                  {footer.contacts.phoneDisplay}
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="pt-8 pb-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 text-[11px] text-[#7f7663]">
          <div className="space-y-1">
            <div>{footer.legal.entityName}</div>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <span>{footer.legal.inn}</span>
              <span>{footer.legal.ogrn}</span>
              {footer.legal.address && <span>{footer.legal.address}</span>}
            </div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[11px]">
            <a
              href={footer.links.privacyPolicy}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#735c00] underline decoration-[#d0c5af] hover:decoration-[#735c00] transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href={footer.links.termsOfService}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#735c00] underline decoration-[#d0c5af] hover:decoration-[#735c00] transition-colors"
            >
              Пользовательское соглашение
            </a>
            <a
              href={footer.links.offerAgreement}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#735c00] underline decoration-[#d0c5af] hover:decoration-[#735c00] transition-colors"
            >
              Публичная оферта
            </a>
            <a
              href={footer.links.consentProcessing}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#735c00] underline decoration-[#d0c5af] hover:decoration-[#735c00] transition-colors"
            >
              Согласие на обработку данных
            </a>
          </div>
        </div>

        <div className="pt-4 text-[10px] text-[#7f7663]/80 border-t border-[#d0c5af]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>{footer.copyright}</div>
          <div className="max-w-md">{footer.disclaimer}</div>
        </div>
      </div>
    </footer>
  );
}
