import React, { useState } from 'react';
import { TEACHER_STEPS } from '../content/siteData';

export const Chapter07Tour: React.FC = () => {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const basePath = import.meta.env.BASE_URL || './';

  const screenshots = [
    {
      id: 'dashboard',
      title: 'แดชบอร์ดภาพรวมและเมนูหลัก',
      en: 'DASHBOARD & STATS OVERVIEW',
      file: 'hongson-assets/screenshots/tfolio-dashboard.webp',
      slide: 'SLIDE 13',
      desc: 'หน้าแรกของครู แสดงสถิติแฟ้มสะสมงาน สถานะการส่ง และการแจ้งเตือนงานที่ต้องดำเนินการ',
    },
    {
      id: 'portfolio',
      title: 'คลังผลงานและการจัดหมวดหมู่',
      en: 'PORTFOLIO DIRECTORY & REPOSITORY',
      file: 'hongson-assets/screenshots/tfolio-portfolio.webp',
      slide: 'SLIDE 14',
      desc: 'แสดงรายการผลงานทั้งหมด จำแนกตามปีการศึกษา กลุ่มสาระ และระดับตัวชี้วัด',
    },
    {
      id: 'evidence',
      title: 'การเพิ่มผลงานและอัปโหลดหลักฐาน',
      en: 'NEW ENTRY & EVIDENCE UPLOAD',
      file: 'hongson-assets/screenshots/tfolio-add-evidence.webp',
      slide: 'SLIDE 15',
      desc: 'ฟอร์มบันทึกรายละเอียดผลงาน แนบไฟล์ภาพกิจกรรม เอกสารอ้างอิง และลิงก์ดิจิทัล',
    },
    {
      id: 'report',
      title: 'การสรุปรายงานและพิมพ์เอกสาร PDF',
      en: 'REPORT COMPILATION & PDF EXPORT',
      file: 'hongson-assets/screenshots/tfolio-report.webp',
      slide: 'SLIDE 16',
      desc: 'ระบบประมวลผลจัดรูปเล่มรายงานมาตรฐานโดยอัตโนมัติ พร้อมส่งออกเป็น PDF ทันที',
    },
  ];

  const currentScreen = screenshots[activeScreenIndex];

  return (
    <section
      id="tour"
      data-chapter-index="7"
      className="chapter-section min-h-screen relative flex items-center justify-center px-4 sm:px-8 py-32"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-silver-muted mb-4">
            SECTION 07 // PRODUCT WORKFLOW
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-[-0.035em] leading-[1.12] mb-6">
            เจาะลึกขั้นตอนการทำงานจริง <br />
            <span className="text-silver">6 สเต็ปของครูผู้ใช้งาน</span>
          </h2>
          <p className="text-base sm:text-lg text-silver font-light leading-relaxed">
            กระบวนการใช้งานถูกออกแบบให้กระชับและเป็นมิตร เพื่อให้ครูทุกคนสามารถจัดทำและรวบรวมหลักฐานได้ด้วยตนเอง
          </p>
        </div>

        {/* 6 Steps Linear Architectural Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {TEACHER_STEPS.map((s) => (
            <div
              key={s.step}
              className="precision-surface p-4 flex flex-col justify-between"
            >
              <div className="font-mono text-[10px] text-signal-emerald tracking-[0.16em] uppercase mb-1">
                STEP {s.step}
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white mb-1">{s.title}</h4>
                <p className="text-[11px] text-silver font-light leading-tight">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Precision Screenshot Inspector */}
        <div className="precision-surface p-6 sm:p-8">
          {/* Selector Tabs */}
          <div className="flex flex-wrap gap-2 pb-6 hairline-b">
            {screenshots.map((screen, idx) => (
              <button
                key={screen.id}
                onClick={() => setActiveScreenIndex(idx)}
                className={`font-mono text-[11px] uppercase tracking-[0.14em] px-4 py-2 rounded-[2px] transition-colors border ${
                  activeScreenIndex === idx
                    ? 'bg-white/[0.08] border-white/[0.25] text-white'
                    : 'bg-surface border-white/[0.08] text-silver hover:text-white'
                }`}
              >
                <span>{screen.en}</span>
              </button>
            ))}
          </div>

          {/* Screenshot Display Frame */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 overflow-hidden bg-black/70 border border-white/[0.06]">
              <img
                src={`${basePath}${currentScreen.file}`}
                alt={currentScreen.title}
                className="w-full h-auto object-cover max-h-[500px]"
              />
            </div>

            <div className="lg:col-span-4 space-y-4">
              <span className="font-mono text-[11px] text-signal-emerald tracking-[0.16em] uppercase block">
                {currentScreen.slide}
              </span>
              <h3 className="text-xl font-bold text-white tracking-[-0.01em]">{currentScreen.title}</h3>
              <p className="text-sm text-silver font-light leading-relaxed">
                {currentScreen.desc}
              </p>
              <div className="p-3 bg-surface border border-white/[0.08] font-mono text-[11px] text-silver-muted">
                SOURCE: TFOLIO-SLIDES (วาระประชุม)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
