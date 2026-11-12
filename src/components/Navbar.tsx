import React, { useState } from 'react';
import {
  Compass,
  Presentation,
  FileCheck2,
  Menu,
  X,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { ViewMode } from '../types';
import { CHAPTERS, SCHOOL_INFO } from '../content/siteData';

interface NavbarProps {
  currentChapter: number;
  viewMode: ViewMode;
  toggleViewMode: () => void;
  goToChapter: (index: number) => void;
  openEvidenceDrawer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentChapter,
  viewMode,
  toggleViewMode,
  goToChapter,
  openEvidenceDrawer,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const basePath = import.meta.env.BASE_URL || './';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
        <nav className="cyber-glass rounded-2xl px-4 py-3 sm:px-6 sm:py-3.5 flex items-center justify-between border border-stroke/40 shadow-2xl">
          {/* Logo & School Branding */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => goToChapter(0)}
          >
            <img
              src={`${basePath}hongson-assets/logos/hongson-the-one.webp`}
              alt="HONGSON THE ONE Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-[0_0_12px_rgba(0,214,163,0.4)] transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold tracking-wider text-headline flex items-center gap-2">
                HONGSON THE ONE
                <span className="hidden md:inline-block px-2 py-0.5 text-[10px] uppercase font-semibold tracking-wider rounded bg-signal-emerald/10 text-signal-emerald border border-signal-emerald/20">
                  Super App
                </span>
              </span>
              <span className="text-[11px] text-secondary/90 font-light truncate max-w-[200px] sm:max-w-none">
                {SCHOOL_INFO.nameTh} · {SCHOOL_INFO.provinceTh}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1.5 text-xs">
            {CHAPTERS.slice(0, 6).map((chap) => (
              <button
                key={chap.id}
                onClick={() => goToChapter(chap.index)}
                className={`px-2.5 py-1.5 rounded-lg transition-all font-medium ${
                  currentChapter === chap.index
                    ? 'bg-signal-emerald/15 text-signal-emerald border border-signal-emerald/30 shadow-[0_0_10px_rgba(0,214,163,0.2)]'
                    : 'text-secondary hover:text-headline hover:bg-elevated/60'
                }`}
              >
                {chap.numberStr} {chap.eyebrow.split(' ')[0]}
              </button>
            ))}

            <div className="relative group">
              <button className="px-2.5 py-1.5 rounded-lg text-secondary hover:text-headline hover:bg-elevated/60 flex items-center gap-1 font-medium">
                เพิ่มเติม <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <div className="absolute right-0 top-full mt-2 w-56 cyber-glass-card rounded-xl p-2 hidden group-hover:block border border-stroke/40 shadow-xl">
                {CHAPTERS.slice(6).map((chap) => (
                  <button
                    key={chap.id}
                    onClick={() => goToChapter(chap.index)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all font-medium flex items-center justify-between ${
                      currentChapter === chap.index
                        ? 'bg-signal-cyan/15 text-signal-cyan font-bold'
                        : 'text-secondary hover:text-headline hover:bg-elevated/70'
                    }`}
                  >
                    <span>{chap.titleTh}</span>
                    <span className="text-[10px] text-secondary/60">{chap.numberStr}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Evidence Drawer Button */}
            <button
              onClick={openEvidenceDrawer}
              className="cyber-tag text-xs sm:text-xs py-1.5 px-2.5 sm:px-3 hover:bg-signal-emerald/20 transition-all cursor-pointer flex items-center gap-1.5"
              title="ตรวจสอบหลักฐานและที่มาของข้อมูล"
            >
              <FileCheck2 className="w-3.5 h-3.5 text-signal-emerald" />
              <span className="hidden sm:inline">หลักฐานอ้างอิง</span>
              <span className="sm:hidden">หลักฐาน</span>
            </button>

            {/* Mode Switcher Toggle */}
            <button
              onClick={toggleViewMode}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                viewMode === 'presentation'
                  ? 'bg-signal-cyan/20 border-signal-cyan/50 text-signal-cyan shadow-[0_0_12px_rgba(82,207,229,0.3)]'
                  : 'bg-elevated/80 border-stroke/40 text-secondary hover:text-headline'
              }`}
              title="สลับโหมดนำเสนอ / โหมดสำรวจ"
            >
              {viewMode === 'presentation' ? (
                <>
                  <Presentation className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">โหมดนำเสนอ</span>
                  <span className="sm:hidden">Present</span>
                </>
              ) : (
                <>
                  <Compass className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">โหมดสำรวจ</span>
                  <span className="sm:hidden">Explore</span>
                </>
              )}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-secondary hover:text-headline rounded-lg bg-elevated/50 border border-stroke/30"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto px-4 mt-2">
          <div className="cyber-glass-card rounded-2xl p-4 border border-stroke/40 max-h-[70vh] overflow-y-auto space-y-1">
            <div className="text-xs font-semibold text-secondary px-2 py-1 mb-1">
              เลือกบทที่ต้องการนำเสนอ (12 Chapters)
            </div>
            {CHAPTERS.map((chap) => (
              <button
                key={chap.id}
                onClick={() => {
                  goToChapter(chap.index);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-xs flex items-center justify-between ${
                  currentChapter === chap.index
                    ? 'bg-signal-emerald/20 text-signal-emerald font-semibold border border-signal-emerald/30'
                    : 'text-secondary hover:text-headline hover:bg-elevated/60'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-signal-cyan">{chap.numberStr}</span>
                  <span>{chap.titleTh}</span>
                </div>
                <span className="text-[10px] text-secondary/60">{chap.eyebrow.split(' ')[0]}</span>
              </button>
            ))}

            <div className="pt-3 border-t border-stroke/30 mt-3 flex items-center justify-between px-2">
              <a
                href={SCHOOL_INFO.superAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-signal-cyan flex items-center gap-1 hover:underline"
              >
                เข้าสู่ hongson.one <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-[11px] text-secondary/70">12 Nov 2026</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

