import React from 'react';
import { Layers, ChevronLeft, ChevronRight, LayoutGrid, MonitorPlay } from 'lucide-react';
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
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#050505]/85 border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand & Identity */}
        <div
          onClick={() => onGoToSlide(0)}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <img
            src={logoPath}
            alt="HONGSON THE ONE"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-mono text-xs font-bold tracking-[0.18em] text-white">
              HONGSON THE ONE
            </span>
            <span className="text-[10px] text-white/50 truncate max-w-[180px] sm:max-w-none">
              โรงเรียนห้องสอนศึกษา ในพระอุปถัมภ์ฯ
            </span>
          </div>
        </div>

        {/* Desktop Section Navigation Pills */}
        <nav className="hidden xl:flex items-center space-x-1">
          {DECK_SECTIONS.map((sec) => {
            const isSecActive =
              activeSlideIndex >= sec.startSlide - 1 &&
              (sec.key === 'vision' || activeSlideIndex < (DECK_SECTIONS[DECK_SECTIONS.indexOf(sec) + 1]?.startSlide - 1 || 27));

            return (
              <button
                key={sec.key}
                onClick={() => onGoToSlide(sec.startSlide - 1)}
                className={`px-2.5 py-1 text-[11px] font-mono tracking-wider transition-all rounded-none ${
                  isSecActive
                    ? 'text-emerald-400 bg-emerald-500/10 border-b border-emerald-400 font-bold'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {sec.label}
              </button>
            );
          })}
        </nav>

        {/* Right Controls: Slide Counter & Navigation Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Slide Indicator Badge */}
          <div className="flex items-center font-mono text-xs bg-white/5 border border-white/10 px-2.5 py-1">
            <span className="text-emerald-400 font-bold">
              {String(activeSlideIndex + 1).padStart(2, '0')}
            </span>
            <span className="text-white/30 mx-1">/</span>
            <span className="text-white/70">{String(totalSlides).padStart(2, '0')}</span>
          </div>

          {/* Quick Step Buttons */}
          <div className="flex items-center space-x-1">
            <button
              onClick={onPrevSlide}
              disabled={activeSlideIndex === 0}
              className="p-1.5 text-white/70 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              title="สไลด์ก่อนหน้า"
            >
              <ChevronLeft className="w-4 h-4 text-emerald-400" />
            </button>
            <button
              onClick={onNextSlide}
              disabled={activeSlideIndex === totalSlides - 1}
              className="p-1.5 text-white/70 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              title="สไลด์ถัดไป"
            >
              <ChevronRight className="w-4 h-4 text-emerald-400" />
            </button>
          </div>

          {/* Toggle Slide Scrubber / Thumbnail Index */}
          <button
            onClick={onToggleScrubber}
            className={`flex items-center space-x-1.5 px-2.5 py-1 text-xs font-mono border transition-all ${
              isScrubberOpen
                ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                : 'bg-white/5 border-white/10 text-white/70 hover:text-white hover:bg-white/10'
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

