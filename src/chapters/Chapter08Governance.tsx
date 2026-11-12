import React from 'react';
import { APPROVAL_FLOW, ADMIN_STEPS } from '../content/siteData';

export const Chapter08Governance: React.FC = () => {
  return (
    <section
      id="governance"
      data-chapter-index="8"
      className="chapter-section min-h-screen relative flex items-center justify-center px-4 sm:px-8 py-32"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-silver-muted mb-4">
            SECTION 08 // GOVERNANCE & APPROVAL
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-[-0.035em] leading-[1.12] mb-6">
            การกำกับดูแลและสายงานอนุมัติ <br />
            <span className="text-silver">MULTI-TIER APPROVAL PIPELINE</span>
          </h2>
          <p className="text-base sm:text-lg text-silver font-light leading-relaxed">
            โครงสร้างการบริหารจัดการข้อมูลและสายงานอนุมัติมาตรฐาน เพื่อให้ผลการประเมินมีความเที่ยงตรง โปร่งใส และมีประวัติบันทึกการส่งกลับแก้ไขครบถ้วน
          </p>
        </div>

        {/* 4-Stage Approval Flow */}
        <div className="mb-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {APPROVAL_FLOW.map((stage, idx) => (
              <div
                key={stage.status}
                className="precision-surface p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 hairline-b mb-4 font-mono text-[11px] tracking-[0.16em]">
                    <span className="text-signal-emerald">TIER 0{idx + 1}</span>
                    <span className="text-silver-muted uppercase">{stage.role}</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 tracking-[-0.01em]">
                    {stage.status}
                  </h4>
                  <p className="text-xs text-silver font-light leading-relaxed">
                    {stage.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 hairline-t font-mono text-[10px] text-silver-muted uppercase">
                  VERIFIED PROTOCOL
                </div>
              </div>
            ))}
          </div>

          {/* Revision Loop Callout */}
          <div className="mt-4 p-4 precision-surface flex items-start gap-3 text-xs text-silver font-light leading-relaxed">
            <span className="font-mono text-signal-cyan font-bold uppercase tracking-[0.14em]">REVISION BRANCH:</span>
            <span>
              กรณีที่หลักฐานยังไม่สมบูรณ์ ฝ่ายบริหารสามารถส่งกลับพร้อมข้อเสนอแนะเพื่อให้ครูปรับปรุงได้ทันที โดยประวัติการยื่นและการส่งกลับจะถูกจัดเก็บไว้ในฐานข้อมูลอย่างโปร่งใส
            </span>
          </div>
        </div>

        {/* 6 Admin Governance Modules */}
        <div className="precision-surface p-6 sm:p-8">
          <div className="flex items-center justify-between pb-4 hairline-b mb-6 font-mono text-[11px] tracking-[0.14em]">
            <span className="text-white uppercase">ADMINISTRATIVE COMPLIANCE & CONTROL // 6 MODULES</span>
            <span className="text-silver-muted">SLIDE 06</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {ADMIN_STEPS.map((adm) => (
              <div key={adm.title} className="p-3.5 bg-surface border border-white/[0.06]">
                <span className="font-mono text-[10px] text-signal-emerald tracking-[0.16em] uppercase block mb-1">
                  MODULE {adm.step}
                </span>
                <h5 className="text-xs font-semibold text-white mb-1">{adm.title}</h5>
                <p className="text-[11px] text-silver font-light leading-tight">
                  {adm.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
