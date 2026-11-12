import React, { useState, useEffect, useRef, useCallback } from 'react';
import { PresentationNavbar } from './components/PresentationNavbar';
import { Deck3DBackground } from './scenes/Deck3DBackground';
import { SlideCard } from './components/SlideCard';
import { SlideLightbox } from './components/SlideLightbox';
import { SlideScrubber } from './components/SlideScrubber';
import { DECK_SLIDES, DECK_SECTIONS } from './content/deckSlides';
import { ChevronUp, ChevronDown, Sparkles, Box, Compass, Globe, ExternalLink, ArrowRight } from 'lucide-react';

export const App: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isScrubberOpen, setIsScrubberOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  const totalSlides = DECK_SLIDES.length;
  const currentSlide = DECK_SLIDES[activeSlideIndex] || DECK_SLIDES[0];

  // Scroll smoothly to a specific slide (0 = Hero, 1..27 = Slides, 28 = Outro)
  const goToSlide = useCallback((index: number) => {
    if (index < 0 || index >= totalSlides) return;
    setActiveSlideIndex(index);
    const targetElement = document.getElementById(`slide-${index}`);
    if (targetElement) {
      isScrollingRef.current = true;
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 700);
    }
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    if (activeSlideIndex < totalSlides - 1) {
      goToSlide(activeSlideIndex + 1);
    }
  }, [activeSlideIndex, totalSlides, goToSlide]);

  const prevSlide = useCallback(() => {
    if (activeSlideIndex > 0) {
      goToSlide(activeSlideIndex - 1);
    }
  }, [activeSlideIndex, goToSlide]);

  // Track scroll position in the snap container
  const handleContainerScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    const scrollable = el.scrollHeight - el.clientHeight;
    if (scrollable > 0) {
      const progress = Math.min(Math.max(el.scrollTop / scrollable, 0), 1);
      setScrollProgress(progress);
    }
  };

  // Keyboard navigation for 1-to-1 Slides
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex !== null || isScrubberOpen) return;

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(totalSlides - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, isScrubberOpen, nextSlide, prevSlide, goToSlide, totalSlides]);

  // Intersection Observer for 1-to-1 Slide Snapping
  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: containerRef.current,
      threshold: 0.55, // Trigger when more than half of the slide is visible
    };

    const observer = new IntersectionObserver((entries) => {
      if (isScrollingRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const indexAttr = entry.target.getAttribute('data-slide-index');
          if (indexAttr !== null) {
            const newIndex = parseInt(indexAttr, 10);
            if (!isNaN(newIndex) && newIndex !== activeSlideIndex) {
              setActiveSlideIndex(newIndex);
            }
          }
        }
      });
    }, options);

    const slideElements = document.querySelectorAll('[data-slide-index]');
    slideElements.forEach((el) => observer.observe(el));

    return () => {
      slideElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [activeSlideIndex]);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#050505] text-[#F5F5F7] selection:bg-emerald-500/30 selection:text-emerald-200 antialiased">
      {/* 1. CINEMATIC 3D WEBGL BACKGROUND (Behind all slides) */}
      <Deck3DBackground
        currentSlide={currentSlide}
        activeSlideIndex={activeSlideIndex}
        totalSlides={totalSlides}
        scrollProgress={scrollProgress}
      />

      {/* 2. TOP FIXED NAVIGATION BAR - Liquid Glass */}
      <PresentationNavbar
        activeSlideIndex={activeSlideIndex}
        totalSlides={totalSlides}
        onGoToSlide={goToSlide}
        onNextSlide={nextSlide}
        onPrevSlide={prevSlide}
        onToggleScrubber={() => setIsScrubberOpen(!isScrubberOpen)}
        isScrubberOpen={isScrubberOpen}
      />

      {/* 3. 1-TO-1 FULL-SCREEN SNAP CONTAINER (Strictly 1 Slide per Screen) */}
      <div
        ref={containerRef}
        onScroll={handleContainerScroll}
        className="snap-deck-container fixed inset-0 z-10"
      >
        {/* The 27 Sequential Slides: Each strictly occupying 100vh with NO bleeding */}
        {DECK_SLIDES.map((slide, index) => (
          <section
            key={slide.slideNumber}
            id={`slide-${index}`}
            data-slide-index={index}
            className="snap-deck-slide w-full h-screen h-[100dvh] flex items-center justify-center px-4 sm:px-6 lg:px-10 xl:px-12 pt-16 pb-6 select-none"
          >
            <SlideCard
              slide={slide}
              index={index}
              isActive={index === activeSlideIndex}
              onOpenLightbox={(idx) => setLightboxIndex(idx)}
            />
          </section>
        ))}

        {/* Closing Outro Page: Official Portal & Tribute */}
        <section
          id="slide-outro"
          className="snap-deck-slide w-full h-screen h-[100dvh] flex items-center justify-center px-4 sm:px-6 lg:px-12 pt-16 pb-6 select-none"
        >
          <div className="relative w-full max-w-4xl p-8 sm:p-12 rounded-3xl liquid-glass-card text-center space-y-6 shadow-2xl">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="font-mono text-xs font-bold text-emerald-300 tracking-[0.2em]">
                HONGSON THE ONE · OFFICIAL PORTAL
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              ก้าวสู่อนาคตการศึกษาดิจิทัลไปด้วยกัน
            </h2>

            <p className="text-sm sm:text-base text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
              โรงเรียนห้องสอนศึกษา ในพระอุปถัมภ์ฯ จังหวัดแม่ฮ่องสอน
              พร้อมเปิดให้บริการแพลตฟอร์มการศึกษาแบบบูรณาการเต็มรูปแบบ เข้าใช้งานได้โดยตรงผ่านโดเมนใหม่
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://hongson.one"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-black font-bold text-sm tracking-wider shadow-[0_4px_30px_rgba(52,211,153,0.5)] active:scale-95 transition-all"
              >
                <Globe className="w-5 h-5" />
                <span>เข้าสู่ระบบที่ HONGSON.ONE</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>

              <button
                onClick={() => goToSlide(0)}
                className="inline-flex items-center space-x-2 px-6 py-4 rounded-full bg-white/[0.08] hover:bg-white/[0.18] border border-white/20 text-white font-mono text-xs transition-all active:scale-95"
              >
                <ChevronUp className="w-4 h-4 text-emerald-400" />
                <span>กลับสู่สไลด์แรก (SLIDE 01)</span>
              </button>
            </div>

            <div className="pt-4 border-t border-white/10 font-mono text-xs text-white/40">
              <span>HONGSON THE ONE · One Platform to Work, Learn, Create, Share</span>
            </div>
          </div>
        </section>
      </div>

      {/* 4. FLOATING HUD TELEMETRY (Left Corner on Desktop) */}
      <div className="hidden lg:flex fixed bottom-6 left-6 z-30 items-center space-x-3 bg-black/60 backdrop-blur-2xl border border-white/20 px-5 py-2.5 rounded-full font-mono text-xs text-white/80 shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
        <div className="relative flex items-center justify-center w-2.5 h-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </div>
        <span className="text-white/40">3D SCENE //</span>
        <span className="text-emerald-300 font-bold uppercase">
          {currentSlide.scene3dMode}
        </span>
        <span className="text-white/20">|</span>
        <span className="text-white/60">
          PAGE: {activeSlideIndex + 1} / {totalSlides}
        </span>
      </div>

      {/* 5. FLOATING PRESENTATION CONTROLLER (Right Corner) */}
      <div className="fixed bottom-6 right-6 z-30 flex items-center space-x-2 bg-black/60 backdrop-blur-2xl border border-white/20 p-2 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
        <button
          onClick={prevSlide}
          disabled={activeSlideIndex === 0}
          className="p-2.5 rounded-full text-white/70 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/15 transition-all active:scale-95"
          title="สไลด์ก่อนหน้า (Arrow Left / Up)"
        >
          <ChevronUp className="w-4 h-4 text-emerald-400" />
        </button>

        <div className="font-mono text-xs text-white/90 px-3 flex items-center space-x-1">
          <span className="text-emerald-300 font-bold">
            {String(activeSlideIndex + 1).padStart(2, '0')}
          </span>
          <span className="text-white/30">/</span>
          <span>{String(totalSlides).padStart(2, '0')}</span>
        </div>

        <button
          onClick={nextSlide}
          disabled={activeSlideIndex === totalSlides - 1}
          className="p-2.5 rounded-full text-white/70 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/15 transition-all active:scale-95"
          title="สไลด์ถัดไป (Arrow Right / Down)"
        >
          <ChevronDown className="w-4 h-4 text-emerald-400" />
        </button>
      </div>

      {/* 6. SIDE VERTICAL SLIDE DOTS (Right Edge Desktop) */}
      <div className="hidden 2xl:flex fixed right-4 top-1/2 -translate-y-1/2 z-30 flex-col space-y-1.5 p-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
        {DECK_SLIDES.map((_, dotIdx) => (
          <button
            key={dotIdx}
            onClick={() => goToSlide(dotIdx)}
            className={`transition-all rounded-full ${
              dotIdx === activeSlideIndex
                ? 'w-2.5 h-6 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]'
                : 'w-2.5 h-2.5 bg-white/25 hover:bg-white/60'
            }`}
            title={`ไปยังสไลด์ที่ ${dotIdx + 1}`}
          />
        ))}
      </div>

      {/* 7. FULLSCREEN HIGH-RES SLIDE LIGHTBOX MODAL */}
      <SlideLightbox
        slides={DECK_SLIDES}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={(idx) => setLightboxIndex(idx)}
      />

      {/* 8. SLIDE THUMBNAIL INDEX / SCRUBBER MODAL */}
      <SlideScrubber
        slides={DECK_SLIDES}
        activeSlideIndex={activeSlideIndex}
        isOpen={isScrubberOpen}
        onClose={() => setIsScrubberOpen(false)}
        onSelectSlide={(idx) => goToSlide(idx)}
      />
    </div>
  );
};

export default App;
