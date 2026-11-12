import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  BookOpen,
  Keyboard,
  Info
} from 'lucide-react';
import { CHAPTERS } from '../content/siteData';

interface PresentationControlsProps {
  currentChapter: number;
  nextChapter: () => void;
  prevChapter: () => void;
  goToChapter: (index: number) => void;
  isPresentationMode: boolean;
}

export const PresentationControls: React.FC<PresentationControlsProps> = ({
  currentChapter,
  nextChapter,
  prevChapter,
  goToChapter,
  isPresentationMode,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [notesOpen, setNotesOpen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const chapter = CHAPTERS[currentChapter] || CHAPTERS[0];

  return (
    <>
      {/* Floating Presenter Bar at Bottom */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-full max-w-2xl px-4 pointer-events-auto">
        <div className="cyber-glass rounded-2xl px-4 py-2.5 sm:px-6 sm:py-3 border border-stroke/50 shadow-2xl flex items-center justify-between gap-3">
          {/* Chapter Step Counter & Title */}
          <div className="flex items-center gap-3 overflow-hidden">
            <span className="font-mono text-xs sm:text-sm font-bold text-signal-emerald tracking-wider bg-signal-emerald/10 px-2 py-0.5 rounded border border-signal-emerald/20">
              {chapter.numberStr} / 11
            </span>
            <div className="flex flex-col truncate">
              <span className="text-xs sm:text-sm font-semibold text-headline truncate">
                {chapter.titleTh}
              </span>
              <span className="text-[10px] text-secondary/80 font-mono tracking-tight hidden sm:block">
                {chapter.titleEn}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            {/* Presenter Notes Button */}
            <button
              onClick={() => setNotesOpen(!notesOpen)}
              className={`p-2 rounded-xl text-xs transition-all border ${
                notesOpen
                  ? 'bg-signal-cyan/20 border-signal-cyan/50 text-signal-cyan'
                  : 'bg-elevated/70 border-stroke/30 text-secondary hover:text-headline'
              }`}
              title="เปิด/ปิด บันทึกสำหรับผู้นำเสนอ (Presenter Notes)"
            >
              <BookOpen className="w-4 h-4" />
            </button>

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-xl bg-elevated/70 border border-stroke/30 text-secondary hover:text-headline transition-all"
              title="สลับเต็มจอ (Fullscreen)"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-1 ml-1">
              <button
                onClick={prevChapter}
                disabled={currentChapter === 0}
                className="p-2 rounded-xl bg-elevated border border-stroke/40 text-headline hover:bg-signal-emerald/20 hover:text-signal-emerald disabled:opacity-30 disabled:pointer-events-none transition-all"
                title="ย้อนกลับ (ลูกศรซ้าย)"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextChapter}
                disabled={currentChapter === CHAPTERS.length - 1}
                className="p-2 rounded-xl bg-signal-emerald/20 border border-signal-emerald/40 text-signal-emerald hover:bg-signal-emerald/30 disabled:opacity-30 disabled:pointer-events-none transition-all shadow-[0_0_12px_rgba(0,214,163,0.3)]"
                title="ถัดไป (ลูกศรขวา)"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Presenter Notes Modal / Popover */}
        {notesOpen && (
          <div className="mt-2 cyber-glass-card rounded-2xl p-4 border border-stroke/50 shadow-2xl text-xs space-y-2 max-h-56 overflow-y-auto">
            <div className="flex items-center justify-between text-secondary border-b border-stroke/30 pb-2">
              <span className="font-semibold flex items-center gap-1.5 text-signal-cyan">
                <Info className="w-3.5 h-3.5" /> บันทึกสำหรับผู้นำเสนอ (Chapter {chapter.numberStr})
              </span>
              <span className="font-mono text-[10px] text-secondary/70 flex items-center gap-1">
                <Keyboard className="w-3 h-3" /> ใช้ปุ่ม ← / → บนคีย์บอร์ด
              </span>
            </div>
            <p className="text-headline/90 leading-relaxed">
              {chapter.notes || chapter.summaryTh}
            </p>
            <div className="pt-1 flex flex-wrap gap-1.5 text-[10px]">
              <span className="text-secondary/70">แหล่งอ้างอิง:</span>
              {chapter.sources.map((s, i) => (
                <span
                  key={i}
                  className="px-1.5 py-0.5 rounded bg-void/80 border border-stroke/30 text-signal-emerald font-mono"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

