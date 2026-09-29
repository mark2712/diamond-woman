"use client";

import React, { useState } from "react";
import RetreatHeader from "@/components/retreat/blocks/RetreatHeader";
import RetreatFooter from "@/components/retreat/blocks/RetreatFooter";
import ModalRetreatLead from "@/components/retreat/blocks/ModalRetreatLead";

import SectionHero from "@/components/retreat/sections/s_1_hero/s_1_hero";
import SectionBeyondForce from "@/components/retreat/sections/s_2_beyond_force/s_2_beyond_force";
import SectionTargetAudience from "@/components/retreat/sections/s_3_target_audience/s_3_target_audience";
import SectionResults from "@/components/retreat/sections/s_4_results/s_4_results";
import SectionUniqueFormula from "@/components/retreat/sections/s_5_unique_formula/s_5_unique_formula";
import SectionSacredPractices from "@/components/retreat/sections/s_6_sacred_practices/s_6_sacred_practices";
import SectionAtmosphereVideo from "@/components/retreat/sections/s_6_atmosphere_video/SectionAtmosphereVideo";
import SectionProgramDays from "@/components/retreat/sections/s_7_program_days/s_7_program_days";
import SectionPreparation from "@/components/retreat/sections/s_8_preparation/s_8_preparation";
import SectionIntegration from "@/components/retreat/sections/s_9_integration/s_9_integration";
import SectionAuthors from "@/components/retreat/sections/s_10_authors/SectionAuthors";
import SectionVipFormat from "@/components/retreat/sections/s_11_vip_format/s_11_vip_format";
import SectionLocation from "@/components/retreat/sections/s_12_location/s_12_location";
import SectionAllInclusive from "@/components/retreat/sections/s_13_all_inclusive/s_13_all_inclusive";
import SectionCalendar from "@/components/retreat/sections/s_14_calendar/s_14_calendar";
import SectionTestimonials from "@/components/retreat/sections/s_15_testimonials/s_15_testimonials";
import SectionSafetyFaq from "@/components/retreat/sections/s_16_safety_faq/s_16_safety_faq";
import SectionSelectionStages from "@/components/retreat/sections/s_16_selection_stages/SectionSelectionStages";
import SectionApplicationForm from "@/components/retreat/sections/s_17_application_form/s_17_application_form";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const handleOpenModal = (date: string = "") => {
    setSelectedDate(date);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#07080b] text-[#f2efe9] font-sans selection:bg-[#d4af37] selection:text-black overflow-x-hidden">
      {/* Sticky Atmospheric Header */}
      <RetreatHeader onOpenModal={() => handleOpenModal()} />

      {/* Main Sections Flow */}
      <main className="relative z-10">
        <SectionHero onOpenModal={() => handleOpenModal()} />
        <SectionBeyondForce />
        <SectionTargetAudience />
        <SectionResults />
        <SectionUniqueFormula />
        <SectionSacredPractices />
        <SectionAtmosphereVideo onOpenModal={() => handleOpenModal()} />
        <SectionProgramDays />
        <SectionPreparation />
        <SectionIntegration />
        <SectionAuthors onOpenModal={() => handleOpenModal()} />
        <SectionVipFormat />
        <SectionLocation />
        <SectionAllInclusive />
        <SectionCalendar onOpenModalWithDate={(date) => handleOpenModal(date)} />
        <SectionTestimonials />
        <SectionSafetyFaq />
        <SectionSelectionStages />
        <SectionApplicationForm />
      </main>

      {/* Atmospheric Footer */}
      <RetreatFooter />

      {/* Qualification / Booking Modal */}
      <ModalRetreatLead
        isOpen={modalOpen}
        onClose={handleCloseModal}
        selectedDate={selectedDate}
      />
    </div>
  );
}
