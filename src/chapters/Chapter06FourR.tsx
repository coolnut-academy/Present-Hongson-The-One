import React from 'react';
import { WORKFLOW_4R } from '../content/siteData';

export const Chapter06FourR: React.FC = () => {
  const basePath = import.meta.env.BASE_URL || './';

  return (
    <section
      id="four-r"
      data-chapter-index="6"
      className="chapter-section min-h-screen relative flex items-center justify-center px-4 sm:px-8 py-32"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-silver-muted mb-4">
            SECTION 06 // OPERATIONAL METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-[-0.035em] leading-[1.12] mb-6">
            วงจร 4R จัดการข้อมูล <br />
            <span className="text-silver">RECORD · REVIEW · RETRIEVE · REPORT</span>
          </h2>
          <p className="text-base sm:text-lg text-silver font-light leading-relaxed">
            จำลองสถาปัตยกรรมข้อมูล 4 ชั้นตามแกนความลึก ทุกหลักฐานเชิงประจักษ์จะไหลเวียนผ่าน 4 ขั้นตอนมาตรฐานก่อนประมวลผลสรุป
          </p>
        </div>

        {/* 4R Precision Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {WORKFLOW_4R.map((item, idx) => (
            <div
              key={item.en}
              className="precision-surface p-6 sm:p-7 hover:border-white/[0.22] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 hairline-b mb-5 font-mono text-[11px] tracking-[0.16em]">
                  <span className="text-signal-emerald">STAGE 0{idx + 1}</span>
                  <span className="text-silver-muted">Z-DEPTH</span>
                </div>

                <div className="font-mono text-xs uppercase tracking-[0.18em] text-silver-muted mb-1">
                  {item.en}
                </div>
                <h3 className="text-xl font-bold text-white tracking-[-0.01em] mb-3">
                  {item.th}
                </h3>
                <p className="text-xs sm:text-sm text-silver font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 hairline-t font-mono text-[11px] text-silver-muted">
                LAYER STATUS: ACTIVE
              </div>
            </div>
          ))}
        </div>

        {/* Technical Infographic Blueprint from Ref */}
        <div className="precision-surface p-6 sm:p-8">
          <div className="flex items-center justify-between pb-4 hairline-b mb-6 font-mono text-[11px] tracking-[0.14em]">
            <span className="text-white uppercase">OFFICIAL SYSTEM SPECIFICATION BLUEPRINT // T-FOLIO</span>
            <span className="text-silver-muted">EXHIBIT ARTIFACT 04</span>
          </div>
          <div className="overflow-hidden bg-black/60 border border-white/[0.06]">
            <img
              src={`${basePath}hongson-assets/exhibit/infographic-04-tfolio-mvp.webp`}
              alt="HONGSON T-Folio MVP Blueprint"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
