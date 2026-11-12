import React from 'react';

export const Chapter05Tfolio: React.FC = () => {
  const basePath = import.meta.env.BASE_URL || './';

  return (
    <section
      id="tfolio"
      data-chapter-index="5"
      className="chapter-section min-h-screen relative flex items-center justify-center px-4 sm:px-8 py-32"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Authentic Brand Identity & Live Board Presentation Evidence */}
          <div className="lg:col-span-5 space-y-6">
            <div className="precision-surface p-8 text-center">
              <img
                src={`${basePath}hongson-assets/logos/hongson-tfolio.webp`}
                alt="HONGSON T-Folio"
                className="w-52 sm:w-60 h-auto object-contain mx-auto mb-6"
              />
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal-emerald font-semibold">
                FLAGSHIP WEB APPLICATION // MVP
              </div>
              <div className="font-mono text-[10px] text-silver-muted tracking-[0.14em] mt-1">
                DIGITAL PORTFOLIO & PERFORMANCE MANAGEMENT
              </div>
            </div>

            {/* Real Evidence: Board Presentation Photo */}
            <div className="precision-surface overflow-hidden group">
              <div className="relative aspect-[16/9] bg-black/80">
                <img
                  src={`${basePath}hongson-assets/exhibit/photo-board-presentation.webp`}
                  alt="การนำเสนอต่อคณะกรรมการและฝ่ายบริหาร"
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="p-4 font-mono text-[11px] text-silver-muted flex items-center justify-between">
                <span>EVIDENCE: LIVE BOARD PRESENTATION</span>
                <span className="text-white">SLIDE 10</span>
              </div>
            </div>
          </div>

          {/* Editorial Technical Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-silver-muted mb-4">
                SECTION 05 // PROVEN IN-HOUSE SYSTEM
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-[-0.035em] leading-[1.12] mb-6">
                HONGSON T-Folio <br />
                <span className="text-silver">MVP ที่พิสูจน์การใช้งานจริงทั้งโรงเรียน</span>
              </h2>
              <p className="text-base sm:text-lg text-silver font-light leading-relaxed">
                ระบบบริหารจัดเก็บและรายงานผลงานครูในรูปแบบดิจิทัล สร้างขึ้นจากโจทย์จริงเพื่อปลดล็อกเวลาของบุคลากรทางการศึกษา เปลี่ยนแฟ้มกระดาษสู่ฐานข้อมูลที่ประเมินผลได้ทันที
              </p>
            </div>

            {/* 4 Precision Spec Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="precision-surface p-5">
                <span className="font-mono text-[10px] text-signal-emerald tracking-[0.16em] uppercase block mb-1">
                  SPEC 01 // 100% PAPERLESS
                </span>
                <h4 className="text-base font-semibold text-white mb-1.5">ลดการจัดทำเอกสารรูปเล่ม</h4>
                <p className="text-xs text-silver font-light leading-relaxed">
                  แบบฟอร์มบันทึกดิจิทัลที่ยืดหยุ่น แนบไฟล์หลักฐานเชิงประจักษ์ และออกรายงาน PDF อัตโนมัติ
                </p>
              </div>

              <div className="precision-surface p-5">
                <span className="font-mono text-[10px] text-signal-cyan tracking-[0.16em] uppercase block mb-1">
                  SPEC 02 // PERFORMANCE
                </span>
                <h4 className="text-base font-semibold text-white mb-1.5">สนับสนุนงานบริหารบุคคล</h4>
                <p className="text-xs text-silver font-light leading-relaxed">
                  เชื่อมโยงตัวชี้วัดและเกณฑ์การประเมินวิทยฐานะของครูอย่างโปร่งใสและเป็นธรรม
                </p>
              </div>

              <div className="precision-surface p-5">
                <span className="font-mono text-[10px] text-silver-light tracking-[0.16em] uppercase block mb-1">
                  SPEC 03 // MULTI-TIER
                </span>
                <h4 className="text-base font-semibold text-white mb-1.5">ตรวจสอบและติดตามได้</h4>
                <p className="text-xs text-silver font-light leading-relaxed">
                  สายงานอนุมัติมาตรฐานโรงเรียน พร้อมระบบข้อคิดเห็นและการส่งกลับเพื่อแก้ไข
                </p>
              </div>

              <div className="precision-surface p-5">
                <span className="font-mono text-[10px] text-signal-emerald tracking-[0.16em] uppercase block mb-1">
                  SPEC 04 // IN-HOUSE
                </span>
                <h4 className="text-base font-semibold text-white mb-1.5">ระบบที่พัฒนาเอง</h4>
                <p className="text-xs text-silver font-light leading-relaxed">
                  ปรับแต่งฟังก์ชันให้สอดคล้องกับบริบทเฉพาะของโรงเรียนห้องสอนศึกษาอย่างแท้จริง
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
