import React from 'react';
import { X, ShieldCheck, AlertCircle, FileText, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { EVIDENCE_ITEMS, SCHOOL_INFO } from '../content/siteData';
import { EvidenceItem } from '../types';

interface EvidenceDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EvidenceDrawer: React.FC<EvidenceDrawerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const getGradeBadge = (grade: EvidenceItem['provenanceGrade']) => {
    switch (grade) {
      case 'observed':
        return (
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-signal-emerald flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-signal-emerald" /> OBSERVED
          </span>
        );
      case 'reported':
        return (
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-signal-cyan flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-signal-cyan" /> REPORTED
          </span>
        );
      case 'planned':
        return (
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-silver-light flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-silver-light" /> PLANNED
          </span>
        );
      case 'expected':
        return (
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-amber-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> EXPECTED
          </span>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dark Obsidian Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-8">
        <div className="w-screen max-w-xl bg-obsidian-surface border-l border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between shadow-2xl overflow-y-auto">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between pb-5 hairline-b">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal-emerald block mb-1">
                  PROVENANCE ARCHIVE // SPEC 2569
                </span>
                <h3 className="text-lg font-semibold text-white tracking-[-0.02em]">
                  คลังหลักฐานและข้อเท็จจริงอ้างอิง
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-silver hover:text-white rounded-[2px] border border-white/[0.08] bg-surface transition-colors"
                aria-label="Close drawer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Guardrail Policy */}
            <div className="mt-5 p-4 precision-surface text-xs space-y-2">
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-white flex items-center gap-2">
                <span>DATA INTEGRITY PROTOCOL</span>
              </div>
              <p className="text-silver leading-relaxed font-light">
                ข้อมูลเชิงตัวเลขทั้งหมดอ้างอิงตรงจากรายงานวิจัยนวัตกรรมการศึกษา 2569 (49 หน้า) และชุดสไลด์นำเสนอทางการของโรงเรียน:
              </p>
              <ul className="space-y-1.5 text-silver font-light pt-1">
                <li className="flex items-start gap-2">
                  <span className="text-signal-emerald font-mono text-[11px]">01</span>
                  <span><strong>Metaverse Metrics:</strong> คะแนน 12.85 → 16.37 และความพึงพอใจ 92.4% เกิดขึ้นเฉพาะกลุ่มตัวอย่าง 485 คนในบทเรียน Roblox วัฒนธรรม 7 อำเภอ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-signal-emerald font-mono text-[11px]">02</span>
                  <span><strong>HIS Facility:</strong> Hongson Innovation Space เป็นเป้าหมายตามแผนงาน</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-signal-emerald font-mono text-[11px]">03</span>
                  <span><strong>Demographics:</strong> นักเรียน 1,847 คน และบุคลากร 117 คน เป็นข้อมูลบริบทปีการศึกษา 2568</span>
                </li>
              </ul>
            </div>

            {/* List of Verified Items */}
            <div className="mt-6 space-y-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-silver-muted mb-3">
                VERIFIED SOURCE ENTRIES
              </div>

              {EVIDENCE_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="precision-surface p-4 space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-silver-muted">
                      {item.category}
                    </span>
                    {getGradeBadge(item.provenanceGrade)}
                  </div>
                  <h4 className="text-sm font-medium text-white">{item.title}</h4>
                  <p className="text-xs text-silver leading-relaxed font-light">{item.details}</p>
                  <div className="pt-2 hairline-t flex items-center justify-between text-[11px] font-mono text-silver-muted">
                    <span>SCOPE: {item.scope}</span>
                    <span className="text-white">{item.sourceRef}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-6 hairline-t mt-6 text-xs text-silver-muted font-mono flex items-center justify-between">
            <span>{SCHOOL_INFO.nameTh}</span>
            <span>SPEC: 12 NOV 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
};
