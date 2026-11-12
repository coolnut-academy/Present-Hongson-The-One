import React, { useState, useEffect, useRef, useCallback } from 'react';
import { PresentationNavbar } from './components/PresentationNavbar';
import { Deck3DBackground } from './scenes/Deck3DBackground';
import { SlideCard } from './components/SlideCard';
import { SlideLightbox } from './components/SlideLightbox';
import { SlideScrubber } from './components/SlideScrubber';
import { DECK_SLIDES } from './content/deckSlides';
import { ChevronUp, ChevronDown, Sparkles, Box, Compass } from 'lucide-react';

export const App: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isScrubberOpen, setIsScrubberOpen] = useState(false);
  const isScrollingRef = useRef(false);

  const totalSlides = DECK_SLIDES.length;
  const currentSlide = DECK_SLIDES[activeSlideIndex] || DECK_SLIDES[0];

  // Continuous Scroll Progress Listener for 3D Camera & Rotation
  useEffect(() => {
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable > 0) {
        const progress = Math.min(Math.max(window.scrollY / scrollable, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll smoothly to a specific slide
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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if lightbox or scrubber is open
      if (lightboxIndex !== null || isScrubberOpen) return;

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown') {
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

  // Intersection Observer for scroll tracking
  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0,
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
    <div className="relative min-h-screen bg-[#050505] text-[#F5F5F7] selection:bg-emerald-500/30 selection:text-emerald-200 antialiased overflow-x-hidden">
      {/* 1. CINEMATIC 3D WEBGL BACKGROUND (Spans behind all 27 slides) */}
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

      {/* 3. FOREGROUND EXPANSIVE CONTENT: Widescreen Liquid Glass Presentation */}
      <main className="relative z-10 w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-8 sm:py-14">
        {/* Executive Header Banner - Liquid Glass Island */}
        <section
          aria-label="Deck Header"
          className="mb-12 sm:mb-20 text-center sm:text-left p-6 sm:p-10 lg:p-12 rounded-3xl backdrop-blur-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.25)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 shadow-[0_0_15px_rgba(52,211,153,0.2)] mb-4">
            <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span className="font-mono text-xs font-bold text-emerald-300 tracking-[0.2em] uppercase">
              OFFICIAL EXECUTIVE PRESENTATION DECK
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            HONGSON THE ONE — สไลด์นำเสนอฉบับทางการ
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[#9CA3AF] leading-relaxed mb-6 max-w-4xl">
            นำเสนอภาพและข้อมูลสไลด์ครบทั้ง 27 แผ่นตามลำดับ จากเอกสารและสื่อนำเสนอ{' '}
            <code className="text-emerald-300 font-mono text-xs sm:text-sm bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
              Ref/Hongson THE ONE SLIDE
            </code>{' '}
            ของโรงเรียนห้องสอนศึกษา ในพระอุปถัมภ์ฯ ผสาน 3D Background แบบไดนามิกที่แปรเปลี่ยนตามการเลื่อนชมสไลด์
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 font-mono text-xs text-white/70">
            <span className="bg-white/[0.06] hover:bg-white/[0.1] px-4 py-2 rounded-full border border-white/15 backdrop-blur-md flex items-center space-x-2 transition-all">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span>27 SLIDES COMPLETE</span>
            </span>
            <span className="bg-white/[0.06] hover:bg-white/[0.1] px-4 py-2 rounded-full border border-white/15 backdrop-blur-md flex items-center space-x-2 transition-all">
              <Box className="w-4 h-4 text-emerald-400" />
              <span>3D CHOREOGRAPHY</span>
            </span>
            <span className="bg-white/[0.06] hover:bg-white/[0.1] px-4 py-2 rounded-full border border-white/15 backdrop-blur-md flex items-center space-x-2 transition-all">
              <Compass className="w-4 h-4 text-cyan-400" />
              <span>SCROLL-LINKED TRANSFORMATION</span>
            </span>
          </div>
        </section>

        {/* The 27 Sequential Slides in Liquid Glass Cards */}
        <section aria-label="Slides Showcase" className="space-y-4">
          {DECK_SLIDES.map((slide, index) => (
            <SlideCard
              key={slide.slideNumber}
              slide={slide}
              index={index}
              isActive={index === activeSlideIndex}
              onOpenLightbox={(idx) => setLightboxIndex(idx)}
            />
          ))}
        </section>

        {/* Closing Vision & School Tribute Footer - Liquid Glass */}
        <footer className="mt-20 pt-12 text-center font-mono text-xs text-white/50 space-y-4 pb-28 backdrop-blur-2xl bg-white/[0.03] border border-white/10 p-8 sm:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <p className="text-white/90 text-sm sm:text-base font-medium">
            โรงเรียนห้องสอนศึกษา ในพระอุปถัมภ์ฯ จังหวัดแม่ฮ่องสอน
          </p>
          <div className="flex items-center justify-center space-x-2 text-emerald-400 text-sm">
            <span className="text-white/40">OFFICIAL PORTAL:</span>
            <a
              href="https://hongson.one"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 hover:text-white font-bold tracking-wider transition-all"
            >
              HONGSON.ONE
            </a>
          </div>
          <p className="text-white/40 text-xs">
            แหล่งข้อมูลอ้างอิง: สไลด์นำเสนอและประชาสัมพันธ์โดเมนใหม่ HONGSON THE ONE (hongson.one) · สงวนลิขสิทธิ์ พ.ศ. 2569
          </p>
          <div className="pt-3">
            <button
              onClick={() => goToSlide(0)}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white/[0.08] hover:bg-white/[0.18] border border-white/20 text-emerald-300 hover:text-white transition-all font-mono text-xs active:scale-95 shadow-md"
            >
              <ChevronUp className="w-4 h-4" />
              <span>กลับสู่จุดเริ่มต้น (SLIDE 01)</span>
            </button>
          </div>
        </footer>
      </main>

      {/* 4. FLOATING HUD TELEMETRY - Liquid Glass Capsule */}
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
          PROGRESS: {(scrollProgress * 100).toFixed(0)}%
        </span>
      </div>

      {/* 5. FLOATING PRESENTATION CONTROLS - Liquid Glass Capsule */}
      <div className="fixed bottom-6 right-6 z-30 flex items-center space-x-1.5 bg-black/60 backdrop-blur-2xl border border-white/20 p-2 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
        <button
          onClick={prevSlide}
          disabled={activeSlideIndex === 0}
          className="p-2.5 rounded-full text-white/70 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/15 transition-all active:scale-95"
          title="สไลด์ก่อนหน้า (Arrow Left / Up)"
        >
          <ChevronUp className="w-4 h-4 text-emerald-400" />
        </button>

        <div className="font-mono text-xs text-white/80 px-2.5 flex items-center space-x-1">
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

      {/* 6. FULLSCREEN HIGH-RES SLIDE LIGHTBOX MODAL */}
      <SlideLightbox
        slides={DECK_SLIDES}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={(idx) => setLightboxIndex(idx)}
      />

      {/* 7. SLIDE THUMBNAIL INDEX / SCRUBBER MODAL */}
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
