import React from 'react';

export const Chapter09Metaverse: React.FC = () => {
  const basePath = import.meta.env.BASE_URL || './';
  const districts = [
    'เมืองแม่ฮ่องสอน', 'ปาย', 'ปางมะผ้า', 'ขุนยวม', 'แม่ลาน้อย', 'แม่สะเรียง', 'สบเมย'
  ];

  return (
    <section
      id="metaverse"
      data-chapter-index="9"
      className="chapter-section min-h-screen relative flex items-center justify-center px-4 sm:px-8 py-32"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-silver-muted">
              SECTION 09 // LOCAL CULTURAL INNOVATION
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-[-0.035em] leading-[1.12]">
              โลกการเรียนรู้เสมือนจริง <br />
              <span className="text-silver">HONGSON METAVERSE MODEL</span>
            </h2>
            <p className="text-base sm:text-lg text-silver font-light leading-relaxed">
              พิพิธภัณฑ์วัฒนธรรมดิจิทัลบนแพลตฟอร์ม Roblox ผสานเทคโนโลยีเสมือนจริงเข้ากับอัตลักษณ์และภูมิปัญญาท้องถิ่นจาก 7 อำเภอของจังหวัดแม่ฮ่องสอน
            </p>

            {/* 7 Districts Minimalist Spec Badges */}
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-silver-muted mb-2.5">
                GEOGRAPHIC REACH // 7 DISTRICTS
              </div>
              <div className="flex flex-wrap gap-2">
                {districts.map((d) => (
                  <span
                    key={d}
                    className="font-mono text-xs px-3 py-1 bg-surface border border-white/[0.08] text-white"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            {/* Real Exhibit Photo from Ref */}
            <div className="precision-surface overflow-hidden group">
              <div className="relative aspect-[16/9] bg-black/80">
                <img
                  src={`${basePath}hongson-assets/exhibit/photo-metaverse-showcase.webp`}
                  alt="กิจกรรมการเรียนรู้เสมือนจริง"
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="p-3 font-mono text-[11px] text-silver-muted flex items-center justify-between">
                <span>AUTHENTIC EXHIBIT: METAVERSE & MAKER ACTIVITIES</span>
                <span className="text-white">REF SLIDE 16</span>
              </div>
            </div>
          </div>

          {/* Real Infographic from Ref */}
          <div className="lg:col-span-6">
            <div className="precision-surface p-4 sm:p-6">
              <div className="flex items-center justify-between pb-4 hairline-b mb-4 font-mono text-[11px] tracking-[0.14em]">
                <span className="text-white uppercase">OFFICIAL METAVERSE SYSTEM BLUEPRINT</span>
                <span className="text-silver-muted">REF ARTIFACT 05</span>
              </div>
              <div className="overflow-hidden bg-black/60 border border-white/[0.06]">
                <img
                  src={`${basePath}hongson-assets/exhibit/infographic-05-metaverse.webp`}
                  alt="HONGSON METAVERSE MODEL ในระบบนิเวศ"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="pt-4 grid grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-3 bg-surface border border-white/[0.06]">
                  <span className="text-silver-muted text-[10px] block">LEARNING UNITS:</span>
                  <span className="text-base font-bold text-white">32 หน่วยการเรียนรู้</span>
                </div>
                <div className="p-3 bg-surface border border-white/[0.06]">
                  <span className="text-silver-muted text-[10px] block">LEAD STUDENTS:</span>
                  <span className="text-base font-bold text-white">50 นักเรียนแกนนำ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
