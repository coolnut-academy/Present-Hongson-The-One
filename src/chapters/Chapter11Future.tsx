import React from 'react';
import { ExternalLink, ArrowUp } from 'lucide-react';
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
      className="chapter-section min-h-screen relative flex items-center justify-center px-4 sm:px-8 py-32"
    >
      <div className="max-w-6xl mx-auto w-full text-center relative z-10 flex flex-col items-center">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-silver-muted mb-6">
          SECTION 11 // THE NEXT HORIZON
        </div>

        {/* Emblems */}
        <div className="flex items-center justify-center gap-8 mb-10">
          <img
            src={`${basePath}hongson-assets/logos/hongson-the-one.webp`}
            alt="HONGSON THE ONE"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
          />
          <div className="h-8 w-px bg-white/[0.1]" />
          <img
            src={`${basePath}hongson-assets/logos/hongson-tfolio.webp`}
            alt="HONGSON T-Folio"
            className="w-24 sm:w-32 h-auto object-contain"
          />
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-[-0.035em] leading-[1.12] mb-6">
          ไม่ใช่เพียงการนำเทคโนโลยีมาใช้ <br />
          <span className="text-silver">แต่คือการสร้างอนาคตการเรียนรู้ร่วมกัน</span>
        </h2>

        <p className="text-base sm:text-xl text-silver max-w-2xl font-light leading-relaxed mb-12">
          จากห้องเรียนบนขุนเขา สู่พื้นที่นวัตกรรมดิจิทัลระดับประเทศ ขับเคลื่อนโรงเรียนห้องสอนศึกษาอย่างต่อเนื่องด้วยพลังของครูและนักเรียนทุกคน
        </p>

        {/* Real Roadmap Blueprint from Ref */}
        <div className="w-full precision-surface p-6 sm:p-8 mb-12 text-left">
          <div className="flex items-center justify-between pb-4 hairline-b mb-6 font-mono text-[11px] tracking-[0.14em]">
            <span className="text-white uppercase">5-PHASE ECOSYSTEM DEVELOPMENT ROADMAP</span>
            <span className="text-silver-muted">REF ARTIFACT 06</span>
          </div>
          <div className="overflow-hidden bg-black/60 border border-white/[0.06] mb-6">
            <img
              src={`${basePath}hongson-assets/exhibit/infographic-06-roadmap.webp`}
              alt="แผนพัฒนาต่อยอด HONGSON The One สู่ Digital School Ecosystem"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-surface border border-white/[0.06]">
              <span className="font-mono text-[10px] text-signal-emerald tracking-[0.16em] uppercase block mb-1">
                PHASE 04 // IN-HOUSE EXPANSION
              </span>
              <h5 className="text-sm font-semibold text-white mb-1">แอปพลิเคชันที่กำลังพัฒนา</h5>
              <p className="text-xs text-silver font-light leading-relaxed">
                ต่อยอดจาก T-Folio สู่ T-DigitalPlan, Project Manager, และ Bookmark PRO
              </p>
            </div>

            <div className="p-4 bg-surface border border-white/[0.06]">
              <span className="font-mono text-[10px] text-signal-cyan tracking-[0.16em] uppercase block mb-1">
                PHASE 05 // DIGITAL SCHOOL ECOSYSTEM
              </span>
              <h5 className="text-sm font-semibold text-white mb-1">ต้นแบบสถานศึกษาพื้นที่สูง</h5>
              <p className="text-xs text-silver font-light leading-relaxed">
                ระบบกลางที่พัฒนาได้ต่อเนื่องและเป็นโมเดลต้นแบบให้โรงเรียนเครือข่าย
              </p>
            </div>
          </div>
        </div>

        {/* Action Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          <a
            href={SCHOOL_INFO.superAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-black font-semibold text-xs tracking-[0.1em] uppercase hover:bg-white/90 transition-colors flex items-center gap-2 rounded-[2px]"
          >
            <span>ENTER HONGSON THE ONE</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={openEvidenceDrawer}
            className="px-6 py-3 bg-surface border border-white/[0.12] text-white hover:border-white/[0.25] font-semibold text-xs tracking-[0.1em] uppercase transition-colors flex items-center gap-2 rounded-[2px]"
          >
            <span>EVIDENCE ARCHIVE</span>
          </button>

          <button
            onClick={onReturnToTop}
            className="p-3 bg-surface border border-white/[0.1] text-silver hover:text-white transition-colors rounded-[2px]"
            title="Return to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Minimalist Horology Footer */}
        <div className="pt-8 hairline-t w-full flex flex-col sm:flex-row items-center justify-between font-mono text-[11px] text-silver-muted gap-2">
          <span>{SCHOOL_INFO.nameTh} · {SCHOOL_INFO.provinceTh}</span>
          <span>SPEC: HONGSON THE ONE EXHIBITION // GITHUB PAGES</span>
        </div>
      </div>
    </section>
  );
};
