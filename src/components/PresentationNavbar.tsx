import React from 'react';
import { ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';
import { DECK_SECTIONS } from '../content/deckSlides';

interface PresentationNavbarProps {
  activeSlideIndex: number;
  totalSlides: number;
  onGoToSlide: (index: number) => void;
  onNextSlide: () => void;
  onPrevSlide: () => void;
  onToggleScrubber: () => void;
  isScrubberOpen: boolean;
}

export const PresentationNavbar: React.FC<PresentationNavbarProps> = ({
  activeSlideIndex,
  totalSlides,
  onGoToSlide,
  onNextSlide,
  onPrevSlide,
  onToggleScrubber,
  isScrubberOpen,
}) => {
  const basePath = import.meta.env.BASE_URL || '/';
  const cleanBase = basePath.endsWith('/') ? basePath : `${basePath}/`;
  const logoPath = `${cleanBase}hongson-assets/logos/hongson-the-one.webp`;

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-2xl bg-black/60 border-b border-white/[0.12] shadow-[0_4px_30px_rgba(0,0,0,0.6)] select-none">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        {/* Brand & Identity with Liquid Glass Hover */}
        <div
          onClick={() => onGoToSlide(0)}
          className="flex items-center space-x-3 cursor-pointer group px-2 py-1 rounded-2xl hover:bg-white/[0.06] transition-all"
        >
          <img
            src={logoPath}
            alt="HONGSON THE ONE"
            className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.18em] text-white">
              HONGSON THE ONE
            </span>
            <span className="text-[10px] sm:text-[11px] text-white/50 truncate max-w-[180px] sm:max-w-none">
              โรงเรียนห้องสอนศึกษา ในพระอุปถัมภ์ฯ
            </span>
          </div>
        </div>

        {/* Desktop Section Navigation - Liquid Glass Pills */}
        <nav className="hidden xl:flex items-center space-x-1.5 p-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl">
          {DECK_SECTIONS.map((sec) => {
            const isSecActive =
              activeSlideIndex >= sec.startSlide - 1 &&
              (sec.key === 'vision' || activeSlideIndex < (DECK_SECTIONS[DECK_SECTIONS.indexOf(sec) + 1]?.startSlide - 1 || 27));

            return (
              <button
                key={sec.key}
                onClick={() => onGoToSlide(sec.startSlide - 1)}
                className={`px-3.5 py-1.5 text-[11px] font-mono tracking-wider transition-all rounded-full ${
                  isSecActive
                    ? 'text-emerald-300 bg-white/[0.14] border border-emerald-400/40 shadow-[0_0_15px_rgba(52,211,153,0.25)] font-semibold'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                {sec.label}
              </button>
            );
          })}
        </nav>

        {/* Right Controls: Slide Counter & Liquid Glass Navigation Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Slide Indicator Liquid Pill */}
          <div className="flex items-center font-mono text-xs bg-white/[0.08] border border-white/15 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-sm">
            <span className="text-emerald-400 font-bold">
              {String(activeSlideIndex + 1).padStart(2, '0')}
            </span>
            <span className="text-white/30 mx-1.5">/</span>
            <span className="text-white/70">{String(totalSlides).padStart(2, '0')}</span>
          </div>

          {/* Quick Step Buttons - Pill Circles */}
          <div className="flex items-center space-x-1 p-0.5 rounded-full bg-white/[0.04] border border-white/10">
            <button
              onClick={onPrevSlide}
              disabled={activeSlideIndex === 0}
              className="p-2 rounded-full text-white/70 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/15 transition-all active:scale-95"
              title="สไลด์ก่อนหน้า"
            >
              <ChevronLeft className="w-4 h-4 text-emerald-400" />
            </button>
            <button
              onClick={onNextSlide}
              disabled={activeSlideIndex === totalSlides - 1}
              className="p-2 rounded-full text-white/70 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/15 transition-all active:scale-95"
              title="สไลด์ถัดไป"
            >
              <ChevronRight className="w-4 h-4 text-emerald-400" />
            </button>
          </div>

          {/* Toggle Slide Scrubber / Thumbnail Index - Liquid Pill */}
          <button
            onClick={onToggleScrubber}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono border backdrop-blur-md transition-all active:scale-95 ${
              isScrubberOpen
                ? 'bg-emerald-500/25 border-emerald-400 text-emerald-200 shadow-[0_0_15px_rgba(52,211,153,0.3)]'
                : 'bg-white/[0.08] border-white/15 text-white/80 hover:text-white hover:bg-white/[0.18]'
            }`}
            title="ดูสารบัญสไลด์ทั้งหมด 27 แผ่น"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">INDEX</span>
          </button>
        </div>
      </div>
    </header>
  );
};
