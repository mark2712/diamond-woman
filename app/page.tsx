"use client";

import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PatternsSection from "./components/PatternsSection";
import PhilosophySection from "./components/PhilosophySection";
import DiamondWomanSection from "./components/DiamondWomanSection";
import RelationshipSection from "./components/RelationshipSection";
import InRelationshipSection from "./components/InRelationshipSection";
import WhyLiveSection from "./components/WhyLiveSection";
import GuidesSection from "./components/GuidesSection";
import InnerWorkSection from "./components/InnerWorkSection";
import WeekRhythmSection from "./components/WeekRhythmSection";
import AdaptiveProgramSection from "./components/AdaptiveProgramSection";
import PointBSection from "./components/PointBSection";
import DiagnosticSection from "./components/DiagnosticSection";
import Footer from "./components/Footer";
import FloatingCta from "./components/FloatingCta";
import ModalLead from "./components/ModalLead";

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
    <div className="relative min-h-screen bg-[#111417] text-[#e1e2e7] overflow-x-hidden stardust-bg bg-grain">
      {/* Background radial ambient lights */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-[#dde1ff]/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#e9c349]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Header */}
      <Header onOpenModal={handleOpenModal} />

      {/* Main Sections */}
      <main className="flex flex-col w-full">
        {/* 1. Первый экран */}
        <HeroSection onOpenModal={handleOpenModal} />

        {/* 2. «Почему я снова оказалась здесь?» */}
        <PatternsSection />

        {/* 3. Главная философия */}
        <PhilosophySection />

        {/* 4. Кто такая Женщина-Бриллиант */}
        <DiamondWomanSection />

        {/* 5. Отношения на одной волне */}
        <RelationshipSection />

        {/* 6. Если ты уже в отношениях */}
        <InRelationshipSection />

        {/* 7 & 8. Почему записанный курс не может дать этой глубины + Живое поле */}
        <WhyLiveSection />

        {/* 9 & 10. Наш путь как проводников + Открытое поле и ответственность */}
        <GuidesSection />

        {/* 11. Что происходит внутри */}
        <InnerWorkSection />

        {/* 12. Как проходит неделя */}
        <WeekRhythmSection />

        {/* 13. Программа рождается из вас */}
        <AdaptiveProgramSection />

        {/* 14. Точка B */}
        <PointBSection />

        {/* 15. Диагностика & Финальный экран */}
        <DiagnosticSection onOpenModal={handleOpenModal} />
      </main>

      {/* Footer with legal data from data/data.ts */}
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
