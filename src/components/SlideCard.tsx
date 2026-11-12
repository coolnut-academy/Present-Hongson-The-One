import React from 'react';
import { Maximize2, ChevronRight, Globe, ExternalLink, Sparkles } from 'lucide-react';
import { DeckSlideData } from '../content/deckSlides';

interface SlideCardProps {
  slide: DeckSlideData;
  isActive: boolean;
  onOpenLightbox: (slideIndex: number) => void;
  index: number;
}

export const SlideCard: React.FC<SlideCardProps> = ({
  slide,
  isActive,
  onOpenLightbox,
  index,
}) => {
  const basePath = import.meta.env.BASE_URL || '/';
  const cleanBase = basePath.endsWith('/') ? basePath : `${basePath}/`;
  const imageFullPath = `${cleanBase}${slide.imageSrc}`;

  return (
    <div
      className={`relative w-full max-w-[1720px] max-h-[calc(100dvh-5.5rem)] flex flex-col xl:flex-row items-center gap-5 sm:gap-7 xl:gap-9 p-4 sm:p-6 lg:p-7 rounded-3xl liquid-glass-card transition-all duration-700 ${
        isActive
          ? 'border-emerald-400/40 ring-1 ring-emerald-400/30 shadow-[0_25px_70px_rgba(0,0,0,0.8),0_0_50px_rgba(52,211,153,0.18)]'
          : 'border-white/10 opacity-90'
      }`}
    >
      {/* 1. Large Crisp 16:9 Slide Presentation (Left / Primary View) */}
      <div
        onClick={() => onOpenLightbox(index)}
        className="relative flex-1 w-full h-[36vh] sm:h-[46vh] xl:h-full max-h-[66vh] xl:max-h-[72vh] flex items-center justify-center rounded-2xl bg-black/50 overflow-hidden cursor-zoom-in group/img border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
      >
        <img
          src={imageFullPath}
          alt={`Slide ${slide.slideNumber}: ${slide.titleTh}`}
          loading={index < 3 ? 'eager' : 'lazy'}
          className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover/img:scale-[1.025]"
        />

        {/* Liquid Glass Hover Badge */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 sm:p-5 pointer-events-none">
          <span className="font-mono text-xs text-white/90 bg-black/70 px-3.5 py-1.5 rounded-full backdrop-blur-xl border border-white/20">
            {slide.fileName} · 1920 × 1080 MASTER
          </span>
          <span className="font-mono text-xs text-emerald-300 bg-black/70 px-3.5 py-1.5 rounded-full backdrop-blur-xl border border-emerald-400/30 flex items-center space-x-1.5">
            <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>คลิกเพื่อขยายเต็มจอ</span>
          </span>
        </div>
      </div>

      {/* 2. Structured Editorial Narrative (Right Panel on Desktop, Bottom on Mobile) */}
      <div className="w-full xl:w-[460px] 2xl:w-[520px] flex-shrink-0 flex flex-col justify-between space-y-3.5 sm:space-y-4 overflow-y-auto max-h-[42vh] xl:max-h-full pr-1 custom-scrollbar">
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/35 shadow-[0_0_12px_rgba(52,211,153,0.25)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs font-bold tracking-[0.16em] text-emerald-300">
                SLIDE {String(slide.slideNumber).padStart(2, '0')} // 27
              </span>
            </div>
            <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 font-mono text-[10px] tracking-wider text-white/70 uppercase">
              {slide.category}
            </span>
          </div>

          <button
            onClick={() => onOpenLightbox(index)}
            className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/[0.08] hover:bg-white/[0.18] border border-white/15 text-xs font-mono text-white/80 hover:text-white transition-all active:scale-95 shadow-sm"
            title="ขยายภาพสไลด์เต็มจอ"
          >
            <Maximize2 className="w-3 h-3 text-emerald-400" />
            <span className="hidden sm:inline">FULLSCREEN</span>
          </button>
        </div>

        {/* Titles */}
        <div>
          <div className="font-mono text-[10px] tracking-[0.2em] text-emerald-400/90 uppercase mb-1 flex items-center space-x-1.5">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span>{slide.eyebrow}</span>
          </div>
          <h2 className="text-lg sm:text-xl xl:text-2xl font-bold tracking-tight text-white mb-1 leading-snug">
            {slide.titleTh}
          </h2>
          <p className="font-mono text-xs text-white/50 tracking-wide">
            {slide.titleEn}
          </p>
        </div>

        {/* Core Slide Quote in Liquid Glass Capsule */}
        <div className="p-3.5 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 border-l-4 border-l-emerald-400 shadow-sm">
          <p className="text-xs sm:text-sm text-emerald-200/95 font-medium leading-relaxed italic">
            "{slide.quoteTh}"
          </p>
        </div>

        {/* Summary Description */}
        <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
          {slide.descriptionTh}
        </p>

        {/* Key Takeaways */}
        <div className="pt-2 border-t border-white/[0.08] space-y-2">
          <div className="font-mono text-[10px] tracking-[0.18em] text-white/40 uppercase">
            KEY TAKEAWAYS // สรุปประเด็นสำคัญ
          </div>
          <div className="space-y-1.5">
            {slide.takeaways.map((point, pIdx) => (
              <div
                key={pIdx}
                className="flex items-start space-x-2 text-xs text-[#D1D5DB] leading-relaxed"
              >
                <ChevronRight className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* If Slide 27: Official Domain Link Action Pill */}
        {slide.slideNumber === 27 && (
          <div className="pt-2 flex flex-wrap items-center gap-2.5">
            <a
              href="https://hongson.one"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-black font-bold text-xs tracking-wider transition-all shadow-[0_4px_20px_rgba(52,211,153,0.4)] active:scale-95"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>เข้าใช้งานระบบที่ HONGSON.ONE</span>
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
            <span className="font-mono text-[10px] text-white/50">
              หรือพิมพ์ www.hongson.one
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
