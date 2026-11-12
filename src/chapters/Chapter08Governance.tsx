import React from 'react';
import {
  UserCheck,
  FileCheck,
  Award,
  CheckCircle,
  RotateCcw,
  Shield,
  BarChart3,
  Sliders,
  Users
} from 'lucide-react';
import { APPROVAL_FLOW, ADMIN_STEPS } from '../content/siteData';

export const Chapter08Governance: React.FC = () => {
  const getApprovalIcon = (icon: string) => {
    switch (icon) {
      case 'UserCheck': return UserCheck;
      case 'FileCheck': return FileCheck;
      case 'Award': return Award;
      case 'CheckCircle': return CheckCircle;
      default: return CheckCircle;
    }
  };

  return (
    <section
      id="governance"
      data-chapter-index="8"
      className="chapter-section min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="cyber-tag mb-4 text-xs">
            <span>08 // DATA GOVERNANCE & APPROVAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-headline tracking-tight leading-tight mb-4">
            ระบบอนุมัติและการกำกับดูแลข้อมูล <br />
            <span className="text-gradient-emerald">ตรวจสอบได้ทุกขั้นตอน</span>
          </h2>
          <p className="text-base sm:text-lg text-secondary leading-relaxed">
            โครงสร้างการบริหารจัดการข้อมูลและสายงานอนุมัติมาตรฐานโรงเรียน เพื่อให้ผลการประเมินมีความเที่ยงตรง โปร่งใส และพร้อมรับการตรวจสอบ
          </p>
        </div>

        {/* 4-Stage Approval Flow */}
        <div className="mb-12">
          <h3 className="text-sm font-bold text-signal-cyan uppercase font-mono tracking-wider mb-4 flex items-center gap-2">
            <span>MULTI-TIER APPROVAL PIPELINE</span>
            <span className="text-secondary/60 text-xs">(สไลด์ 07)</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {APPROVAL_FLOW.map((stage, idx) => {
              const Icon = getApprovalIcon(stage.icon);
              return (
                <div
                  key={stage.status}
                  className="cyber-glass-card rounded-2xl p-5 border border-stroke/40 hover:border-signal-cyan/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono text-signal-emerald font-bold">
                        TIER 0{idx + 1}
                      </span>
                      <div className="p-2 rounded-lg bg-elevated text-signal-cyan">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <span className="text-xs text-secondary block font-semibold">
                      {stage.role}
                    </span>
                    <h4 className="text-base font-bold text-headline mt-0.5 mb-2">
                      {stage.status}
                    </h4>
                    <p className="text-xs text-secondary/90 leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-stroke/20 text-[10px] text-secondary/60 font-mono">
                    VERIFIED STAGE
                  </div>
                </div>
              );
            })}
          </div>

          {/* Revision Loop Callout */}
          <div className="mt-4 p-3.5 rounded-xl bg-elevated/80 border border-stroke/30 flex items-center gap-3 text-xs text-secondary">
            <RotateCcw className="w-4 h-4 text-signal-cyan flex-shrink-0" />
            <span>
              <strong className="text-headline">สายงานตรวจสอบย้อนกลับ (Revision Loop):</strong> ในกรณีที่เอกสารหรือหลักฐานไม่สมบูรณ์ ผู้บริหารสามารถส่งกลับพร้อมข้อเสนอแนะให้ครูปรับปรุงได้ทันที โดยประวัติการแก้ไขจะถูกบันทึกไว้อย่างครบถ้วน
            </span>
          </div>
        </div>

        {/* Administrator 6 Pillars of Governance */}
        <div className="cyber-glass-card rounded-2xl p-6 sm:p-8 border border-stroke/40">
          <h3 className="text-sm font-bold text-headline uppercase tracking-wider mb-6 flex items-center justify-between">
            <span>ภารกิจการบริหารระบบสำหรับผู้ดูแล (Admin Governance · สไลด์ 06)</span>
            <span className="text-xs font-mono text-signal-emerald font-normal">6 MODULES</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {ADMIN_STEPS.map((adm) => (
              <div key={adm.title} className="p-3 rounded-xl bg-void/60 border border-stroke/20">
                <span className="text-[10px] font-mono text-signal-emerald font-semibold block">
                  MODULE {adm.step}
                </span>
                <h5 className="text-xs font-bold text-headline mt-1">{adm.title}</h5>
                <p className="text-[11px] text-secondary/80 mt-1 leading-tight line-clamp-2">
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

