"use client";

import React, { useState } from "react";
import Header from "./components/blocks/Header";
import Footer from "./components/blocks/Footer";
import FloatingCta from "./components/blocks/FloatingCta";
import ModalLead from "./components/blocks/ModalLead";

import Section1Hero from "./components/sections/s_1_hero/s_1_hero";
import Section2Patterns from "./components/sections/s_2_patterns/s_2_patterns";
import Section3Philosophy from "./components/sections/s_3_philosophy/s_3_philosophy";
import Section4DiamondWoman from "./components/sections/s_4_diamond_woman/s_4_diamond_woman";
import Section5Relationships from "./components/sections/s_5_relationships/s_5_relationships";
import Section6InRelationship from "./components/sections/s_6_in_relationship/s_6_in_relationship";
import Section7WhyLive from "./components/sections/s_7_why_live/s_7_why_live";
import Section8Guides from "./components/sections/s_8_guides/s_8_guides";
import Section9InnerWork from "./components/sections/s_9_inner_work/s_9_inner_work";
import Section10WeekRhythm from "./components/sections/s_10_week_rhythm/s_10_week_rhythm";
import Section11AdaptiveProgram from "./components/sections/s_11_adaptive_program/s_11_adaptive_program";
import Section12PointB from "./components/sections/s_12_point_b/s_12_point_b";
import Section13Diagnostic from "./components/sections/s_13_diagnostic/s_13_diagnostic";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState("Главная страница");
  const [modalTitle, setModalTitle] = useState("Попробовать 7 дней внутри сообщества");

  const handleOpenModal = (source: string) => {
    setModalSource(source);
    if (source.toLowerCase().includes("диагностик")) {
      setModalTitle("Запись на персональную диагностику");
    } else {
      setModalTitle("Попробовать 7 дней внутри сообщества");
    }
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-white text-[#111417] overflow-x-hidden">
      {/* Header */}
      <Header onOpenModal={handleOpenModal} />

      {/* Main Sections */}
      <main className="flex flex-col w-full">
        {/* 1. Первый экран (Чистый белый фон, сияющий золотой заголовок как в dis1) */}
        <Section1Hero onOpenModal={handleOpenModal} />

        {/* 2. «Почему я снова оказалась здесь?» */}
        <Section2Patterns />

        {/* 3. Главная философия */}
        <Section3Philosophy />

        {/* 4. Кто такая Женщина-Бриллиант */}
        <Section4DiamondWoman />

        {/* 5. Отношения на одной волне */}
        <Section5Relationships />

        {/* 6. Если ты уже в отношениях */}
        <Section6InRelationship />

        {/* 7 & 8. Почему записанный курс не может дать этой глубины + Живое поле */}
        <Section7WhyLive />

        {/* 9 & 10. Наш путь как проводников + Открытое поле и ответственность */}
        <Section8Guides />

        {/* 11. Что происходит внутри */}
        <Section9InnerWork />

        {/* 12. Как проходит неделя */}
        <Section10WeekRhythm />

        {/* 13. Программа рождается из вас */}
        <Section11AdaptiveProgram />

        {/* 14. Точка B */}
        <Section12PointB />

        {/* 15. Диагностика & Финальный экран */}
        <Section13Diagnostic onOpenModal={handleOpenModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Mobile/Desktop CTA */}
      <FloatingCta onOpenModal={handleOpenModal} />

      {/* Lead/Diagnostic Modal */}
      <ModalLead
        isOpen={modalOpen}
        onClose={handleCloseModal}
        title={modalTitle}
        source={modalSource}
      />
    </div>
  );
}
