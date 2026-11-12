import React from 'react';
import { Award, FileText, CheckCircle, Smartphone } from 'lucide-react';

export const Chapter05Tfolio: React.FC = () => {
  const basePath = import.meta.env.BASE_URL || './';

  return (
    <section
      id="tfolio"
      data-chapter-index="5"
      className="chapter-section min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Authentic Logo Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center">
            <div className="relative group mb-6">
              <div className="absolute -inset-6 bg-signal-emerald/20 rounded-full blur-3xl group-hover:bg-signal-emerald/30 transition-all opacity-70" />
              <img
                src={`${basePath}hongson-assets/logos/hongson-tfolio.webp`}
                alt="HONGSON T-Folio Official Logo"
                className="w-48 sm:w-64 h-auto object-contain relative drop-shadow-[0_0_24px_rgba(0,214,163,0.35)] transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="font-mono text-xs text-signal-emerald uppercase tracking-widest font-semibold">
              FLAGSHIP WEB APPLICATION
            </div>
            <div className="text-xs text-secondary/70 font-mono mt-1">
              SLIDE 01 · 04 // REPORT P.22
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-7">
            <div className="cyber-tag mb-4 text-xs">
              <span>05 // FLAGSHIP INNOVATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-headline tracking-tight leading-tight mb-4">
              HONGSON T-Folio <br />
              <span className="text-gradient-emerald">จากหลักฐาน สู่ข้อมูลที่ใช้งานได้จริง</span>
            </h2>
            <p className="text-base sm:text-lg text-secondary leading-relaxed mb-6">
              เว็บแอปพลิเคชันชูโรงในระบบนิเวศ จัดการแฟ้มสะสมงานและประเมินผลการปฏิบัติงานของครูยุคใหม่ เปลี่ยนกองเอกสารกระดาษที่ค้นหายาก สู่คลังหลักฐานดิจิทัลที่พร้อมต่อยอด
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-elevated/70 border border-stroke/40 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-signal-emerald/10 text-signal-emerald">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-headline">Paperless & Dynamic</h4>
                  <p className="text-xs text-secondary">กรอกแบบฟอร์มยืดหยุ่น แนบไฟล์ภาพ/เอกสาร และสร้างเล่มรายงานอัตโนมัติ</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-elevated/70 border border-stroke/40 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-signal-cyan/10 text-signal-cyan">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-headline">KPI & Performance</h4>
                  <p className="text-xs text-secondary">เชื่อมต่อหมวดหมู่ตัวชี้วัดทางการศึกษาและเตรียมความพร้อมสำหรับการประเมิน</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-elevated/70 border border-stroke/40 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-signal-violet/10 text-signal-violet">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-headline">Multi-Tier Approval</h4>
                  <p className="text-xs text-secondary">สายงานการตรวจทานและรับรองความถูกต้องโดยผู้บริหารอย่างเป็นระบบ</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-elevated/70 border border-stroke/40 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-signal-emerald/10 text-signal-emerald">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-headline">Responsive & PWA</h4>
                  <p className="text-xs text-secondary">รองรับการใช้งานทุกอุปกรณ์ ทั้งคอมพิวเตอร์ แท็บเล็ต และสมาร์ตโฟน</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

