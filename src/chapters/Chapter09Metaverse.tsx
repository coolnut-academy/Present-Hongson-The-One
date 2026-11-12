import React from 'react';
import { Compass, Users, BookOpen, MapPin, Landmark, Award } from 'lucide-react';

export const Chapter09Metaverse: React.FC = () => {
  const districts = [
    'เมืองแม่ฮ่องสอน', 'ปาย', 'ปางมะผ้า', 'ขุนยวม', 'แม่ลาน้อย', 'แม่สะเรียง', 'สบเมย'
  ];

  return (
    <section
      id="metaverse"
      data-chapter-index="9"
      className="chapter-section min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="cyber-tag mb-4 text-xs">
              <span>09 // LOCAL CULTURAL INNOVATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-headline tracking-tight leading-tight mb-4">
              โลกการเรียนรู้เสมือนจริง <br />
              <span className="text-gradient-cyan">HONGSON METAVERSE MODEL</span>
            </h2>
            <p className="text-base sm:text-lg text-secondary leading-relaxed mb-6">
              การผสานเทคโนโลยีโลกเสมือนเข้ากับรากเหง้าภูมิปัญญาท้องถิ่น: พิพิธภัณฑ์ดิจิทัลบนแพลตฟอร์ม Roblox ที่เปิดโอกาสให้นักเรียนสำรวจอัตลักษณ์ ประวัติศาสตร์ และวิถีชีวิตของทั้ง 7 อำเภอในจังหวัดแม่ฮ่องสอนอย่างไร้พรมแดน
            </p>

            {/* 7 Districts Tag List */}
            <div className="mb-6">
              <span className="text-xs font-mono text-signal-cyan font-bold block mb-2">
                COVERAGE // ครอบคลุม 7 อำเภอ จ.แม่ฮ่องสอน
              </span>
              <div className="flex flex-wrap gap-2">
                {districts.map((d, i) => (
                  <span
                    key={d}
                    className="px-2.5 py-1 rounded-lg bg-elevated/80 border border-stroke/40 text-xs text-headline flex items-center gap-1.5"
                  >
                    <MapPin className="w-3 h-3 text-signal-emerald" />
                    <span>{d}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-signal-cyan/5 border border-signal-cyan/20 text-xs text-secondary leading-relaxed">
              <strong className="text-headline">การถ่ายทอดทางวิชาการ:</strong> ได้รับการเผยแพร่ผลงานทางวิชาการและการนำเสนอในเวทีระดับชาติ 9 ครั้ง พร้อมต้อนรับคณะศึกษาดูงานจากสถานศึกษาภายนอกกว่า 16 คณะ
            </div>
          </div>

          {/* Quick Metrics of Metaverse */}
          <div className="lg:col-span-5 space-y-4">
            <div className="cyber-glass-card rounded-2xl p-6 border border-signal-cyan/30 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-signal-cyan/10 text-signal-cyan">
                  <Landmark className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-headline">พิพิธภัณฑ์วัฒนธรรมดิจิทัล</h4>
                  <p className="text-xs text-secondary">รวบรวมองค์ความรู้จาก 8 ปราชญ์ท้องถิ่น</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-stroke/20">
                <div className="p-3 rounded-xl bg-void/60 border border-stroke/20">
                  <span className="text-2xl font-extrabold text-signal-emerald font-mono block">
                    32
                  </span>
                  <span className="text-xs text-secondary">หน่วยการเรียนรู้บูรณาการ</span>
                </div>
                <div className="p-3 rounded-xl bg-void/60 border border-stroke/20">
                  <span className="text-2xl font-extrabold text-signal-cyan font-mono block">
                    50
                  </span>
                  <span className="text-xs text-secondary">นักเรียนแกนนำผู้สร้างสรรค์</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-elevated/60 border border-stroke/30 text-[11px] text-secondary/80 font-mono flex items-center justify-between">
              <span>REPORT SOURCES</span>
              <span className="text-signal-emerald">REPORT 2569 PP.4, 11, 26–29</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

