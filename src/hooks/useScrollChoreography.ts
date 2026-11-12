import { useState, useEffect, useCallback, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ViewMode } from '../types';
import { CHAPTERS } from '../content/siteData';

gsap.registerPlugin(ScrollTrigger);

export interface ScrollChoreography {
  currentChapter: number;
  overallProgress: number;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  toggleViewMode: () => void;
  goToChapter: (index: number) => void;
  nextChapter: () => void;
  prevChapter: () => void;
  containerRef: React.RefObject<HTMLDivElement>;
}

export function useScrollChoreography(): ScrollChoreography {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [overallProgress, setOverallProgress] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>('explore');
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync scroll with GSAP ScrollTrigger
  useEffect(() => {
    // Read hash on mount if present
    const hash = window.location.hash.replace('#', '');
    const foundIndex = CHAPTERS.findIndex((c) => c.id === hash);
    if (foundIndex >= 0) {
      setCurrentChapter(foundIndex);
    }

    const sections = gsap.utils.toArray<HTMLElement>('.chapter-section');
    if (!sections.length) return;

    const triggers: ScrollTrigger[] = [];

    // Global scroll tracker
    const globalTrigger = ScrollTrigger.create({
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        setOverallProgress(self.progress);
      },
    });
    triggers.push(globalTrigger);

    // Chapter triggers
    sections.forEach((section, index) => {
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => {
          setCurrentChapter(index);
          window.history.replaceState(null, '', `#${CHAPTERS[index].id}`);
        },
        onEnterBack: () => {
          setCurrentChapter(index);
          window.history.replaceState(null, '', `#${CHAPTERS[index].id}`);
        },
      });
      triggers.push(trigger);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  const goToChapter = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(CHAPTERS.length - 1, index));
    const target = document.getElementById(CHAPTERS[clamped].id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setCurrentChapter(clamped);
      window.history.replaceState(null, '', `#${CHAPTERS[clamped].id}`);
    }
  }, []);

  const nextChapter = useCallback(() => {
    goToChapter(currentChapter + 1);
  }, [currentChapter, goToChapter]);

  const prevChapter = useCallback(() => {
    goToChapter(currentChapter - 1);
  }, [currentChapter, goToChapter]);

  const toggleViewMode = useCallback(() => {
    setViewMode((prev) => (prev === 'explore' ? 'presentation' : 'explore'));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is in an input or textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === 'Space') {
        if (e.key === 'Space' && viewMode === 'explore') return; // let space scroll naturally in explore
        e.preventDefault();
        nextChapter();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevChapter();
      } else if (e.key === 'p' || e.key === 'P') {
        toggleViewMode();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToChapter(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToChapter(CHAPTERS.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextChapter, prevChapter, toggleViewMode, goToChapter, viewMode]);

  return {
    currentChapter,
    overallProgress,
    viewMode,
    setViewMode,
    toggleViewMode,
    goToChapter,
    nextChapter,
    prevChapter,
    containerRef,
  };
}

