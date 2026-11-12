import React from 'react';
import { AlertTriangle, FileCheck2, BarChart2, ShieldAlert } from 'lucide-react';
import { METAVERSE_STATS, SCHOOL_INFO } from '../content/siteData';

interface Chapter10Props {
  openEvidenceDrawer: () => void;
}

export const Chapter10Evidence: React.FC<Chapter10Props> = ({ openEvidenceDrawer }) => {
  return (
    <section
      id="evidence"
      data-chapter-index="10"
      className="chapter-section min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="max-w-3xl mb-8">
          <div className="cyber-tag mb-4 text-xs">
            <span>10 // VERIFIED EVIDENCE & PROVENANCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-headline tracking-tight leading-tight mb-4">
            ตัวเลขที่มีความหมาย <br />
            <span className="text-gradient-emerald">ต้องอยู่ในบริบทที่ถูกต้อง</span>
          </h2>
          <p className="text-base sm:text-lg text-secondary leading-relaxed">
            มาตรฐานความโปร่งใสทางวิชาการ: ทุกตัวเลขความสำเร็จถูกระบุขอบเขตและที่มาอย่างชัดเจน โดยไม่มีการปะปนเป้าหมายตามแผนเข้ากับผลลัพธ์ที่วัดผลจริง
          </p>
        </div>

        {/* Mandatory Scope Banner Alert */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3.5 shadow-lg">
          <ShieldAlert className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-secondary leading-relaxed">
            <strong className="text-amber-300 font-semibold block mb-0.5">
              ข้อกำหนดขอบเขตข้อมูล (Critical Provenance Scope):
            </strong>
            ผลการประเมินคะแนนเฉลี่ย 12.85 → 16.37 และความพึงพอใจ 92.4% ด้านล่างนี้ เป็นผลรายงานเฉพาะโครงการ <strong className="text-headline">HONGSON METAVERSE MODEL</strong> (กลุ่มตัวอย่าง 485 คน) ไม่ใช่ผลรวมของระบบ Super App ทั้งหมด
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {METAVERSE_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="cyber-glass-card rounded-2xl p-6 border border-stroke/40 hover:border-signal-emerald/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-signal-cyan uppercase tracking-wider block mb-2">
                  {stat.status}
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-headline font-mono mb-2">
                  {stat.value}
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-headline/90 mb-2">
                  {stat.label}
                </h4>
                {stat.caveat && (
                  <p className="text-[11px] text-secondary/80 leading-relaxed">
                    {stat.caveat}
                  </p>
                )}
              </div>

              <div className="pt-3 mt-4 border-t border-stroke/20 text-[10px] text-signal-emerald font-mono">
                {stat.source}
              </div>
            </div>
          ))}
        </div>

        {/* Evidence Drawer Access Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl cyber-glass border border-stroke/40 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-signal-emerald/10 text-signal-emerald">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-headline">ต้องการตรวจสอบที่มาของเอกสารต้นฉบับ?</h4>
              <p className="text-xs text-secondary">
                เปิดคลังหลักฐานเพื่อดูเลขหน้าและสไลด์อ้างอิงของทุกหัวข้อในรายงาน 2569
              </p>
            </div>
          </div>

          <button
            onClick={openEvidenceDrawer}
            className="px-5 py-2.5 rounded-xl bg-signal-emerald/20 border border-signal-emerald/40 text-signal-emerald hover:bg-signal-emerald/30 font-semibold text-xs transition-all flex items-center gap-2 flex-shrink-0 shadow-[0_0_15px_rgba(0,214,163,0.2)]"
          >
            <FileCheck2 className="w-4 h-4" />
            <span>เปิดคลังหลักฐาน (Evidence Drawer)</span>
          </button>
        </div>
      </div>
    </section>
  );
};

