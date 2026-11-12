import React from 'react';
import { LayoutGrid, Network, Cpu, ArrowRight } from 'lucide-react';

export const Chapter02Ecosystem: React.FC = () => {
  return (
    <section
      id="ecosystem"
      data-chapter-index="2"
      className="chapter-section min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text Description */}
          <div className="lg:col-span-7">
            <div className="cyber-tag mb-4 text-xs">
              <span>02 // INTEGRATED SUPER APP</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-headline tracking-tight leading-tight mb-6">
              หนึ่งจุดเชื่อม <br />
              <span className="text-gradient-emerald">สู่ระบบการเรียนรู้ที่เติบโตไปด้วยกัน</span>
            </h2>
            <p className="text-base sm:text-lg text-secondary leading-relaxed mb-6">
              เปลี่ยนนิยามจากการใช้ "แอปพลิเคชันแยกส่วน" สู่การสร้าง <strong className="text-headline">Local Digital Education Ecosystem</strong> โดยมี HONGSON THE ONE เป็น Super App ศูนย์กลางที่เชื่อมต่อผู้คน เครื่องมือ และข้อมูลเข้าด้วยกัน
            </p>

            <div className="space-y-3.5">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-elevated/60 border border-stroke/30">
                <div className="p-2 rounded-lg bg-signal-emerald/10 text-signal-emerald">
                  <LayoutGrid className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-headline">App Center ศูนย์รวมบริการดิจิทัล</h4>
                  <p className="text-xs text-secondary">จัดหมวดหมู่งานและเครื่องมืออำนวยความสะดวกสำหรับครู นักเรียน และบุคลากร</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-elevated/60 border border-stroke/30">
                <div className="p-2 rounded-lg bg-signal-cyan/10 text-signal-cyan">
                  <Network className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-headline">สอดประสานกับวิสัยทัศน์จังหวัด</h4>
                  <p className="text-xs text-secondary">เชื่อมต่อบริบทพื้นที่การศึกษานวัตกรรมแม่ฮ่องสอน และการพัฒนาทักษะแห่งอนาคต</p>
                </div>
              </div>
            </div>
          </div>

          {/* Infographic Visual Card */}
          <div className="lg:col-span-5">
            <div className="cyber-glass-card rounded-2xl p-6 sm:p-8 border border-signal-emerald/30 shadow-[0_0_30px_rgba(0,214,163,0.1)] relative">
              <div className="flex items-center justify-between pb-4 border-b border-stroke/30 mb-6">
                <span className="text-xs font-mono text-signal-emerald font-bold">ECOSYSTEM ARCHITECTURE</span>
                <span className="text-[10px] text-secondary font-mono">REPORT P.8–9</span>
              </div>

              {/* Ecosystem Layer Stack */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-signal-emerald/10 border border-signal-emerald/40 text-signal-emerald flex items-center justify-between">
                  <span>LAYER 01 // SUPER APP PORTAL</span>
                  <span className="text-[10px]">hongson.one</span>
                </div>
                <div className="p-3 rounded-xl bg-signal-cyan/10 border border-signal-cyan/40 text-signal-cyan flex items-center justify-between">
                  <span>LAYER 02 // 4 PILLARS CORE</span>
                  <span className="text-[10px]">WORK · LEARN · CREATE · SHARE</span>
                </div>
                <div className="p-3 rounded-xl bg-signal-violet/10 border border-signal-violet/40 text-signal-violet flex items-center justify-between">
                  <span>LAYER 03 // FLAGSHIP WEBAPPS</span>
                  <span className="text-[10px]">T-Folio · Plan · Metaverse</span>
                </div>
                <div className="p-3 rounded-xl bg-elevated/80 border border-stroke/40 text-secondary flex items-center justify-between">
                  <span>LAYER 04 // USER ROLES & ACCESS</span>
                  <span className="text-[10px]">Creator · Maker · Admin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

