import React from 'react';
import { X, Check } from 'lucide-react';
import { DeckSlideData } from '../content/deckSlides';

interface SlideScrubberProps {
  slides: DeckSlideData[];
  activeSlideIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectSlide: (index: number) => void;
}

export const SlideScrubber: React.FC<SlideScrubberProps> = ({
  slides,
  activeSlideIndex,
  isOpen,
  onClose,
  onSelectSlide,
}) => {
  if (!isOpen) return null;

  const basePath = import.meta.env.BASE_URL || '/';
  const cleanBase = basePath.endsWith('/') ? basePath : `${basePath}/`;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-xl select-none animate-fade-in p-2 sm:p-8">
      <div className="relative w-full max-w-6xl max-h-[88vh] bg-[#09090D]/92 backdrop-blur-3xl border border-white/20 flex flex-col rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.85)] overflow-hidden">
        {/* Header - Liquid Glass */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-white/[0.12] bg-white/[0.03]">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-emerald-400">
              DECK INDEX // สารบัญสไลด์ 27 แผ่น
            </span>
            <span className="text-white/20 font-mono text-xs">|</span>
            <span className="font-mono text-xs text-white/60">
              REF/HONGSON THE ONE SLIDE
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/60 hover:text-white bg-white/[0.06] hover:bg-white/[0.15] border border-white/10 transition-all active:scale-95"
            title="ปิดหน้าต่างสารบัญ"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Grid of 27 Slides */}
        <div className="p-4 sm:p-7 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 custom-scrollbar">
          {slides.map((slide, idx) => {
            const isCurrent = idx === activeSlideIndex;
            const imgPath = `${cleanBase}${slide.imageSrc}`;

            return (
              <button
                key={slide.slideNumber}
                onClick={() => {
                  onSelectSlide(idx);
                  onClose();
                }}
                className={`group text-left p-3 rounded-2xl border transition-all ${
                  isCurrent
                    ? 'border-emerald-400 bg-emerald-500/15 shadow-[0_0_20px_rgba(52,211,153,0.35)] ring-1 ring-emerald-400/50'
                    : 'border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.07] hover:scale-[1.02]'
                }`}
              >
                {/* Thumbnail Image */}
                <div className="relative aspect-[16/9] bg-black/60 rounded-xl overflow-hidden mb-2.5 border border-white/10">
                  <img
                    src={imgPath}
                    alt={slide.titleTh}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full bg-black/75 font-mono text-[9px] text-emerald-400 font-bold border border-white/15 backdrop-blur-md">
                    #{String(slide.slideNumber).padStart(2, '0')}
                  </div>
                  {isCurrent && (
                    <div className="absolute bottom-1.5 right-1.5 p-1 rounded-full bg-emerald-400 text-black shadow-md">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  )}
                </div>

                {/* Title & Category */}
                <div className="space-y-1">
                  <div className="font-mono text-[9px] text-white/40 tracking-wider uppercase truncate">
                    {slide.category}
                  </div>
                  <div className="text-[11px] font-medium text-white/90 line-clamp-2 leading-tight">
                    {slide.titleTh}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-6 sm:px-8 py-3.5 border-t border-white/[0.12] bg-white/[0.02] flex items-center justify-between font-mono text-[11px] text-white/50">
          <span>คลิกที่สไลด์เพื่อไปยังหน้าที่ต้องการ</span>
          <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10">
            ทั้งหมด 27 สไลด์
          </span>
        </div>
      </div>
    </div>
  );
};
