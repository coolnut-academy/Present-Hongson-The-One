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
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-md select-none animate-fade-in p-0 sm:p-6">
      <div className="relative w-full max-w-5xl max-h-[85vh] bg-[#0A0A0D] border border-white/15 flex flex-col rounded-none shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#070709]">
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
            className="p-1.5 text-white/60 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            title="ปิดหน้าต่างสารบัญ"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Grid of 27 Slides */}
        <div className="p-4 sm:p-6 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 custom-scrollbar">
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
                className={`group text-left p-2 border transition-all ${
                  isCurrent
                    ? 'border-emerald-400 bg-emerald-500/10 shadow-[0_0_15px_rgba(52,211,153,0.3)]'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.05]'
                }`}
              >
                {/* Thumbnail Image */}
                <div className="relative aspect-[16/9] bg-black overflow-hidden mb-2 border border-white/5">
                  <img
                    src={imgPath}
                    alt={slide.titleTh}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-1 left-1 px-1.5 py-0.5 bg-black/80 font-mono text-[9px] text-emerald-400 font-bold border border-white/10">
                    #{String(slide.slideNumber).padStart(2, '0')}
                  </div>
                  {isCurrent && (
                    <div className="absolute bottom-1 right-1 p-0.5 bg-emerald-500 text-black">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  )}
                </div>

                {/* Title & Category */}
                <div className="space-y-0.5">
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
        <div className="px-6 py-3 border-t border-white/10 bg-[#070709] flex items-center justify-between font-mono text-[11px] text-white/50">
          <span>คลิกที่สไลด์เพื่อไปยังหน้าที่ต้องการ</span>
          <span>ทั้งหมด 27 สไลด์</span>
        </div>
      </div>
    </div>
  );
};

