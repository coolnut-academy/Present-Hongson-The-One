import React, { useState, useEffect, useRef, useCallback } from 'react';
import { PresentationNavbar } from './components/PresentationNavbar';
import { Deck3DStage } from './scenes/Deck3DStage';
import { SlideCard } from './components/SlideCard';
import { SlideLightbox } from './components/SlideLightbox';
import { SlideScrubber } from './components/SlideScrubber';
import { DECK_SLIDES, DECK_SECTIONS } from './content/deckSlides';
import { ChevronUp, ChevronDown, Sparkles } from 'lucide-react';

export const App: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isScrubberOpen, setIsScrubberOpen] = useState(false);
  const isScrollingRef = useRef(false);

  const totalSlides = DECK_SLIDES.length;
  const currentSlide = DECK_SLIDES[activeSlideIndex] || DECK_SLIDES[0];

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
      rootMargin: '-25% 0px -45% 0px',
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
    <div className="min-h-screen bg-[#050505] text-[#F5F5F7] flex flex-col antialiased selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Top Fixed Header Navbar */}
      <PresentationNavbar
        activeSlideIndex={activeSlideIndex}
        totalSlides={totalSlides}
        onGoToSlide={goToSlide}
        onNextSlide={nextSlide}
        onPrevSlide={prevSlide}
        onToggleScrubber={() => setIsScrubberOpen(!isScrubberOpen)}
        isScrubberOpen={isScrubberOpen}
      />

      {/* Main Split Layout: Left 3D Stage + Right Slide Feed */}
      <div className="flex-1 flex flex-col lg:flex-row relative">
        {/* LEFT COLUMN: Fixed/Sticky 3D Interactive Stage */}
        <section
          aria-label="3D Interactive Stage"
          className="w-full lg:w-[42%] xl:w-[40%] lg:sticky lg:top-14 h-[320px] sm:h-[380px] lg:h-[calc(100vh-3.5rem)] border-b lg:border-b-0 lg:border-r border-white/10 z-20 flex-shrink-0"
        >
          <Deck3DStage
            currentSlide={currentSlide}
            activeSlideIndex={activeSlideIndex}
            totalSlides={totalSlides}
          />
        </section>

        {/* RIGHT COLUMN: Continuous 27 Slides Editorial Stream */}
        <main
          aria-label="Slide Narrative Showcase"
          className="w-full lg:w-[58%] xl:w-[60%] px-4 sm:px-8 xl:px-12 py-8 sm:py-12 max-w-4xl"
        >
          {/* Executive Overview Header */}
          <div className="mb-10 pb-8 border-b border-white/10">
            <div className="font-mono text-xs text-emerald-400 tracking-[0.2em] uppercase mb-2 flex items-center space-x-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OFFICIAL EXECUTIVE PRESENTATION DECK</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
              HONGSON THE ONE — สไลด์นำเสนอฉบับทางการ
            </h1>
            <p className="text-sm sm:text-base text-[#86868B] leading-relaxed mb-4">
              นำเสนอเนื้อหาและภาพสไลด์ครบทั้ง 27 แผ่นตามลำดับ จากเอกสารและสื่อนำเสนอ{' '}
              <code className="text-emerald-300 font-mono text-xs bg-white/5 px-2 py-0.5 border border-white/10">
                Ref/Hongson THE ONE SLIDE
              </code>{' '}
              ของโรงเรียนห้องสอนศึกษา ในพระอุปถัมภ์ฯ
            </p>

            <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-white/50">
              <span className="bg-white/5 px-2.5 py-1 border border-white/10">
                27 SLIDES TOTAL
              </span>
              <span className="bg-white/5 px-2.5 py-1 border border-white/10">
                1920 × 1080 MASTER WEBP
              </span>
              <span className="bg-white/5 px-2.5 py-1 border border-white/10">
                INTERACTIVE 3D GIBBAL RIG
              </span>
            </div>
          </div>

          {/* Sequential 27 Slides */}
          <div className="space-y-6">
            {DECK_SLIDES.map((slide, index) => (
              <SlideCard
                key={slide.slideNumber}
                slide={slide}
                index={index}
                isActive={index === activeSlideIndex}
                onOpenLightbox={(idx) => setLightboxIndex(idx)}
              />
            ))}
          </div>

          {/* Closing Summary Footer */}
          <footer className="mt-16 pt-10 border-t border-white/15 text-center font-mono text-xs text-white/40 space-y-3 pb-20">
            <p className="text-white/70">
              โรงเรียนห้องสอนศึกษา ในพระอุปถัมภ์ฯ จังหวัดแม่ฮ่องสอน
            </p>
            <p>
              แหล่งข้อมูล: Ref/Hongson THE ONE SLIDE (1.jpg – 27.jpg) · สงวนลิขสิทธิ์
            </p>
            <button
              onClick={() => goToSlide(0)}
              className="mt-4 inline-flex items-center space-x-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <ChevronUp className="w-4 h-4" />
              <span>กลับสู่สไลด์แรก (SLIDE 01)</span>
            </button>
          </footer>
        </main>
      </div>

      {/* Floating Presentation Quick Jumper (Mobile & Desktop) */}
      <div className="fixed bottom-5 right-5 z-30 flex items-center space-x-2 bg-[#0A0A0D]/90 backdrop-blur-md border border-white/15 p-1.5 shadow-2xl">
        <button
          onClick={prevSlide}
          disabled={activeSlideIndex === 0}
          className="p-2 text-white/70 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
          title="สไลด์ก่อนหน้า (Arrow Left / Up)"
        >
          <ChevronUp className="w-4 h-4 text-emerald-400" />
        </button>
        <span className="font-mono text-xs text-white/80 px-2">
          {String(activeSlideIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
        </span>
        <button
          onClick={nextSlide}
          disabled={activeSlideIndex === totalSlides - 1}
          className="p-2 text-white/70 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
          title="สไลด์ถัดไป (Arrow Right / Down)"
        >
          <ChevronDown className="w-4 h-4 text-emerald-400" />
        </button>
      </div>

      {/* Fullscreen High-Resolution Slide Lightbox Modal */}
      <SlideLightbox
        slides={DECK_SLIDES}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={(idx) => setLightboxIndex(idx)}
      />

      {/* Slide Thumbnail Index / Scrubber Modal */}
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
