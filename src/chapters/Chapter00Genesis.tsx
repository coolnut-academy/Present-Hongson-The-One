import React from 'react';
import { Mouse, Sparkles, ChevronDown } from 'lucide-react';
import { SCHOOL_INFO } from '../content/siteData';

interface ChapterProps {
  onExploreClick?: () => void;
}

export const Chapter00Genesis: React.FC<ChapterProps> = ({ onExploreClick }) => {
  const basePath = import.meta.env.BASE_URL || './';

  return (
    <section
      id="genesis"
      data-chapter-index="0"
      className="chapter-section min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Subtle Pill Tag */}
        <div className="cyber-tag mb-6 text-xs sm:text-sm py-1.5 px-4 shadow-[0_0_15px_rgba(0,214,163,0.2)]">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>HONGSON EDUCATION ECOSYSTEM</span>
        </div>

        {/* Primary Authentic Brand Logo */}
        <div className="mb-8 relative group">
          <div className="absolute -inset-4 bg-signal-emerald/20 rounded-full blur-2xl group-hover:bg-signal-emerald/30 transition-all opacity-70" />
          <img
            src={`${basePath}hongson-assets/logos/hongson-the-one.webp`}
            alt="HONGSON THE ONE Authentic Logo"
            className="w-32 h-32 sm:w-44 sm:h-44 object-contain relative drop-shadow-[0_0_24px_rgba(0,214,163,0.4)] transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-headline tracking-tight leading-[1.2] mb-6">
          การศึกษาแห่งอนาคต <br className="hidden sm:inline" />
          <span className="text-gradient-emerald">เริ่มจากระบบที่เชื่อมถึงกัน</span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-secondary max-w-2xl font-normal leading-relaxed mb-4">
          <strong className="text-headline">HONGSON THE ONE</strong> — Super App & Local Digital Education Ecosystem เพื่อขับเคลื่อนคุณภาพการศึกษาอย่างยั่งยืน
        </p>

        <p className="text-xs sm:text-sm text-secondary/80 font-mono mb-10">
          {SCHOOL_INFO.nameTh} · {SCHOOL_INFO.provinceTh}
        </p>

        {/* Scroll Guidance Indicator */}
        <div className="flex flex-col items-center gap-2 text-xs text-secondary/80 font-mono">
          <span className="flex items-center gap-1.5">
            <Mouse className="w-4 h-4 text-signal-emerald animate-bounce" />
            เลื่อนเพื่อสำรวจ (Scroll to explore)
          </span>
          <ChevronDown className="w-4 h-4 text-signal-emerald/60 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

