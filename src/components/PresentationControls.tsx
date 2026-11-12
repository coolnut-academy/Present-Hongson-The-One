import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  BookOpen,
  Keyboard
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
      {/* Precision Bottom Control Bar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-full max-w-xl px-4 pointer-events-auto">
        <div className="precision-surface-glass px-4 py-2 sm:px-5 sm:py-2.5 flex items-center justify-between gap-3 shadow-2xl">
          {/* Chapter Step Counter & Title */}
          <div className="flex items-center gap-3 overflow-hidden">
            <span className="font-mono text-xs font-semibold text-white tracking-[0.14em] bg-white/[0.06] px-2 py-0.5 rounded-[1px] border border-white/[0.08]">
              {chapter.numberStr} // 11
            </span>
            <div className="flex flex-col truncate">
              <span className="text-xs sm:text-sm font-medium text-white truncate tracking-[-0.01em]">
                {chapter.titleTh}
              </span>
              <span className="text-[10px] text-silver-muted font-mono tracking-[0.12em] uppercase hidden sm:block">
                {chapter.titleEn}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {/* Presenter Notes Button */}
            <button
              onClick={() => setNotesOpen(!notesOpen)}
              className={`p-1.5 rounded-[2px] text-xs transition-colors border ${
                notesOpen
                  ? 'bg-white/[0.1] border-white/[0.3] text-white'
                  : 'bg-surface border-white/[0.08] text-silver hover:text-white'
              }`}
              title="Presenter Notes"
            >
              <BookOpen className="w-3.5 h-3.5" />
            </button>

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className="p-1.5 rounded-[2px] bg-surface border border-white/[0.08] text-silver hover:text-white transition-colors"
              title="Fullscreen"
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>

            {/* Stepper Buttons */}
            <div className="flex items-center gap-1 ml-1">
              <button
                onClick={prevChapter}
                disabled={currentChapter === 0}
                className="p-1.5 rounded-[2px] bg-surface border border-white/[0.08] text-silver hover:text-white disabled:opacity-20 disabled:pointer-events-none transition-colors"
                title="Previous (←)"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={nextChapter}
                disabled={currentChapter === CHAPTERS.length - 1}
                className="p-1.5 rounded-[2px] bg-white/[0.1] border border-white/[0.22] text-white hover:bg-white/[0.18] disabled:opacity-20 disabled:pointer-events-none transition-colors"
                title="Next (→)"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Presenter Notes Popover */}
        {notesOpen && (
          <div className="mt-2 precision-surface p-4 shadow-2xl text-xs space-y-2 max-h-52 overflow-y-auto">
            <div className="flex items-center justify-between text-silver border-b border-white/[0.08] pb-2 font-mono text-[10px] tracking-[0.14em]">
              <span className="text-white uppercase">NOTES // SEC {chapter.numberStr}</span>
              <span className="text-silver-muted flex items-center gap-1">
                <Keyboard className="w-3 h-3" /> ARROW KEYS
              </span>
            </div>
            <p className="text-silver leading-relaxed font-light">
              {chapter.notes || chapter.summaryTh}
            </p>
            <div className="pt-1 flex flex-wrap gap-1.5 font-mono text-[10px]">
              <span className="text-silver-muted">REF:</span>
              {chapter.sources.map((s, i) => (
                <span
                  key={i}
                  className="px-1.5 py-0.5 bg-white/[0.04] border border-white/[0.08] text-silver"
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
