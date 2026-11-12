import React from 'react';
import { ExternalLink, FileCheck2, ArrowUp, Sparkles, Building2, Layers } from 'lucide-react';
import { SCHOOL_INFO } from '../content/siteData';

interface Chapter11Props {
  openEvidenceDrawer: () => void;
  onReturnToTop: () => void;
}

export const Chapter11Future: React.FC<Chapter11Props> = ({
  openEvidenceDrawer,
  onReturnToTop,
}) => {
  const basePath = import.meta.env.BASE_URL || './';

  return (
    <section
      id="future"
      data-chapter-index="11"
      className="chapter-section min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24"
    >
      <div className="max-w-5xl mx-auto w-full text-center relative z-10 flex flex-col items-center">
        <div className="cyber-tag mb-6 text-xs shadow-[0_0_15px_rgba(0,214,163,0.2)]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>11 // THE NEXT HORIZON</span>
        </div>

        {/* Emblems */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <img
            src={`${basePath}hongson-assets/logos/hongson-the-one.webp`}
            alt="HONGSON THE ONE Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-[0_0_16px_rgba(0,214,163,0.4)]"
          />
          <div className="h-8 w-px bg-stroke/40" />
          <img
            src={`${basePath}hongson-assets/logos/hongson-tfolio.webp`}
            alt="HONGSON T-Folio Logo"
            className="w-24 sm:w-32 h-auto object-contain drop-shadow-[0_0_16px_rgba(82,207,229,0.4)]"
          />
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-headline tracking-tight leading-tight mb-6">
          ไม่ใช่เพียงการนำเทคโนโลยีมาใช้ <br />
          <span className="text-gradient-emerald">แต่คือการสร้างอนาคตการเรียนรู้ร่วมกัน</span>
        </h2>

        <p className="text-base sm:text-xl text-secondary max-w-2xl font-normal leading-relaxed mb-10">
          จากห้องเรียนบนขุนเขา สู่พื้นที่นวัตกรรมดิจิทัลระดับประเทศ ขับเคลื่อนโรงเรียนห้องสอนศึกษาอย่างต่อเนื่องด้วยพลังของครูและนักเรียนทุกคน
        </p>

        {/* Planned HIS Sandbox Callout */}
        <div className="max-w-2xl w-full cyber-glass-card rounded-2xl p-6 mb-10 text-left border border-signal-cyan/30">
          <div className="flex items-center gap-2.5 text-signal-cyan font-bold text-xs uppercase font-mono mb-2">
            <Building2 className="w-4 h-4" />
            <span>HONGSON INNOVATION SPACE (HIS) · PLANNED SANDBOX</span>
          </div>
          <p className="text-xs sm:text-sm text-secondary leading-relaxed mb-4">
            แผนการยกระดับพื้นที่สร้างสรรค์นวัตกรรม ประกอบด้วย <strong className="text-headline">Co-working Zone</strong>, <strong className="text-headline">Presentation Zone</strong> และ <strong className="text-headline">Recording Corner</strong> เพื่อบ่มเพาะครูแกนนำ 20 ท่าน และขยายผลสู่นักเรียนทั้งโรงเรียน
          </p>
          <div className="text-[11px] font-mono text-secondary/60">
            สถานะ: แผนการดำเนินงานตามกรอบงบประมาณ 2569 (รายงาน หน้า 4, 6, 10)
          </div>
        </div>

        {/* Action Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href={SCHOOL_INFO.superAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-signal-emerald text-void font-bold text-sm hover:bg-signal-emerald/90 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,214,163,0.4)] hover:scale-105"
          >
            <span>เข้าสู่ระบบ HONGSON THE ONE</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            onClick={openEvidenceDrawer}
            className="px-6 py-3.5 rounded-xl bg-elevated/80 border border-stroke/50 text-headline hover:border-signal-cyan/50 font-semibold text-sm transition-all flex items-center gap-2"
          >
            <FileCheck2 className="w-4 h-4 text-signal-cyan" />
            <span>ดูหลักฐานและเอกสารอ้างอิง</span>
          </button>

          <button
            onClick={onReturnToTop}
            className="p-3.5 rounded-xl bg-elevated/50 border border-stroke/40 text-secondary hover:text-headline transition-all"
            title="กลับสู่ด้านบนสุด"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        {/* Footer info */}
        <div className="pt-8 border-t border-stroke/30 w-full flex flex-col sm:flex-row items-center justify-between text-xs text-secondary/70 gap-2">
          <span>{SCHOOL_INFO.nameTh} · {SCHOOL_INFO.provinceTh}</span>
          <span className="font-mono">HONGSON THE ONE EXHIBITION · GITHUB PAGES</span>
        </div>
      </div>
    </section>
  );
};

