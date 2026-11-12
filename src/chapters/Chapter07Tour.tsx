import React, { useState } from 'react';
import {
  LogIn,
  FolderPlus,
  UploadCloud,
  Filter,
  FileText,
  Download,
  Eye,
  CheckCircle2
} from 'lucide-react';
import { TEACHER_STEPS } from '../content/siteData';

export const Chapter07Tour: React.FC = () => {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const basePath = import.meta.env.BASE_URL || './';

  const screenshots = [
    {
      id: 'dashboard',
      title: 'แดชบอร์ดภาพรวมและเมนูหลัก',
      en: 'Dashboard & Navigation',
      file: 'hongson-assets/screenshots/tfolio-dashboard.webp',
      slide: 'SLIDE 13',
      desc: 'หน้าแรกของครู แสดงสถิติแฟ้มสะสมงาน สถานะการส่ง และการแจ้งเตือนงานที่ต้องดำเนินการ',
    },
    {
      id: 'portfolio',
      title: 'คลังผลงานและการจัดหมวดหมู่',
      en: 'Portfolio Overview & Categorization',
      file: 'hongson-assets/screenshots/tfolio-portfolio.webp',
      slide: 'SLIDE 14',
      desc: 'แสดงรายการผลงานทั้งหมด จำแนกตามปีการศึกษา กลุ่มสาระ และระดับตัวชี้วัด',
    },
    {
      id: 'evidence',
      title: 'การเพิ่มผลงานและอัปโหลดหลักฐาน',
      en: 'New Portfolio & Evidence Upload',
      file: 'hongson-assets/screenshots/tfolio-add-evidence.webp',
      slide: 'SLIDE 15',
      desc: 'ฟอร์มบันทึกรายละเอียดผลงาน แนบไฟล์ภาพกิจกรรม เอกสารอ้างอิง และลิงก์ดิจิทัล',
    },
    {
      id: 'report',
      title: 'การสรุปรายงานและพิมพ์เอกสาร PDF',
      en: 'Report Preview & PDF Export',
      file: 'hongson-assets/screenshots/tfolio-report.webp',
      slide: 'SLIDE 16',
      desc: 'ระบบประมวลผลจัดรูปเล่มรายงานมาตรฐานโดยอัตโนมัติ พร้อมส่งออกเป็น PDF ทันที',
    },
  ];

  const getStepIcon = (icon: string) => {
    switch (icon) {
      case 'LogIn': return LogIn;
      case 'FolderPlus': return FolderPlus;
      case 'UploadCloud': return UploadCloud;
      case 'Filter': return Filter;
      case 'FileText': return FileText;
      case 'Download': return Download;
      default: return CheckCircle2;
    }
  };

  const currentScreen = screenshots[activeScreenIndex];

  return (
    <section
      id="tour"
      data-chapter-index="7"
      className="chapter-section min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="cyber-tag mb-4 text-xs">
            <span>07 // USER EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-headline tracking-tight leading-tight mb-4">
            เจาะลึกขั้นตอนการทำงานจริง <br />
            <span className="text-gradient-cyan">6 สเต็ปของครูผู้ใช้งาน</span>
          </h2>
          <p className="text-base sm:text-lg text-secondary leading-relaxed">
            กระบวนการใช้งานถูกออกแบบให้กระชับและเป็นมิตรกับผู้ใช้ เพื่อให้ครูทุกคนสามารถจัดทำและรวบรวมหลักฐานได้ด้วยตนเอง
          </p>
        </div>

        {/* 6 Steps Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {TEACHER_STEPS.map((s, idx) => {
            const Icon = getStepIcon(s.icon);
            return (
              <div
                key={s.step}
                className="p-3.5 rounded-xl bg-elevated/70 border border-stroke/30 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-signal-cyan">
                    STEP {s.step}
                  </span>
                  <Icon className="w-4 h-4 text-secondary/80" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-headline">{s.title}</h4>
                  <p className="text-[11px] text-secondary/80 mt-1 leading-tight line-clamp-2">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real Screenshot Preview & Tab Selector */}
        <div className="cyber-glass-card rounded-2xl p-6 sm:p-8 border border-stroke/50 shadow-2xl">
          {/* Selector Tabs */}
          <div className="flex flex-wrap gap-2 pb-6 border-b border-stroke/30">
            {screenshots.map((screen, idx) => (
              <button
                key={screen.id}
                onClick={() => setActiveScreenIndex(idx)}
                className={`px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
                  activeScreenIndex === idx
                    ? 'bg-signal-emerald/20 text-signal-emerald border border-signal-emerald/40 shadow-[0_0_12px_rgba(0,214,163,0.2)]'
                    : 'bg-elevated/60 text-secondary hover:text-headline border border-stroke/20'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{screen.title}</span>
                <span className="text-[10px] font-mono text-secondary/60">({screen.slide})</span>
              </button>
            ))}
          </div>

          {/* Screenshot Display Frame */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 relative group">
              <div className="relative rounded-xl overflow-hidden border border-stroke/50 shadow-xl bg-void">
                <img
                  src={`${basePath}${currentScreen.file}`}
                  alt={currentScreen.title}
                  className="w-full h-auto object-cover max-h-[500px]"
                />
              </div>
              <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-void/90 border border-signal-emerald/30 text-[10px] font-mono text-signal-emerald">
                VERIFIED AUTHENTIC INTERFACE · PRIVACY REDACTED
              </div>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-mono text-signal-emerald uppercase tracking-wider block">
                {currentScreen.en}
              </span>
              <h3 className="text-xl font-bold text-headline">{currentScreen.title}</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                {currentScreen.desc}
              </p>
              <div className="p-3 rounded-xl bg-void/70 border border-stroke/30 text-xs text-secondary/80 font-mono">
                SOURCE: TFOLIO-SLIDES // {currentScreen.slide}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

