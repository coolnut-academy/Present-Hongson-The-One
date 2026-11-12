import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { CameraRig } from './CameraRig';
import { DigitalCore } from './DigitalCore';
import { EcosystemOrbits } from './EcosystemOrbits';
import { TfolioExploded } from './TfolioExploded';
import { ProductPanels } from './ProductPanels';
import { MetaverseLandscape } from './MetaverseLandscape';
import { EvidenceHologram } from './EvidenceHologram';
import { useDeviceCapabilities } from '../hooks/useDeviceCapabilities';

interface SceneCanvasProps {
  currentChapter: number;
  overallProgress: number;
}

export const SceneCanvas: React.FC<SceneCanvasProps> = ({
  currentChapter,
  overallProgress,
}) => {
  const { hasWebGL, isMobile, dpr } = useDeviceCapabilities();

  if (!hasWebGL) {
    return null;
  }

  return (
    <>
      {/* 3D Atmospheric Background Canvas - Subdued and Architectural */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30 transition-opacity duration-1000">
        <Canvas
          camera={{ position: [0, 0, 7.5], fov: isMobile ? 55 : 45 }}
          dpr={[1, Math.min(dpr, 1.5)]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
        >
          <Suspense fallback={null}>
            {/* Low-key Studio Lighting */}
            <ambientLight intensity={0.25} />
            <directionalLight position={[6, 8, 4]} intensity={0.5} color="#FFFFFF" />
            <directionalLight position={[-6, -4, -4]} intensity={0.2} color="#00E599" />

            {/* Camera Track Choreography */}
            <CameraRig
              currentChapter={currentChapter}
              overallProgress={overallProgress}
              isMobile={isMobile}
            />

            {/* Precision 3D Modules */}
            <DigitalCore currentChapter={currentChapter} overallProgress={overallProgress} />
            <EcosystemOrbits currentChapter={currentChapter} />
            <TfolioExploded currentChapter={currentChapter} />
            <ProductPanels currentChapter={currentChapter} />
            <MetaverseLandscape currentChapter={currentChapter} />
            <EvidenceHologram currentChapter={currentChapter} />
          </Suspense>
        </Canvas>
      </div>

      {/* Obsidian Scrim Vignette Overlay to ensure Foreground Content Dominance */}
      <div className="fixed inset-0 pointer-events-none z-[1] bg-[radial-gradient(ellipse_at_center,rgba(5,5,5,0.4)_0%,#050505_95%)]" />
      <div className="fixed inset-0 pointer-events-none z-[1] bg-gradient-to-b from-obsidian/70 via-transparent to-obsidian/85" />
    </>
  );
};
