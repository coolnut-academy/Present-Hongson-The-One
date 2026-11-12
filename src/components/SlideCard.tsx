import React from 'react';
import { Maximize2, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
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
  // Use Vite base URL correctly for asset resolution
  const basePath = import.meta.env.BASE_URL || '/';
  const cleanBase = basePath.endsWith('/') ? basePath : `${basePath}/`;
  const imageFullPath = `${cleanBase}${slide.imageSrc}`;

  return (
    <article
      id={`slide-${index}`}
      data-slide-index={index}
      className={`group relative transition-all duration-500 mb-14 sm:mb-20 border backdrop-blur-md ${
        isActive
          ? 'border-emerald-500/60 bg-[#09090C]/92 shadow-[0_0_40px_rgba(16,185,129,0.12)] ring-1 ring-emerald-500/30'
          : 'border-white/10 bg-[#07070A]/85 hover:border-white/25 hover:bg-[#07070A]/92 shadow-2xl'
      } rounded-sm overflow-hidden`}
      style={{
        borderTop: isActive
          ? '2px solid rgba(52, 211, 153, 0.9)'
          : '1px solid rgba(255, 255, 255, 0.22)',
      }}
    >
      {/* Top Spec Bar */}
      <div className="flex items-center justify-between px-5 sm:px-7 py-3 border-b border-white/[0.08] bg-[#070709]/80 backdrop-blur-sm">
        <div className="flex items-center space-x-3">
          <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-emerald-400">
            SLIDE {String(slide.slideNumber).padStart(2, '0')} // 27
          </span>
          <span className="text-white/20 font-mono text-[10px]">|</span>
          <span className="font-mono text-[10px] tracking-wider text-white/60 uppercase">
            {slide.category}
          </span>
        </div>

        <button
          onClick={() => onOpenLightbox(index)}
          className="flex items-center space-x-1.5 px-2.5 py-1 text-[11px] font-mono text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-none transition-colors"
          title="ขยายภาพสไลด์เต็มจอ"
        >
          <Maximize2 className="w-3 h-3 text-emerald-400" />
          <span className="hidden sm:inline">FULLSCREEN</span>
        </button>
      </div>

      {/* High-Resolution Slide Image Presentation */}
      <div
        onClick={() => onOpenLightbox(index)}
        className="relative w-full aspect-[16/9] bg-[#020202] overflow-hidden cursor-zoom-in group/img"
      >
        <img
          src={imageFullPath}
          alt={`Slide ${slide.slideNumber}: ${slide.titleTh}`}
          loading={index < 3 ? 'eager' : 'lazy'}
          className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover/img:scale-[1.02]"
        />

        {/* Hover Specular Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <span className="font-mono text-xs text-white/90 bg-black/70 px-2.5 py-1 backdrop-blur-md border border-white/10">
            {slide.fileName} · 1920 × 1080 (Deck Master)
          </span>
          <span className="font-mono text-xs text-emerald-400 bg-black/70 px-2.5 py-1 backdrop-blur-md border border-emerald-500/30 flex items-center space-x-1">
            <Maximize2 className="w-3 h-3 mr-1" />
            <span>คลิกเพื่อขยาย</span>
          </span>
        </div>
      </div>

      {/* Editorial Content Narrative (Strictly from Slide) */}
      <div className="p-6 sm:p-8 space-y-5">
        {/* Eyebrow & Titles */}
        <div>
          <div className="font-mono text-[10px] tracking-[0.25em] text-emerald-400/90 uppercase mb-1.5 flex items-center space-x-2">
            <span>{slide.eyebrow}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1 leading-snug">
            {slide.titleTh}
          </h2>
          <p className="font-mono text-xs sm:text-sm text-white/50 tracking-wide">
            {slide.titleEn}
          </p>
        </div>

        {/* Core Slide Quote / Direct Takeaway */}
        <div className="relative pl-4 py-2 border-l-2 border-emerald-500/70 bg-white/[0.02]">
          <p className="text-sm sm:text-base text-emerald-300/95 font-medium leading-relaxed italic">
            "{slide.quoteTh}"
          </p>
        </div>

        {/* Slide Context Summary */}
        <p className="text-sm text-[#86868B] leading-relaxed">
          {slide.descriptionTh}
        </p>

        {/* Structured Takeaways (Derived Exclusively from the Slide) */}
        <div className="pt-3 border-t border-white/[0.08] space-y-2.5">
          <div className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
            KEY TAKEAWAYS // ข้อสรุปสำคัญจากสไลด์
          </div>
          <div className="grid grid-cols-1 gap-2">
            {slide.takeaways.map((point, pIdx) => (
              <div
                key={pIdx}
                className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#A1A1A6] leading-relaxed"
              >
                <ChevronRight className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card Footer Technical Meta */}
        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-[10px] text-white/40">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
            <span>SOURCE: REF/HONGSON THE ONE SLIDE/{slide.fileName}</span>
          </div>
          <span className="text-white/30 uppercase">
            STAGE: {slide.scene3dMode}
          </span>
        </div>
      </div>
    </article>
  );
};

