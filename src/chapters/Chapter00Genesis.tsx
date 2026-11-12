import React from 'react';
import { ChevronDown } from 'lucide-react';
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
      className="chapter-section min-h-screen relative flex items-center justify-center px-4 sm:px-8 py-32"
    >
      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Precision Spec Label */}
        <div className="precision-tag mb-8 tracking-[0.2em] text-[11px] text-silver border border-white/[0.08] px-3.5 py-1.5 bg-surface/80 rounded-[2px]">
          <span className="w-1.5 h-1.5 rounded-full bg-signal-emerald" />
          <span>SPEC 00 // LOCAL DIGITAL EDUCATION ECOSYSTEM</span>
        </div>

        {/* Primary Authentic Brand Logo */}
        <div className="mb-10 relative">
          <img
            src={`${basePath}hongson-assets/logos/hongson-the-one.webp`}
            alt="HONGSON THE ONE"
            className="w-28 h-28 sm:w-36 sm:h-36 object-contain"
          />
        </div>

        {/* Display Typography */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-[-0.035em] leading-[1.08] mb-6 max-w-4xl">
          การศึกษาแห่งอนาคต <br />
          <span className="text-silver">เริ่มจากระบบที่เชื่อมถึงกัน</span>
        </h1>

        {/* Supporting Editorial Copy */}
        <p className="text-base sm:text-xl text-silver max-w-2xl font-light leading-relaxed mb-4">
          <strong className="text-white font-medium">HONGSON THE ONE</strong> — สถาปัตยกรรม Super App และระบบนิเวศดิจิทัลเพื่อการศึกษา เพื่อโรงเรียนคุณภาพในบริบทพื้นที่สูง
        </p>

        <p className="font-mono text-xs text-silver-muted tracking-[0.14em] uppercase mb-16">
          {SCHOOL_INFO.nameTh} · {SCHOOL_INFO.provinceTh}
        </p>

        {/* Minimalist Scroll Cue */}
        <div className="flex flex-col items-center gap-2 font-mono text-[11px] tracking-[0.18em] text-silver-muted uppercase">
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown className="w-4 h-4 text-silver-muted stroke-[1.5]" />
        </div>
      </div>
    </section>
  );
};
