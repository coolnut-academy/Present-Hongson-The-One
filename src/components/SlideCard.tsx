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
    <article
      id={`slide-${index}`}
      data-slide-index={index}
      className={`group relative transition-all duration-700 mb-12 sm:mb-20 p-4 sm:p-6 lg:p-7 xl:p-8 rounded-3xl backdrop-blur-2xl border ${
        isActive
          ? 'border-emerald-400/40 bg-gradient-to-b from-white/[0.12] via-[#0E0E14]/85 to-[#08080C]/95 ring-1 ring-emerald-400/30'
          : 'border-white/[0.12] bg-gradient-to-b from-white/[0.07] via-[#0B0B0F]/80 to-[#060609]/90 hover:border-white/25 hover:from-white/[0.09]'
      }`}
      style={{
        boxShadow: isActive
          ? 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), 0 25px 60px -15px rgba(0, 0, 0, 0.75), 0 0 45px -10px rgba(52, 211, 153, 0.2)'
          : 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.2), 0 20px 45px -15px rgba(0, 0, 0, 0.65)',
      }}
    >
      {/* Top Floating Liquid Glass Spec Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 sm:pb-6 border-b border-white/[0.08]">
        <div className="flex items-center space-x-2.5">
          {/* Slide Number Pill */}
          <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 shadow-[0_0_12px_rgba(52,211,153,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs font-bold tracking-[0.18em] text-emerald-300">
              SLIDE {String(slide.slideNumber).padStart(2, '0')} // 27
            </span>
          </div>

          {/* Category Pill */}
          <div className="hidden sm:inline-flex items-center px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 font-mono text-[11px] tracking-wider text-white/70 uppercase">
            {slide.category}
          </div>
        </div>

        {/* Fullscreen Expansion Pill Button */}
        <button
          onClick={() => onOpenLightbox(index)}
          className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.16] border border-white/15 backdrop-blur-md text-xs font-mono text-white/80 hover:text-white transition-all active:scale-95 shadow-sm"
          title="ขยายภาพสไลด์เต็มจอ (Fullscreen)"
        >
          <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>FULLSCREEN</span>
        </button>
      </div>

      {/* Main Expansive Content Layout: Side-by-Side on XL screens, Stacked on Mobile/Tablet */}
      <div className="pt-5 sm:pt-7 grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Widescreen 16:9 Slide Image (Col 7 on XL) */}
        <div
          onClick={() => onOpenLightbox(index)}
          className="xl:col-span-7 relative w-full aspect-[16/9] rounded-2xl bg-black/60 overflow-hidden cursor-zoom-in group/img border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
        >
          <img
            src={imageFullPath}
            alt={`Slide ${slide.slideNumber}: ${slide.titleTh}`}
            loading={index < 3 ? 'eager' : 'lazy'}
            className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover/img:scale-[1.025]"
          />

          {/* Liquid Glass Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 sm:p-5">
            <span className="font-mono text-xs text-white/90 bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-xl border border-white/15">
              {slide.fileName} · 1920 × 1080 (Deck Master)
            </span>
            <span className="font-mono text-xs text-emerald-300 bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-xl border border-emerald-400/30 flex items-center space-x-1.5">
              <Maximize2 className="w-3 h-3 text-emerald-400" />
              <span>คลิกเพื่อขยายเต็มจอ</span>
            </span>
          </div>
        </div>

        {/* Narrative & Takeaways (Col 5 on XL) */}
        <div className="xl:col-span-5 space-y-4 sm:space-y-5">
          {/* Eyebrow & Titles */}
          <div>
            <div className="font-mono text-[11px] tracking-[0.2em] text-emerald-400/90 uppercase mb-1.5 flex items-center space-x-2">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              <span>{slide.eyebrow}</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight text-white mb-1.5 leading-snug">
              {slide.titleTh}
            </h2>
            <p className="font-mono text-xs sm:text-sm text-white/50 tracking-wide">
              {slide.titleEn}
            </p>
          </div>

          {/* Core Slide Quote / Direct Takeaway in Liquid Glass Pill Box */}
          <div className="p-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 border-l-4 border-l-emerald-400 shadow-sm">
            <p className="text-sm sm:text-base text-emerald-200/95 font-medium leading-relaxed italic">
              "{slide.quoteTh}"
            </p>
          </div>

          {/* Slide Context Summary */}
          <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
            {slide.descriptionTh}
          </p>

          {/* Structured Key Takeaways */}
          <div className="pt-3 border-t border-white/[0.08] space-y-2.5">
            <div className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
              KEY TAKEAWAYS // สรุปประเด็นสำคัญ
            </div>
            <div className="space-y-2">
              {slide.takeaways.map((point, pIdx) => (
                <div
                  key={pIdx}
                  className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#D1D5DB] leading-relaxed"
                >
                  <ChevronRight className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* If Slide 27: Official Domain Link Action Pill */}
          {slide.slideNumber === 27 && (
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="https://hongson.one"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-black font-bold text-xs tracking-wider transition-all shadow-[0_4px_25px_rgba(52,211,153,0.4)] hover:shadow-[0_4px_35px_rgba(52,211,153,0.6)] active:scale-95"
              >
                <Globe className="w-4 h-4" />
                <span>เข้าใช้งานระบบที่ HONGSON.ONE</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
              <span className="font-mono text-[11px] text-white/60">
                หรือพิมพ์ www.hongson.one
              </span>
            </div>
          )}

          {/* Footer Meta Pill */}
          <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-[10px] text-white/40">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>SOURCE: {slide.fileName}</span>
            </div>
            <span className="uppercase text-white/30">
              STAGE: {slide.scene3dMode}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
