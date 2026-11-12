import React, { useState } from 'react';

export const Chapter02Ecosystem: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'strengths'>('overview');
  const basePath = import.meta.env.BASE_URL || './';

  return (
    <section
      id="ecosystem"
      data-chapter-index="2"
      className="chapter-section min-h-screen relative flex items-center justify-center px-4 sm:px-8 py-32"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-silver-muted mb-4">
            SECTION 02 // SUPER APP ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-[-0.035em] leading-[1.12] mb-6">
            หนึ่งจุดเชื่อม สู่ระบบนิเวศ <br />
            <span className="text-silver">จุดแข็งคือการเชื่อมโยง ไม่ใช่การสร้างทุกระบบเอง</span>
          </h2>
          <p className="text-base sm:text-lg text-silver font-light leading-relaxed">
            HONGSON THE ONE ทำหน้าที่เป็นศูนย์กลางเชื่อมประสาน 4 องค์ประกอบ: ระบบ MVP ภายใน, นวัตกรรมระดับชาติ, บริการภายนอกที่ใช้งานจริง, และแอปพลิเคชันเพื่ออนาคต
          </p>
        </div>

        {/* Blueprint Viewer with Tab Switcher */}
        <div className="precision-surface p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 hairline-b">
            <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.14em]">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 uppercase rounded-[2px] transition-colors border ${
                  activeTab === 'overview'
                    ? 'bg-white/[0.08] border-white/[0.22] text-white'
                    : 'bg-surface border-white/[0.08] text-silver hover:text-white'
                }`}
              >
                01 // 4-TIER ECOSYSTEM ARCHITECTURE
              </button>
              <button
                onClick={() => setActiveTab('strengths')}
                className={`px-4 py-2 uppercase rounded-[2px] transition-colors border ${
                  activeTab === 'strengths'
                    ? 'bg-white/[0.08] border-white/[0.22] text-white'
                    : 'bg-surface border-white/[0.08] text-silver hover:text-white'
                }`}
              >
                02 // INTEGRATION STRENGTHS MATRIX
              </button>
            </div>
            <span className="font-mono text-[11px] text-silver-muted">
              AUTHENTIC ARTIFACT // EXHIBIT FOLDER
            </span>
          </div>

          {/* Blueprint Graphic */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 bg-black/60 border border-white/[0.06] overflow-hidden">
              <img
                src={
                  activeTab === 'overview'
                    ? `${basePath}hongson-assets/exhibit/infographic-01-ecosystem.webp`
                    : `${basePath}hongson-assets/exhibit/infographic-03-strengths.webp`
                }
                alt="Ecosystem Blueprint"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Technical Specifications */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <span className="font-mono text-[11px] text-signal-emerald tracking-[0.16em] uppercase block mb-1.5">
                  CORE TENET
                </span>
                <h3 className="text-xl font-semibold text-white tracking-[-0.01em] mb-2">
                  {activeTab === 'overview'
                    ? 'โครงสร้าง 4 ภาคส่วน'
                    : 'หลักการเชื่อมต่อระบบ'}
                </h3>
                <p className="text-sm text-silver font-light leading-relaxed">
                  {activeTab === 'overview'
                    ? 'รวบรวม HONGSON T-Folio (MVP), HONGSON Metaverse Model, บริการภายนอก (Google Cloud / Drive / ระบบคะแนน) และเครื่องมือใหม่ในอนาคต'
                    : 'เน้นการผสานรวมเพื่อลดภาระผู้ใช้ (Single Portal Entry) และสร้างระบบข้อมูลที่ส่งต่อได้จริง โดยไม่ฝืนพัฒนาทุกสิ่งขึ้นมาใหม่โดยไม่จำเป็น'}
                </p>
              </div>

              <div className="p-4 bg-surface border border-white/[0.08] space-y-2 font-mono text-xs">
                <div className="flex justify-between text-silver">
                  <span>PORTAL STATUS:</span>
                  <span className="text-signal-emerald">OPERATIONAL</span>
                </div>
                <div className="flex justify-between text-silver">
                  <span>INTEGRATION TYPE:</span>
                  <span className="text-white">AGGREGATED HUB</span>
                </div>
                <div className="flex justify-between text-silver">
                  <span>PRIMARY DOMAIN:</span>
                  <span className="text-signal-cyan">hongson.one</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
