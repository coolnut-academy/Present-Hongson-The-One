import React, { useState, useEffect, useRef, useCallback } from 'react';
import { PresentationNavbar } from './components/PresentationNavbar';
import { Deck3DBackground } from './scenes/Deck3DBackground';
import { SlideCard } from './components/SlideCard';
import { SlideLightbox } from './components/SlideLightbox';
import { SlideScrubber } from './components/SlideScrubber';
import { DECK_SLIDES, DECK_SECTIONS } from './content/deckSlides';
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
    <div className="relative min-h-screen bg-[#050505] text-[#F5F5F7] selection:bg-emerald-500/30 selection:text-emerald-200 antialiased">
      {/* 1. CINEMATIC 3D WEBGL BACKGROUND (Spans behind all 27 slides) */}
      <Deck3DBackground
        currentSlide={currentSlide}
        activeSlideIndex={activeSlideIndex}
        totalSlides={totalSlides}
        scrollProgress={scrollProgress}
      />

      {/* 2. TOP FIXED NAVIGATION BAR */}
      <PresentationNavbar
        activeSlideIndex={activeSlideIndex}
        totalSlides={totalSlides}
        onGoToSlide={goToSlide}
        onNextSlide={nextSlide}
        onPrevSlide={prevSlide}
        onToggleScrubber={() => setIsScrubberOpen(!isScrubberOpen)}
        isScrubberOpen={isScrubberOpen}
      />

      {/* 3. FOREGROUND CONTENT: 27 SLIDES SHOWCASE */}
      <main className="relative z-10 w-full max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Executive Header Banner */}
        <section aria-label="Deck Header" className="mb-14 sm:mb-20 text-center sm:text-left p-6 sm:p-10 border border-white/10 backdrop-blur-xl bg-[#09090C]/80 rounded-sm shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="font-mono text-xs text-emerald-400 tracking-[0.22em] uppercase mb-3 flex items-center justify-center sm:justify-start space-x-2">
            <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>OFFICIAL EXECUTIVE PRESENTATION DECK</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            HONGSON THE ONE — สไลด์นำเสนอฉบับทางการ
          </h1>

          <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed mb-6 max-w-3xl">
            นำเสนอภาพและข้อมูลสไลด์ครบทั้ง 27 แผ่นตามลำดับชื่อไฟล์ จากเอกสารและสื่อนำเสนอ{' '}
            <code className="text-emerald-300 font-mono text-xs bg-white/5 px-2 py-0.5 border border-white/10 rounded-none">
              Ref/Hongson THE ONE SLIDE
            </code>{' '}
            ของโรงเรียนห้องสอนศึกษา ในพระอุปถัมภ์ฯ พร้อมระบบ 3D Animation ด้านหลังที่เลื่อนและแปรเปลี่ยนไปตามสไลด์แต่ละแผ่น
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 font-mono text-[11px] text-white/60">
            <span className="bg-white/5 px-3 py-1.5 border border-white/10 flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>27 SLIDES TOTAL</span>
            </span>
            <span className="bg-white/5 px-3 py-1.5 border border-white/10 flex items-center space-x-1.5">
              <Box className="w-3.5 h-3.5 text-emerald-400" />
              <span>3D BACKGROUND CHOREOGRAPHY</span>
            </span>
            <span className="bg-white/5 px-3 py-1.5 border border-white/10 flex items-center space-x-1.5">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>SCROLL-LINKED TRANSFORMATIONS</span>
            </span>
          </div>
        </section>

        {/* The 27 Sequential Slides */}
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

        {/* Closing Vision & School Tribute Footer */}
        <footer className="mt-20 pt-12 border-t border-white/15 text-center font-mono text-xs text-white/40 space-y-4 pb-24 backdrop-blur-md bg-[#050505]/60 p-8 rounded-sm">
          <p className="text-white/80 text-sm font-medium">
            โรงเรียนห้องสอนศึกษา ในพระอุปถัมภ์ฯ จังหวัดแม่ฮ่องสอน
          </p>
          <p className="text-white/50 text-[11px]">
            แหล่งข้อมูลอ้างอิง: Ref/Hongson THE ONE SLIDE (1.jpg – 27.jpg) · สงวนลิขสิทธิ์ พ.ศ. 2569
          </p>
          <div className="pt-2">
            <button
              onClick={() => goToSlide(0)}
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/15 text-emerald-400 hover:text-emerald-300 transition-all font-mono text-xs rounded-none"
            >
              <ChevronUp className="w-4 h-4" />
              <span>กลับสู่จุดเริ่มต้น (SLIDE 01)</span>
            </button>
          </div>
        </footer>
      </main>

      {/* 4. FLOATING HUD TELEMETRY (Left Corner on Desktop) */}
      <div className="hidden lg:flex fixed bottom-5 left-5 z-30 items-center space-x-3 bg-[#0A0A0D]/85 backdrop-blur-md border border-white/10 px-3.5 py-2 font-mono text-[11px] text-white/70 shadow-2xl">
        <div className="relative flex items-center justify-center w-2 h-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
        </div>
        <span className="text-white/40">3D SCENE //</span>
        <span className="text-emerald-400 font-bold uppercase">
          {currentSlide.scene3dMode}
        </span>
        <span className="text-white/20">|</span>
        <span className="text-white/50">
          PROGRESS: {(scrollProgress * 100).toFixed(0)}%
        </span>
      </div>

      {/* 5. FLOATING CONTROLS (Right Corner) */}
      <div className="fixed bottom-5 right-5 z-30 flex items-center space-x-1.5 bg-[#0A0A0D]/90 backdrop-blur-md border border-white/15 p-1.5 shadow-2xl">
        <button
          onClick={prevSlide}
          disabled={activeSlideIndex === 0}
          className="p-2 text-white/70 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
          title="สไลด์ก่อนหน้า (Arrow Left / Up)"
        >
          <ChevronUp className="w-4 h-4 text-emerald-400" />
        </button>

        <div className="font-mono text-xs text-white/80 px-2 flex items-center space-x-1">
          <span className="text-emerald-400 font-bold">
            {String(activeSlideIndex + 1).padStart(2, '0')}
          </span>
          <span className="text-white/30">/</span>
          <span>{String(totalSlides).padStart(2, '0')}</span>
        </div>

        <button
          onClick={nextSlide}
          disabled={activeSlideIndex === totalSlides - 1}
          className="p-2 text-white/70 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
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
