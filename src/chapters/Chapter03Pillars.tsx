import React from 'react';
import { Briefcase, Sparkles, Boxes, Share2 } from 'lucide-react';
import { PILLARS } from '../content/siteData';

export const Chapter03Pillars: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return Briefcase;
      case 'Sparkles':
        return Sparkles;
      case 'Boxes':
        return Boxes;
      case 'Share2':
        return Share2;
      default:
        return Sparkles;
    }
  };

  return (
    <section
      id="pillars"
      data-chapter-index="3"
      className="chapter-section min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="cyber-tag mb-4 text-xs">
            <span>03 // CORE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-headline tracking-tight leading-tight mb-4">
            4 เสาหลักขับเคลื่อนการศึกษา <br />
            <span className="text-gradient-cyan">WORK · LEARN · CREATE · SHARE</span>
          </h2>
          <p className="text-base sm:text-lg text-secondary leading-relaxed">
            กระบวนการพัฒนางานและผู้เรียนอย่างต่อเนื่อง จากงานประจำเป็นระบบ ต่อยอดสู่การสร้างนวัตกรรม และการขยายผลสู่สังคม
          </p>
        </div>

        {/* 4 Pillars Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PILLARS.map((pillar) => {
            const Icon = getIcon(pillar.iconName);
            const accentBorder =
              pillar.accent === 'emerald'
                ? 'border-signal-emerald/40 hover:border-signal-emerald'
                : pillar.accent === 'cyan'
                ? 'border-signal-cyan/40 hover:border-signal-cyan'
                : 'border-signal-violet/40 hover:border-signal-violet';

            const accentText =
              pillar.accent === 'emerald'
                ? 'text-signal-emerald'
                : pillar.accent === 'cyan'
                ? 'text-signal-cyan'
                : 'text-signal-violet';

            return (
              <div
                key={pillar.key}
                className={`cyber-glass-card rounded-2xl p-6 sm:p-8 border ${accentBorder} transition-all duration-300 group flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-elevated border border-stroke/40 ${accentText} group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className={`text-xs font-mono font-bold tracking-wider ${accentText}`}>
                          PILLAR // {pillar.key}
                        </span>
                        <h3 className="text-xl font-bold text-headline">{pillar.th}</h3>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-secondary/60 uppercase">{pillar.en}</span>
                  </div>

                  <p className="text-sm text-secondary leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stroke/20 flex items-center justify-between text-xs font-mono text-secondary/70">
                  <span>FRAMEWORK COMPONENT</span>
                  <span className={accentText}>{pillar.source}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

