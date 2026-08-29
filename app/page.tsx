"use client";

import React, { useState } from "react";
import Header from "@/components/blocks/Header";
import Footer from "@/components/blocks/Footer";
import FloatingCta from "@/components/blocks/FloatingCta";
import ModalLead from "@/components/blocks/ModalLead";

import Section1Hero from "@/components/sections_main/s_1_hero/s_1_hero";
import Section2Patterns from "@/components/sections_main/s_2_patterns/s_2_patterns";
import Section3Philosophy from "@/components/sections_main/s_3_philosophy/s_3_philosophy";
import SectionSelfSufficient from "@/components/sections_main/s_3_5_self_sufficient/s_3_5_self_sufficient";
import Section4DiamondWoman from "@/components/sections_main/s_4_diamond_woman/s_4_diamond_woman";
import SectionMeetingSelf from "@/components/sections_main/s_4_5_meeting_self/s_4_5_meeting_self";
import Section5Relationships from "@/components/sections_main/s_5_relationships/s_5_relationships";
import Section6InRelationship from "@/components/sections_main/s_6_in_relationship/s_6_in_relationship";
import Section7WhyLive from "@/components/sections_main/s_7_why_live/s_7_why_live";
import Section8Guides from "@/components/sections_main/s_8_guides/s_8_guides";
import Section9InnerWork from "@/components/sections_main/s_9_inner_work/s_9_inner_work";
import Section10WeekRhythm from "@/components/sections_main/s_10_week_rhythm/s_10_week_rhythm";
import Section11AdaptiveProgram from "@/components/sections_main/s_11_adaptive_program/s_11_adaptive_program";
import Section12PointB from "@/components/sections_main/s_12_point_b/s_12_point_b";
import Section13Diagnostic from "@/components/sections_main/s_13_diagnostic/s_13_diagnostic";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState("Главная страница");
  const [modalTitle, setModalTitle] = useState("Попробовать 7 дней внутри сообщества");

  const handleOpenModal = (source: string) => {
    setModalSource(source);
    if (source.toLowerCase().includes("диагностик")) {
      setModalTitle("Персональная диагностика сценария");
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
        {/* 1. Первый экран: БУДЬ ЖЕНЩИНОЙ-БРИЛЛИАНТОМ */}
        <Section1Hero onOpenModal={handleOpenModal} />

        {/* 2. «Почему я снова оказалась здесь?» (Осознание сценариев и усталости быть сильной) */}
        <Section2Patterns />

        {/* 3. Главная философия (Притягиваем не умом, а тем, кем являемся внутри) */}
        <Section3Philosophy />

        {/* 4. Самостоятельная ≠ Самодостаточная («Я всё могу сама» vs «Мне хорошо с собой») */}
        <SectionSelfSufficient />

        {/* 5. Кто такая Женщина-Бриллиант (Огранка внутренней сути) */}
        <Section4DiamondWoman />

        {/* 6. Самая важная встреча — встреча с собой */}
        <SectionMeetingSelf />

        {/* 7. Отношения на одной волне (Выбор мужчины из самоценности) */}
        <Section5Relationships />

        {/* 8. Если ты уже в отношениях (Бережный подход к семье и паре) */}
        <Section6InRelationship />

        {/* 9. Почему записанный курс не может дать глубины & Сила живого присутствия */}
        <Section7WhyLive />

        {/* 10. Проводники пространства (Академическая база и разделение опыта) */}
        <Section8Guides />

        {/* 11. Что происходит внутри (Татьяна — глубина / Юрий — интеграция) */}
        <Section9InnerWork />

        {/* 12. Как проходит неделя (Живой ритм сообщества) */}
        <Section10WeekRhythm />

        {/* 13. Программа рождается из вас (Адаптивный цикл) */}
        <Section11AdaptiveProgram />

        {/* 14. Точка B (Образ отношений и образ внутренней женщины) */}
        <Section12PointB />

        {/* 15. Диагностика, Блок «Что дадут первые 7 дней» и Манифест Женщины-Бриллианта */}
        <Section13Diagnostic onOpenModal={handleOpenModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Mobile/Desktop CTA */}
      <FloatingCta onOpenModal={handleOpenModal} />

      {/* Lead/Telegram Modal */}
      <ModalLead
        isOpen={modalOpen}
        onClose={handleCloseModal}
        title={modalTitle}
        source={modalSource}
      />
    </div>
  );
}
