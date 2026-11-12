import React from 'react';
import { Layers, Copy, SearchX, FileSpreadsheet } from 'lucide-react';

export const Chapter01Problem: React.FC = () => {
  const painPoints = [
    {
      icon: Layers,
      title: 'แพลตฟอร์มกระจัดกระจาย',
      en: 'Fragmented Tools',
      desc: 'แต่ละกลุ่มสาระและงานบริหารใช้เครื่องมือแยกกัน ข้อมูลไม่ได้เชื่อมต่อกันอย่างเป็นระบบ',
    },
    {
      icon: Copy,
      title: 'กรอกข้อมูลซ้ำซ้อน',
      en: 'Redundant Data Entry',
      desc: 'ครูต้องบันทึกประวัติการทำงานและผลงานลงในหลายแบบฟอร์ม สูญเสียเวลาที่มีค่าสำหรับการสอน',
    },
    {
      icon: SearchX,
      title: 'สืบค้นหลักฐานยาก',
      en: 'Untracked Evidence',
      desc: 'ไฟล์และภาพกิจกรรมกระจายอยู่ในโฟลเดอร์ส่วนตัวและแอปแชต เมื่อถึงรอบประเมินจึงรวบรวมได้ยากลำบาก',
    },
    {
      icon: FileSpreadsheet,
      title: 'ภาระเอกสารกระดาษ',
      en: 'Paper-Heavy Reporting',
      desc: 'การสรุปรายงานเป็นรูปเล่มกระดาษหนา สิ้นเปลืองทรัพยากรและไม่สามารถนำข้อมูลไปวิเคราะห์ต่อยอดได้จริง',
    },
  ];

  return (
    <section
      id="problem"
      data-chapter-index="1"
      className="chapter-section min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="cyber-tag mb-4 text-xs">
            <span>01 // THE SYSTEMIC CHALLENGE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-headline tracking-tight leading-tight mb-4">
            เมื่อทุกงานแยกจากกัน <br />
            <span className="text-gradient-cyan">ภาระจึงเพิ่มขึ้นโดยไม่จำเป็น</span>
          </h2>
          <p className="text-base sm:text-lg text-secondary leading-relaxed">
            ความท้าทายจริงของสถานศึกษา: การเพิ่มขึ้นของเครื่องมือดิจิทัลที่ไม่ได้ผสานรวม กลับสร้างความซ้ำซ้อนและดึงเวลาของครูออกจากการพัฒนาผู้เรียน
          </p>
        </div>

        {/* 4 Pain Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="cyber-glass-card rounded-2xl p-6 border border-stroke/40 hover:border-signal-cyan/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-signal-cyan/10 border border-signal-cyan/20 flex items-center justify-center mb-5 text-signal-cyan group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-signal-cyan/80">
                    {item.en}
                  </span>
                  <h3 className="text-lg font-bold text-headline mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-stroke/20 flex items-center justify-between text-[11px] font-mono text-secondary/60">
                  <span>ISSUE #{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-signal-cyan">DECK 02</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

