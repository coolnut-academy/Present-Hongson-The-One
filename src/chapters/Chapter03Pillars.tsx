import React from 'react';
import { PILLARS } from '../content/siteData';

export const Chapter03Pillars: React.FC = () => {
  return (
    <section
      id="pillars"
      data-chapter-index="3"
      className="chapter-section min-h-screen relative flex items-center justify-center px-4 sm:px-8 py-32"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-silver-muted mb-4">
            SECTION 03 // CORE ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-[-0.035em] leading-[1.12] mb-6">
            4 เสาหลักขับเคลื่อนการศึกษา <br />
            <span className="text-silver">WORK · LEARN · CREATE · SHARE</span>
          </h2>
          <p className="text-base sm:text-lg text-silver font-light leading-relaxed">
            กรอบการทำงานเชิงระบบเพื่อการพัฒนาอย่างยั่งยืน เปลี่ยนงานประจำสู่นวัตกรรม และขยายผลสู่ชุมชนการศึกษา
          </p>
        </div>

        {/* 4 Pillars Machined Grid with Asymmetric Hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PILLARS.map((pillar, idx) => (
            <div
              key={pillar.key}
              className="precision-surface p-7 sm:p-9 hover:border-white/[0.22] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 hairline-b mb-6 font-mono text-[11px] tracking-[0.16em]">
                  <span className="text-signal-emerald">PILLAR // 0{idx + 1}</span>
                  <span className="text-silver-muted uppercase">{pillar.en}</span>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-[-0.02em] mb-4">
                  {pillar.key} — {pillar.th}
                </h3>

                <p className="text-sm text-silver font-light leading-relaxed mb-8">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 hairline-t flex items-center justify-between font-mono text-[11px] text-silver-muted">
                <span>FRAMEWORK REFERENCE</span>
                <span className="text-white">{pillar.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
