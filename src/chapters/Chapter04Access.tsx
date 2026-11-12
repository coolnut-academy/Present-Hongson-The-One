import React from 'react';
import { UserCheck, GraduationCap, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const Chapter04Access: React.FC = () => {
  const roles = [
    {
      role: 'TEACHER AS CREATOR',
      title: 'ครูผู้สร้างสรรค์การเรียนรู้',
      desc: 'เข้าถึงระบบจัดทำแผนการจัดการเรียนรู้ดิจิทัล (Digital Plan Online), ส่งแฟ้มสะสมงานผ่าน T-Folio, และใช้ AI ช่วยออกแบบกิจกรรม',
      icon: UserCheck,
      color: 'emerald',
      source: 'Deck เฟรม 23',
    },
    {
      role: 'STUDENT AS MAKER',
      title: 'นักเรียนผู้ลงมือปฏิบัติจริง',
      desc: 'เข้าถึงพื้นที่การเรียนรู้โครงงาน นวัตกรรมดิจิทัล การสร้างสรรค์โมเดลเสมือนจริง และประเมินผลการเรียนรู้แบบบูรณาการ',
      icon: GraduationCap,
      color: 'cyan',
      source: 'Deck เฟรม 24',
    },
    {
      role: 'ADMINISTRATION & AUDIT',
      title: 'ฝ่ายบริหารและกำกับคุณภาพ',
      desc: 'ตรวจสอบและรับรองเอกสารดิจิทัล ติดตามภาพรวม KPI ประจำสถานศึกษา และบริหารจัดการสิทธิ์ผู้ใช้อย่างโปร่งใส',
      icon: ShieldCheck,
      color: 'violet',
      source: 'Report หน้า 9',
    },
  ];

  return (
    <section
      id="access"
      data-chapter-index="4"
      className="chapter-section min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="cyber-tag mb-4 text-xs">
            <span>04 // ROLE-BASED PORTAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-headline tracking-tight leading-tight mb-4">
            การเข้าถึงที่ตรงกับ <br />
            <span className="text-gradient-emerald">ทุกบทบาทในสถานศึกษา</span>
          </h2>
          <p className="text-base sm:text-lg text-secondary leading-relaxed">
            ศูนย์กลางแอปพลิเคชัน (App Center) คัดสรรและจัดการสิทธิ์เครื่องมือให้เหมาะสมกับบริบทของผู้ใช้งานแต่ละกลุ่มอย่างมีประสิทธิภาพ
          </p>
        </div>

        {/* 3 Role Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((r, idx) => {
            const Icon = r.icon;
            const accentClass =
              r.color === 'emerald'
                ? 'text-signal-emerald border-signal-emerald/30 group-hover:border-signal-emerald'
                : r.color === 'cyan'
                ? 'text-signal-cyan border-signal-cyan/30 group-hover:border-signal-cyan'
                : 'text-signal-violet border-signal-violet/30 group-hover:border-signal-violet';

            return (
              <div
                key={idx}
                className={`cyber-glass-card rounded-2xl p-6 sm:p-7 border ${accentClass} transition-all duration-300 group flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-elevated border border-stroke/40">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-secondary/70">{r.source}</span>
                  </div>

                  <span className="text-xs font-mono font-bold tracking-wider block mb-1">
                    {r.role}
                  </span>
                  <h3 className="text-lg font-bold text-headline mb-3">{r.title}</h3>
                  <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                    {r.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-stroke/20 flex items-center justify-between text-xs text-secondary/70">
                  <span>AUTHENTICATED ACCESS</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

