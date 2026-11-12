import React from 'react';
import { Sparkles, EyeOff } from 'lucide-react';

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
      {/* 2D Cyberpunk Ambient Gradient Backdrop when WebGL is unavailable */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-signal-emerald/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-signal-cyan/20 rounded-full blur-[128px]" />
        <div className="absolute top-2/3 left-1/2 w-80 h-80 bg-signal-violet/20 rounded-full blur-[128px]" />
      </div>

      {/* Floating Mode Notice */}
      <div className="fixed bottom-20 left-4 z-40 pointer-events-auto">
        <div className="cyber-glass rounded-xl px-3 py-1.5 border border-stroke/40 text-[11px] text-secondary flex items-center gap-2 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-signal-cyan" />
          <span>
            {!hasWebGL ? 'โหมด 2D ประหยัดพลังงาน (High Performance)' : 'โหมดลดการเคลื่อนไหว (Reduced Motion)'}
          </span>
        </div>
      </div>
    </>
  );
};

