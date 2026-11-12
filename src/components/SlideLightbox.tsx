import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { DeckSlideData } from '../content/deckSlides';

interface SlideLightboxProps {
  slides: DeckSlideData[];
  currentIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const SlideLightbox: React.FC<SlideLightboxProps> = ({
  slides,
  currentIndex,
  onClose,
  onSelectIndex,
}) => {
  const isOpen = currentIndex !== null;
  const slide = currentIndex !== null ? slides[currentIndex] : null;

  const handleNext = useCallback(() => {
    if (currentIndex !== null && currentIndex < slides.length - 1) {
      onSelectIndex(currentIndex + 1);
    }
  }, [currentIndex, slides.length, onSelectIndex]);

  const handlePrev = useCallback(() => {
    if (currentIndex !== null && currentIndex > 0) {
      onSelectIndex(currentIndex - 1);
    }
  }, [currentIndex, onSelectIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' || e.key === 'j') handleNext();
      if (e.key === 'ArrowLeft' || e.key === 'k') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !slide) return null;

  const basePath = import.meta.env.BASE_URL || '/';
  const cleanBase = basePath.endsWith('/') ? basePath : `${basePath}/`;
  const imageFullPath = `${cleanBase}${slide.imageSrc}`;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#050505]/95 backdrop-blur-xl animate-fade-in select-none">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#070709]/80">
        <div className="flex items-center space-x-4">
          <span className="font-mono text-xs font-bold tracking-[0.2em] text-emerald-400">
            SLIDE {String(slide.slideNumber).padStart(2, '0')} // 27
          </span>
          <span className="text-white/20 font-mono text-xs">|</span>
          <span className="font-mono text-xs tracking-wider text-white/70 uppercase truncate max-w-[280px] sm:max-w-md">
            {slide.titleTh}
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <span className="hidden sm:inline font-mono text-[11px] text-white/40">
            USE ← / → ARROWS TO NAVIGATE · ESC TO CLOSE
          </span>
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-none transition-colors"
            title="ปิดหน้าต่างขยายภาพ (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Slide Viewer Canvas */}
      <div className="relative flex-1 flex items-center justify-center p-4 sm:p-8 overflow-hidden">
        {/* Previous Button */}
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-4 z-20 p-3 sm:p-4 text-white/70 hover:text-white bg-black/60 hover:bg-black/90 border border-white/15 rounded-none backdrop-blur-md transition-all hover:scale-105"
            title="สไลด์ก่อนหน้า (←)"
          >
            <ChevronLeft className="w-6 h-6 text-emerald-400" />
          </button>
        )}

        {/* Slide High-Res Image */}
        <div className="relative max-w-full max-h-full flex items-center justify-center shadow-2xl">
          <img
            src={imageFullPath}
            alt={slide.titleTh}
            className="max-w-full max-h-[78vh] object-contain border border-white/10 rounded-none shadow-[0_0_50px_rgba(0,0,0,0.8)]"
          />
        </div>

        {/* Next Button */}
        {currentIndex < slides.length - 1 && (
          <button
            onClick={handleNext}
            className="absolute right-4 z-20 p-3 sm:p-4 text-white/70 hover:text-white bg-black/60 hover:bg-black/90 border border-white/15 rounded-none backdrop-blur-md transition-all hover:scale-105"
            title="สไลด์ถัดไป (→)"
          >
            <ChevronRight className="w-6 h-6 text-emerald-400" />
          </button>
        )}
      </div>

      {/* Bottom Technical Caption */}
      <div className="px-6 py-3 border-t border-white/10 bg-[#070709]/80 flex items-center justify-between font-mono text-xs text-white/60">
        <div>
          <span className="text-emerald-400 mr-2">FILE:</span>
          <span>{slide.fileName} (Ref/Hongson THE ONE SLIDE)</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>{currentIndex + 1} of {slides.length}</span>
        </div>
      </div>
    </div>
  );
};
