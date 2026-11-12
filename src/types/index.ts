export type ViewMode = 'explore' | 'presentation';

export interface ChapterMeta {
  id: string;
  index: number;
  numberStr: string;
  titleTh: string;
  titleEn: string;
  eyebrow: string;
  summaryTh: string;
  sources: string[];
  notes?: string;
}

export interface PillarData {
  key: string;
  th: string;
  en: string;
  description: string;
  source: string;
  iconName: string;
  accent: 'emerald' | 'cyan' | 'violet';
}

export interface Workflow4R {
  en: 'RECORD' | 'REVIEW' | 'RETRIEVE' | 'REPORT';
  th: string;
  desc: string;
  icon: string;
}

export interface MetaverseStat {
  value: string;
  label: string;
  status: string;
  source: string;
  caveat?: string;
}

export interface EvidenceItem {
  id: string;
  category: string;
  title: string;
  scope: string;
  metric?: string;
  details: string;
  sourceRef: string;
  provenanceGrade: 'observed' | 'reported' | 'planned' | 'expected';
}

