import React from 'react';
import { METAVERSE_STATS } from '../content/siteData';

interface Chapter10Props {
  openEvidenceDrawer: () => void;
}

export const Chapter10Evidence: React.FC<Chapter10Props> = ({ openEvidenceDrawer }) => {
  return (
    <section
      id="evidence"
      data-chapter-index="10"
      className="chapter-section min-h-screen relative flex items-center justify-center px-4 sm:px-8 py-32"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-3xl mb-12">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-silver-muted mb-4">
            SECTION 10 // VERIFIED EVIDENCE & PROVENANCE
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-[-0.035em] leading-[1.12] mb-6">
            ตัวเลขที่มีความหมาย <br />
            <span className="text-silver">ต้องอยู่ในบริบทที่ถูกต้อง</span>
          </h2>
          <p className="text-base sm:text-lg text-silver font-light leading-relaxed">
            มาตรฐานความโปร่งใสทางวิชาการ: ทุกตัวเลขความสำเร็จถูกระบุขอบเขตและที่มาอย่างชัดเจน โดยไม่มีการปะปนเป้าหมายตามแผนเข้ากับผลลัพธ์ที่วัดผลจริง
          </p>
        </div>

        {/* Mandatory Scope Callout */}
        <div className="mb-10 p-5 precision-surface border-l-2 border-l-amber-400">
          <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-amber-300 font-semibold mb-1">
            CRITICAL PROVENANCE SCOPE
          </div>
          <p className="text-xs sm:text-sm text-silver font-light leading-relaxed">
            ผลการประเมินคะแนนเฉลี่ย 12.85 → 16.37 และความพึงพอใจ 92.4% ด้านล่างนี้ เป็นผลรายงานเฉพาะโครงการ <strong className="text-white font-medium">HONGSON METAVERSE MODEL</strong> (กลุ่มตัวอย่าง 485 คน) ไม่ใช่ผลรวมของระบบ Super App ทั้งหมด
          </p>
        </div>

        {/* 4 Precision Spec Metric Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {METAVERSE_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="precision-surface p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] text-silver-muted uppercase tracking-[0.16em] block mb-2">
                  {stat.status}
                </span>
                <div className="text-3xl sm:text-4xl font-bold text-white font-mono tracking-tight mb-3">
                  {stat.value}
                </div>
                <h4 className="text-xs font-semibold text-silver mb-2">
                  {stat.label}
                </h4>
                {stat.caveat && (
                  <p className="text-[11px] text-silver-muted font-light leading-relaxed">
                    {stat.caveat}
                  </p>
                )}
              </div>

              <div className="pt-4 mt-6 hairline-t font-mono text-[10px] text-silver-muted">
                SOURCE: {stat.source}
              </div>
            </div>
          ))}
        </div>

        {/* Open Drawer Button */}
        <div className="p-6 precision-surface flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-semibold text-white">ต้องการตรวจสอบแหล่งอ้างอิงเอกสารรายงานฉบับสมบูรณ์?</h4>
            <p className="text-xs text-silver font-light mt-0.5">
              เปิดคลังหลักฐานเพื่อดูเลขหน้าและสไลด์อ้างอิงของทุกหัวข้อในรายงาน 2569
            </p>
          </div>
          <button
            onClick={openEvidenceDrawer}
            className="precision-tag px-5 py-2.5 bg-white/[0.08] border border-white/[0.22] text-white hover:bg-white/[0.14] transition-colors rounded-[2px]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-signal-emerald" />
            <span>OPEN EVIDENCE ARCHIVE</span>
          </button>
        </div>
      </div>
    </section>
  );
};
