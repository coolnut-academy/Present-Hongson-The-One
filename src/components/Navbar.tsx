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
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
        <nav className="precision-surface-glass px-4 py-3 sm:px-6 sm:py-3 flex items-center justify-between">
          {/* Logo & School Branding */}
          <div
            className="flex items-center gap-3.5 cursor-pointer group"
            onClick={() => goToChapter(0)}
          >
            <img
              src={`${basePath}hongson-assets/logos/hongson-the-one.webp`}
              alt="HONGSON THE ONE"
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-opacity group-hover:opacity-80"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold tracking-[-0.02em] text-white">
                  HONGSON THE ONE
                </span>
                <span className="inline-block w-1 h-1 rounded-full bg-signal-emerald" />
                <span className="text-[10px] font-mono tracking-[0.15em] uppercase text-silver-muted hidden sm:inline">
                  EDTECH // HOROLOGY
                </span>
              </div>
              <span className="text-[11px] text-silver font-light truncate max-w-[220px] sm:max-w-none">
                {SCHOOL_INFO.nameTh} · {SCHOOL_INFO.provinceTh}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 font-mono text-[11px] tracking-[0.12em]">
            {CHAPTERS.slice(0, 6).map((chap) => (
              <button
                key={chap.id}
                onClick={() => goToChapter(chap.index)}
                className={`px-3 py-1.5 transition-colors uppercase ${
                  currentChapter === chap.index
                    ? 'text-white border-b border-signal-emerald font-semibold'
                    : 'text-silver hover:text-white'
                }`}
              >
                {chap.numberStr} {chap.eyebrow.split(' ')[0]}
              </button>
            ))}

            <div className="relative group">
              <button className="px-3 py-1.5 text-silver hover:text-white flex items-center gap-1 uppercase">
                <span>MORE</span> <ChevronDown className="w-3 h-3 text-silver-muted" />
              </button>
              <div className="absolute right-0 top-full mt-1.5 w-60 precision-surface p-1.5 hidden group-hover:block shadow-2xl">
                {CHAPTERS.slice(6).map((chap) => (
                  <button
                    key={chap.id}
                    onClick={() => goToChapter(chap.index)}
                    className={`w-full text-left px-3 py-2 text-xs transition-colors flex items-center justify-between ${
                      currentChapter === chap.index
                        ? 'text-white bg-white/[0.04] font-medium'
                        : 'text-silver hover:text-white hover:bg-white/[0.02]'
                    }`}
                  >
                    <span className="truncate pr-2">{chap.titleTh}</span>
                    <span className="font-mono text-[10px] text-silver-muted">{chap.numberStr}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Precision Controls */}
          <div className="flex items-center gap-2.5">
            {/* Evidence Drawer Button */}
            <button
              onClick={openEvidenceDrawer}
              className="precision-tag px-3 py-1.5 bg-surface border border-white/[0.08] border-t-white/[0.18] rounded-[2px] text-silver hover:text-white hover:border-white/[0.2] transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-signal-emerald" />
              <span className="hidden sm:inline">EVIDENCE ARCHIVE</span>
              <span className="sm:hidden">ARCHIVE</span>
            </button>

            {/* Mode Switcher */}
            <button
              onClick={toggleViewMode}
              className={`font-mono text-[11px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-[2px] border transition-colors flex items-center gap-1.5 ${
                viewMode === 'presentation'
                  ? 'bg-white/[0.08] border-white/[0.25] text-white'
                  : 'bg-surface border-white/[0.08] text-silver hover:text-white'
              }`}
            >
              {viewMode === 'presentation' ? (
                <>
                  <Presentation className="w-3 h-3 text-signal-cyan" />
                  <span className="hidden sm:inline">PRESENT</span>
                </>
              ) : (
                <>
                  <Compass className="w-3 h-3 text-silver" />
                  <span className="hidden sm:inline">EXPLORE</span>
                </>
              )}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-silver hover:text-white rounded-[2px] border border-white/[0.08] bg-surface"
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
          <div className="precision-surface p-4 shadow-2xl space-y-1">
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-silver-muted px-2 py-1 mb-2 hairline-b pb-2">
              SELECT SECTION // 12 CHAPTERS
            </div>
            {CHAPTERS.map((chap) => (
              <button
                key={chap.id}
                onClick={() => {
                  goToChapter(chap.index);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors ${
                  currentChapter === chap.index
                    ? 'text-white bg-white/[0.06] font-medium'
                    : 'text-silver hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-[10px] text-signal-emerald">{chap.numberStr}</span>
                  <span>{chap.titleTh}</span>
                </div>
                <span className="font-mono text-[10px] text-silver-muted">{chap.eyebrow.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
