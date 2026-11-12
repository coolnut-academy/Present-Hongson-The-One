import React from 'react';
import { FilePlus2, CheckCircle2, Search, FileSpreadsheet } from 'lucide-react';
import { WORKFLOW_4R } from '../content/siteData';

export const Chapter06FourR: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'FilePlus2':
        return FilePlus2;
      case 'CheckCircle2':
        return CheckCircle2;
      case 'Search':
        return Search;
      case 'FileSpreadsheet':
        return FileSpreadsheet;
      default:
        return FilePlus2;
    }
  };

  return (
    <section
      id="four-r"
      data-chapter-index="6"
      className="chapter-section min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="cyber-tag mb-4 text-xs">
            <span>06 // OPERATIONAL METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-headline tracking-tight leading-tight mb-4">
            โครงสร้างการจัดการข้อมูล <br />
            <span className="text-gradient-cyan">สู่วงจร 4R (Record · Review · Retrieve · Report)</span>
          </h2>
          <p className="text-base sm:text-lg text-secondary leading-relaxed">
            ระบบแยกชั้นข้อมูลเพื่อความโปร่งใสและตรวจสอบได้จริง ทุกชิ้นงานและหลักฐานจะผ่าน 4 ลำดับขั้นตอนมาตรฐานก่อนสรุปผล
          </p>
        </div>

        {/* 4R Exploded Interactive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKFLOW_4R.map((item, idx) => {
            const Icon = getIcon(item.icon);
            const accents = [
              { color: '#00D6A3', border: 'border-signal-emerald/40', text: 'text-signal-emerald' },
              { color: '#52CFE5', border: 'border-signal-cyan/40', text: 'text-signal-cyan' },
              { color: '#9673E6', border: 'border-signal-violet/40', text: 'text-signal-violet' },
              { color: '#00F0B5', border: 'border-signal-emerald/40', text: 'text-signal-emerald' },
            ][idx];

            return (
              <div
                key={item.en}
                className={`cyber-glass-card rounded-2xl p-6 border ${accents.border} hover:border-signal-emerald transition-all duration-300 group flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-elevated border border-stroke/40 ${accents.text} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-secondary/70">
                      STAGE 0{idx + 1}
                    </span>
                  </div>

                  <span className={`text-xs font-mono font-bold tracking-wider ${accents.text}`}>
                    {item.en}
                  </span>
                  <h3 className="text-xl font-bold text-headline mt-1 mb-2">
                    {item.th}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-stroke/20 flex items-center justify-between text-[11px] font-mono text-secondary/60">
                  <span>LAYER 3D DEPTH</span>
                  <span className={accents.text}>Z-INDEX 0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

