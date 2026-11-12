import React, { useState } from 'react';
import { useScrollChoreography } from './hooks/useScrollChoreography';
import { useDeviceCapabilities } from './hooks/useDeviceCapabilities';
import { SceneCanvas } from './scenes/SceneCanvas';
import { Navbar } from './components/Navbar';
import { PresentationControls } from './components/PresentationControls';
import { EvidenceDrawer } from './components/EvidenceDrawer';
import { FallbackNotice } from './components/FallbackNotice';

import { Chapter00Genesis } from './chapters/Chapter00Genesis';
import { Chapter01Problem } from './chapters/Chapter01Problem';
import { Chapter02Ecosystem } from './chapters/Chapter02Ecosystem';
import { Chapter03Pillars } from './chapters/Chapter03Pillars';
import { Chapter04Access } from './chapters/Chapter04Access';
import { Chapter05Tfolio } from './chapters/Chapter05Tfolio';
import { Chapter06FourR } from './chapters/Chapter06FourR';
import { Chapter07Tour } from './chapters/Chapter07Tour';
import { Chapter08Governance } from './chapters/Chapter08Governance';
import { Chapter09Metaverse } from './chapters/Chapter09Metaverse';
import { Chapter10Evidence } from './chapters/Chapter10Evidence';
import { Chapter11Future } from './chapters/Chapter11Future';

export const App: React.FC = () => {
  const {
    currentChapter,
    overallProgress,
    viewMode,
    toggleViewMode,
    goToChapter,
    nextChapter,
    prevChapter,
    containerRef,
  } = useScrollChoreography();

  const { hasWebGL, prefersReducedMotion } = useDeviceCapabilities();
  const [evidenceDrawerOpen, setEvidenceDrawerOpen] = useState(false);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-void text-headline">
      {/* 3D WebGL Background Scene */}
      <SceneCanvas
        currentChapter={currentChapter}
        overallProgress={overallProgress}
      />

      {/* 2D Fallback for Low-Power or Reduced Motion Devices */}
      <FallbackNotice
        hasWebGL={hasWebGL}
        prefersReducedMotion={prefersReducedMotion}
      />

      {/* Top Navigation Bar */}
      <Navbar
        currentChapter={currentChapter}
        viewMode={viewMode}
        toggleViewMode={toggleViewMode}
        goToChapter={goToChapter}
        openEvidenceDrawer={() => setEvidenceDrawerOpen(true)}
      />

      {/* Main Narrative Chapters (12 Chapters) */}
      <main className="relative z-10">
        <Chapter00Genesis onExploreClick={() => goToChapter(1)} />
        <Chapter01Problem />
        <Chapter02Ecosystem />
        <Chapter03Pillars />
        <Chapter04Access />
        <Chapter05Tfolio />
        <Chapter06FourR />
        <Chapter07Tour />
        <Chapter08Governance />
        <Chapter09Metaverse />
        <Chapter10Evidence openEvidenceDrawer={() => setEvidenceDrawerOpen(true)} />
        <Chapter11Future
          openEvidenceDrawer={() => setEvidenceDrawerOpen(true)}
          onReturnToTop={() => goToChapter(0)}
        />
      </main>

      {/* Presentation Controls Bar (Bottom) */}
      <PresentationControls
        currentChapter={currentChapter}
        nextChapter={nextChapter}
        prevChapter={prevChapter}
        goToChapter={goToChapter}
        isPresentationMode={viewMode === 'presentation'}
      />

      {/* Evidence & Provenance Drawer Modal */}
      <EvidenceDrawer
        isOpen={evidenceDrawerOpen}
        onClose={() => setEvidenceDrawerOpen(false)}
      />
    </div>
  );
};

export default App;

