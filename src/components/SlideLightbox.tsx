import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-2xl animate-fade-in select-none">
      {/* Top Header Bar - Liquid Glass */}
      <div className="flex items-center justify-between px-6 sm:px-10 py-4 border-b border-white/[0.12] bg-black/50 backdrop-blur-xl">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30">
            <span className="font-mono text-xs font-bold tracking-[0.18em] text-emerald-300">
              SLIDE {String(slide.slideNumber).padStart(2, '0')} // 27
            </span>
          </div>
          <span className="text-white/20 font-mono text-xs">|</span>
          <span className="font-mono text-xs tracking-wider text-white/80 uppercase truncate max-w-[280px] sm:max-w-xl">
            {slide.titleTh}
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <span className="hidden sm:inline font-mono text-[11px] text-white/40">
            USE ← / → ARROWS · ESC TO CLOSE
          </span>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full text-white/70 hover:text-white bg-white/[0.08] hover:bg-white/[0.18] border border-white/20 transition-all active:scale-95 shadow-sm"
            title="ปิดหน้าต่างขยายภาพ (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Slide Viewer Canvas */}
      <div className="relative flex-1 flex items-center justify-center p-4 sm:p-8 lg:p-12 overflow-hidden">
        {/* Previous Button - Liquid Glass Pill */}
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-6 z-20 p-4 rounded-full text-white/80 hover:text-white bg-black/60 hover:bg-black/85 border border-white/20 backdrop-blur-2xl transition-all hover:scale-105 active:scale-95 shadow-2xl"
            title="สไลด์ก่อนหน้า (←)"
          >
            <ChevronLeft className="w-6 h-6 text-emerald-400" />
          </button>
        )}

        {/* Slide High-Res Image with Curved Liquid Glass Border */}
        <div className="relative max-w-full max-h-full flex items-center justify-center">
          <img
            src={imageFullPath}
            alt={slide.titleTh}
            className="max-w-full max-h-[80vh] object-contain rounded-2xl border border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.85)]"
          />
        </div>

        {/* Next Button - Liquid Glass Pill */}
        {currentIndex < slides.length - 1 && (
          <button
            onClick={handleNext}
            className="absolute right-6 z-20 p-4 rounded-full text-white/80 hover:text-white bg-black/60 hover:bg-black/85 border border-white/20 backdrop-blur-2xl transition-all hover:scale-105 active:scale-95 shadow-2xl"
            title="สไลด์ถัดไป (→)"
          >
            <ChevronRight className="w-6 h-6 text-emerald-400" />
          </button>
        )}
      </div>

      {/* Bottom Technical Caption */}
      <div className="px-6 sm:px-10 py-3.5 border-t border-white/[0.12] bg-black/50 backdrop-blur-xl flex items-center justify-between font-mono text-xs text-white/60">
        <div className="flex items-center space-x-2">
          <span className="text-emerald-400">SOURCE:</span>
          <span>{slide.fileName} (1920 × 1080 MASTER)</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 rounded-full bg-white/[0.08] border border-white/10">
            {currentIndex + 1} of {slides.length}
          </span>
        </div>
      </div>
    </div>
  );
};
