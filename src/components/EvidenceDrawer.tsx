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
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-signal-emerald/15 text-signal-emerald border border-signal-emerald/30">
            <CheckCircle2 className="w-3 h-3" /> ยืนยันจากระบบจริง (Observed)
          </span>
        );
      case 'reported':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-signal-cyan/15 text-signal-cyan border border-signal-cyan/30">
            <FileText className="w-3 h-3" /> ตามรายงานวิจัย (Reported)
          </span>
        );
      case 'planned':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-signal-violet/15 text-signal-violet border border-signal-violet/30">
            <Clock className="w-3 h-3" /> แผนงานในอนาคต (Planned)
          </span>
        );
      case 'expected':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30">
            <Sparkles className="w-3 h-3" /> ผลลัพธ์ที่คาดการณ์ (Expected)
          </span>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-void/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-xl cyber-glass border-l border-stroke/50 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-stroke/30">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-signal-emerald/10 border border-signal-emerald/20 text-signal-emerald">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-headline">
                    หลักฐานเชิงประจักษ์ & การตรวจสอบข้อมูล
                  </h3>
                  <p className="text-xs text-secondary">
                    Data Provenance & Verified Evidence Guidelines
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-secondary hover:text-headline rounded-lg bg-elevated/60 hover:bg-elevated transition-all"
                aria-label="Close drawer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Guardrail Principles Notice */}
            <div className="mt-4 p-3.5 rounded-xl bg-signal-cyan/5 border border-signal-cyan/20 text-xs space-y-2">
              <div className="font-semibold text-signal-cyan flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" /> เกณฑ์ความถูกต้องของข้อมูล (Fact-Checking Standard)
              </div>
              <p className="text-secondary leading-relaxed">
                ข้อมูลและสถิติทั้งหมดในเว็บไซต์นี้อ้างอิงตรงจากเอกสารรายงานโครงการนวัตกรรมการศึกษา 2569 (49 หน้า) และสไลด์นำเสนอจริงของโรงเรียน โดยมีข้อกำหนดความโปร่งใสดังนี้:
              </p>
              <ul className="list-disc list-inside space-y-1 text-secondary/90 pl-1">
                <li>
                  <strong className="text-headline">ผลประเมิน Metaverse:</strong> คะแนนเฉลี่ย 12.85 → 16.37 และความพึงพอใจ 92.4% เกิดขึ้นเฉพาะบทเรียน Roblox วัฒนธรรม 7 อำเภอ ไม่ใช่ผลรวมทั้ง Super App
                </li>
                <li>
                  <strong className="text-headline">สถานะโครงการ HIS:</strong> Hongson Innovation Space เป็นเป้าหมายตามแผนงาน (Planned)
                </li>
                <li>
                  <strong className="text-headline">ข้อมูลบริบท:</strong> จำนวนนักเรียน 1,847 คน และครู 117 คน เป็นสถิติทางการของปีการศึกษา 2568
                </li>
              </ul>
            </div>

            {/* List of Verified Items */}
            <div className="mt-6 space-y-4">
              <h4 className="text-xs font-bold text-secondary uppercase tracking-wider">
                รายการหลักฐานอ้างอิง (Evidence Catalogue)
              </h4>

              {EVIDENCE_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="cyber-glass-card rounded-xl p-4 border border-stroke/40 space-y-2 hover:border-signal-emerald/30 transition-all"
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-[10px] uppercase font-mono text-signal-cyan">
                      {item.category}
                    </span>
                    {getGradeBadge(item.provenanceGrade)}
                  </div>
                  <h5 className="text-sm font-semibold text-headline">{item.title}</h5>
                  <p className="text-xs text-secondary leading-relaxed">{item.details}</p>
                  <div className="pt-2 border-t border-stroke/20 flex items-center justify-between text-[11px] text-secondary/80">
                    <span>ขอบเขต: {item.scope}</span>
                    <span className="font-mono text-signal-emerald">{item.sourceRef}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-6 border-t border-stroke/30 mt-6 text-xs text-secondary/70 flex items-center justify-between">
            <span>{SCHOOL_INFO.nameTh}</span>
            <span className="font-mono">12 Nov 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
};

