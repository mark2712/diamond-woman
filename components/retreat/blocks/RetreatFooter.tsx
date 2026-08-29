import React from "react";
import { FlameIcon, MapPinIcon, PhoneIcon } from "./icons";
import { retreatData } from "../data/retreatData";

export default function RetreatFooter() {
  return (
    <footer className="w-full bg-[#07070a] border-t border-[#d4af37]/20 pt-16 pb-24 text-[#8a8780] relative z-10">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#252830]">
          {/* Brand & Mission */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#e65c00] to-[#F9D423] p-[1px]">
                <div className="w-full h-full bg-[#0a0b0e] rounded-[7px] flex items-center justify-center text-[#F9D423]">
                  <FlameIcon className="w-4 h-4" />
                </div>
              </div>
              <span className="font-serif text-lg tracking-[0.16em] uppercase text-white font-bold">
                ЗА ПРЕДЕЛАМИ СИЛЫ
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#a8a59f] leading-relaxed max-w-sm">
              Сакральные ретриты с шаманами Мексики. 5 дней глубокой трансформации, VIP-камерность 4–6 человек, 3 недели подготовки и 4 месяца интеграции.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#d4af37] pt-1">
              <MapPinIcon className="w-4 h-4 text-[#ff7b25]" />
              <span>{retreatData.contacts.locationSummary}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold mb-1">
              Разделы сайта
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#a09e99]">
              <a href="#beyond-force" className="hover:text-[#F9D423] transition-colors">Смысл проекта</a>
              <a href="#target-audience" className="hover:text-[#F9D423] transition-colors">Для кого</a>
              <a href="#results" className="hover:text-[#F9D423] transition-colors">Результат</a>
              <a href="#practices" className="hover:text-[#F9D423] transition-colors">Практики</a>
              <a href="#program" className="hover:text-[#F9D423] transition-colors">Программа 1–6</a>
              <a href="#preparation" className="hover:text-[#F9D423] transition-colors">Подготовка</a>
              <a href="#integration" className="hover:text-[#F9D423] transition-colors">4 мес. интеграции</a>
              <a href="#guardians" className="hover:text-[#F9D423] transition-colors">Хранители силы</a>
              <a href="#vip-format" className="hover:text-[#F9D423] transition-colors">VIP-формат 4–6</a>
              <a href="#calendar" className="hover:text-[#F9D423] transition-colors">Даты заездов</a>
            </div>
          </div>

          {/* Contact by Phone */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold mb-1">
              Связь с координатором
            </span>
            <div className="flex flex-col gap-2.5 text-xs">
              <div className="p-3 rounded-xl bg-[#14161e] border border-[#252834]">
                <div className="text-[11px] text-[#9f9c96] uppercase tracking-wider mb-1">
                  Прямой телефон / WhatsApp
                </div>
                <a
                  href={`tel:${retreatData.contacts.phone}`}
                  className="font-serif text-sm text-white hover:text-[#F9D423] font-bold transition-colors block"
                >
                  {retreatData.contacts.phoneDisplay}
                </a>
              </div>
              <a
                href={`mailto:${retreatData.contacts.email}`}
                className="text-[#a09e99] hover:text-[#d4af37] transition-colors text-xs pt-1"
              >
                {retreatData.contacts.email}
              </a>
            </div>
          </div>
        </div>

        {/* Legal & Disclaimer */}
        <div className="pt-8 pb-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 text-[11px] text-[#706e68]">
          <div>
            © {new Date().getFullYear()} «ЗА ПРЕДЕЛАМИ СИЛЫ». Все права защищены.
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[11px]">
            <a href="/privacy-policy.html" target="_blank" className="hover:text-[#d4af37] underline decoration-[#404040]">
              Политика конфиденциальности
            </a>
            <a href="/terms.html" target="_blank" className="hover:text-[#d4af37] underline decoration-[#404040]">
              Пользовательское соглашение
            </a>
            <a href="/offer.html" target="_blank" className="hover:text-[#d4af37] underline decoration-[#404040]">
              Публичная оферта
            </a>
            <a href="/consent.html" target="_blank" className="hover:text-[#d4af37] underline decoration-[#404040]">
              Согласие на обработку данных
            </a>
          </div>
        </div>

        <div className="pt-4 text-[10px] text-[#55534f] border-t border-[#181a20]">
          Материалы и практики ретрита носят глубокий развивающий, сакральный и психотерапевтический характер. Участие возможно строго после предварительного собеседования и подтверждения готовности.
        </div>
      </div>
    </footer>
  );
}
