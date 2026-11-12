import React from 'react';

export const Chapter01Problem: React.FC = () => {
  const basePath = import.meta.env.BASE_URL || './';

  const painPoints = [
    {
      code: '01',
      title: 'แพลตฟอร์มกระจัดกระจาย',
      en: 'FRAGMENTED DIGITAL SERVICES',
      desc: 'แต่ละกลุ่มสาระและฝ่ายบริหารใช้เครื่องมือแยกจากกัน ข้อมูลไร้จุดเชื่อมโยง',
    },
    {
      code: '02',
      title: 'กรอกข้อมูลซ้ำซ้อน',
      en: 'REDUNDANT ENTRY BURDEN',
      desc: 'บันทึกผลงานลงหลายแบบฟอร์ม สูญเสียเวลาที่มีค่าสำหรับการพัฒนาผู้เรียน',
    },
    {
      code: '03',
      title: 'การจัดเก็บหลักฐานสูญหาย',
      en: 'UNSTRUCTURED EVIDENCE',
      desc: 'ไฟล์กระจัดกระจายในแอปสนทนา เมื่อถึงรอบประเมินจึงรวบรวมยากลำบาก',
    },
    {
      code: '04',
      title: 'ภาระเอกสารรูปเล่ม',
      en: 'ANALOG PAPER OVERHEAD',
      desc: 'การสรุปรายงานเป็นรูปเล่มกระดาษหนา ไม่สามารถต่อยอดสู่การวิเคราะห์เชิงลึก',
    },
  ];

  return (
    <section
      id="problem"
      data-chapter-index="1"
      className="chapter-section min-h-screen relative flex items-center justify-center px-4 sm:px-8 py-32"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-silver-muted mb-4">
            SECTION 01 // SYSTEMIC CHALLENGE
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-[-0.035em] leading-[1.12] mb-6">
            เมื่อทุกภารกิจแยกจากกัน <br />
            <span className="text-silver">ภาระงานจึงทับถมโดยไม่จำเป็น</span>
          </h2>
          <p className="text-base sm:text-lg text-silver font-light leading-relaxed">
            โจทย์จริงของโรงเรียน: การเพิ่มขึ้นของเครื่องมือดิจิทัลที่ไม่ได้บูรณาการ กลับสร้างความกระจัดกระจายและเพิ่มภาระเอกสารให้แก่ครู
          </p>
        </div>

        {/* Asymmetric Editorial Grid: Infographic + Precision Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Real Blueprint from Ref (Context & Need) */}
          <div className="lg:col-span-7 precision-surface p-4 sm:p-6 group">
            <div className="flex items-center justify-between pb-4 hairline-b mb-4 font-mono text-[11px] tracking-[0.14em] text-silver-muted">
              <span>BLUEPRINT // SCHOOL CONTEXT & DIGITAL HUB</span>
              <span className="text-white">REF 02</span>
            </div>
            <div className="overflow-hidden bg-black/60 border border-white/[0.06]">
              <img
                src={`${basePath}hongson-assets/exhibit/infographic-02-context.webp`}
                alt="บริบทโรงเรียนห้องสอนศึกษากับความจำเป็นในการมีศูนย์กลางดิจิทัล"
                className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
            <div className="pt-4 flex items-center justify-between text-[11px] font-mono text-silver-muted">
              <span>ARCHIVE SOURCE: GOOGLE DRIVE EXHIBIT 02</span>
              <span>HONGSON THE ONE</span>
            </div>
          </div>

          {/* 4 Precision Metric Panels */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {painPoints.map((item) => (
              <div
                key={item.code}
                className="precision-surface p-5 hover:border-white/[0.22] transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[11px] tracking-[0.16em] text-signal-emerald">
                    DEFECT // {item.code}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.14em] text-silver-muted">
                    {item.en}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white mb-1.5 tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-silver font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
