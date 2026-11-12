import React from 'react';

interface FallbackNoticeProps {
  hasWebGL: boolean;
  prefersReducedMotion: boolean;
}

export const FallbackNotice: React.FC<FallbackNoticeProps> = ({
  hasWebGL,
  prefersReducedMotion,
}) => {
  if (hasWebGL && !prefersReducedMotion) {
    return null;
  }

  return (
    <>
      {/* 2D Obsidian Ambient Backdrop */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-15">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.04] rounded-full blur-[128px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/[0.03] rounded-full blur-[128px]" />
      </div>

      {/* Minimal Status Notice */}
      <div className="fixed bottom-20 left-4 z-40 pointer-events-auto">
        <div className="precision-surface px-3 py-1.5 text-[10px] font-mono tracking-[0.14em] text-silver-muted flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-signal-emerald" />
          <span>
            {!hasWebGL ? 'MODE // 2D PRECISION FALLBACK' : 'MODE // REDUCED MOTION'}
          </span>
        </div>
      </div>
    </>
  );
};
