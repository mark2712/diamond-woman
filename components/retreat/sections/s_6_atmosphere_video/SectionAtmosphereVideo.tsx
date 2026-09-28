"use client";

import React, { useRef, useState } from "react";
import { FlameIcon, MusicIcon, ShieldIcon, SparklesIcon } from "../../blocks/icons";
import RetreatCtaButton from "../../blocks/RetreatCtaButton";

interface SectionAtmosphereVideoProps {
  onOpenModal: () => void;
}

export default function SectionAtmosphereVideo({ onOpenModal }: SectionAtmosphereVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <section id="atmosphere-video" className="py-24 sm:py-32 bg-[#090a0d] text-[#f2efe9] relative z-10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#e65c00]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[450px] h-[450px] bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff7b25]/10 border border-[#ff7b25]/30 text-[#ff8c42] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            <FlameIcon className="w-3.5 h-3.5" />
            <span>Живое видео с церемоний</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Атмосфера сакрального пространства
          </h2>
          <p className="text-sm sm:text-base text-[#a8a59f] max-w-xl mx-auto">
            Почувствуйте глубину и силу момента: фрагменты ночных церемоний у огня и живой сакральной музыки на террасе хасиенды
          </p>
        </div>

        {/* Video & Features Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center max-w-5xl mx-auto">
          {/* Vertical Video Reel Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] aspect-[9/16] rounded-[32px] overflow-hidden p-[2px] bg-gradient-to-b from-[#d4af37]/60 via-[#ff7b25]/30 to-[#252834] shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_50px_rgba(230,92,0,0.25)] group">
              <div className="w-full h-full rounded-[30px] overflow-hidden bg-black relative flex items-center justify-center">
                <video
                  ref={videoRef}
                  src="/retreat/ceremony-video.mp4"
                  poster="/retreat/video_poster.jpg"
                  playsInline
                  loop
                  muted={isMuted}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={togglePlay}
                />

                {/* Ambient vignette */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40 pointer-events-none"
                />

                {/* Central Play/Pause Button Overlay */}
                {!isPlaying && (
                  <button
                    onClick={togglePlay}
                    className="absolute z-20 w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#e65c00] to-[#F9D423] p-[2px] shadow-[0_0_40px_rgba(249,212,35,0.6)] cursor-pointer hover:scale-110 transition-transform active:scale-95"
                    aria-label="Смотреть видео"
                  >
                    <div className="w-full h-full rounded-full bg-black/80 backdrop-blur-sm flex items-center justify-center text-[#F9D423]">
                      <svg
                        className="w-8 h-8 ml-1"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                )}

                {/* Top badges */}
                <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#d4af37]/30 text-[10px] uppercase font-bold tracking-widest text-[#F9D423]">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span>Live Мексика</span>
                  </div>

                  <button
                    type="button"
                    onClick={toggleMute}
                    className="pointer-events-auto p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:text-[#F9D423] transition-colors"
                    aria-label={isMuted ? "Включить звук" : "Выключить звук"}
                    title={isMuted ? "Включить звук" : "Выключить звук"}
                  >
                    {isMuted ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-[#F9D423]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Bottom Video Caption */}
                <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none">
                  <div className="p-3 rounded-2xl bg-black/70 backdrop-blur-md border border-[#d4af37]/20 text-left">
                    <p className="font-serif text-xs text-white font-medium">
                      Шаман Tonalxayakatl у священного огня & живая Medicine Music
                    </p>
                    <p className="text-[10px] text-[#d4af37] mt-0.5">
                      {isMuted ? "Нажмите для звука флейты и икаросов" : "Звук включен"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Description & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold leading-tight">
                То, что невозможно передать словами — можно только прожить
              </h3>
              <p className="text-sm sm:text-base text-[#a8a59f] leading-relaxed">
                На видео запечатлены реальные моменты ретрита: таинство ночной церемонии у огня, древняя работа шамана с телом и духом, и проникновенное звучание сакральных инструментов на закатной террасе.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-[#13151f] border border-[#252834]">
                <div className="w-9 h-9 rounded-xl bg-[#ff7b25]/15 border border-[#ff7b25]/30 flex items-center justify-center text-[#ff7b25] mb-3">
                  <FlameIcon className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base text-white font-semibold mb-1">
                  Священный огонь и копаль
                </h4>
                <p className="text-xs text-[#9f9c94] leading-relaxed">
                  Потомственный шаман традиции науатль Tonalxayakatl проводит ритуал очищения и энергетического исцеления.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#13151f] border border-[#252834]">
                <div className="w-9 h-9 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#F9D423] mb-3">
                  <MusicIcon className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base text-white font-semibold mb-1">
                  Живая Medicine Music
                </h4>
                <p className="text-xs text-[#9f9c94] leading-relaxed">
                  Акустическая звукотерапия: бамбуковые продольные флейты, шаманские бубны и аутентичные песнопения-икаросы.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#13151f] border border-[#252834]">
                <div className="w-9 h-9 rounded-xl bg-[#38ef7d]/15 border border-[#38ef7d]/30 flex items-center justify-center text-[#38ef7d] mb-3">
                  <ShieldIcon className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base text-white font-semibold mb-1">
                  Безопасность и бережность
                </h4>
                <p className="text-xs text-[#9f9c94] leading-relaxed">
                  Рядом всегда находятся Татьяна Мунтяну и Юрий Бузько, обеспечивая глубокую психологическую и соматическую поддержку.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#13151f] border border-[#252834]">
                <div className="w-9 h-9 rounded-xl bg-[#a8c0ff]/15 border border-[#a8c0ff]/30 flex items-center justify-center text-[#a8c0ff] mb-3">
                  <SparklesIcon className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base text-white font-semibold mb-1">
                  VIP-камерность 4–6 мест
                </h4>
                <p className="text-xs text-[#9f9c94] leading-relaxed">
                  Закрытое пространство исторической хасиенды, где всё внимание команды направлено на вашу личную трансформацию.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <RetreatCtaButton onClick={onOpenModal} size="lg" variant="primary">
                Подать заявку на участие
              </RetreatCtaButton>
              <span className="text-xs text-[#8c8983]">
                Ближайший заезд: <strong className="text-[#F9D423]">26 октября 2026</strong> (осталось 2 места)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
