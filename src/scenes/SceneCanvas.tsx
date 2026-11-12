import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
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

  // If WebGL is not supported, return null (fallback will be rendered in HTML)
  if (!hasWebGL) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: isMobile ? 55 : 45 }}
        dpr={[1, dpr]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={0.8} color="#F5FAF8" />
          <directionalLight position={[-10, -5, -5]} intensity={0.5} color="#52CFE5" />
          <pointLight position={[0, -4, 2]} intensity={0.6} color="#00D6A3" />

          {/* Subdued ambient space particles */}
          <Sparkles
            count={isMobile ? 40 : 90}
            scale={12}
            size={isMobile ? 1.5 : 2.2}
            speed={0.3}
            color="#52CFE5"
            opacity={0.35}
          />

          {/* Camera Animation Rig */}
          <CameraRig
            currentChapter={currentChapter}
            overallProgress={overallProgress}
            isMobile={isMobile}
          />

          {/* 3D Scene Modules */}
          <DigitalCore currentChapter={currentChapter} overallProgress={overallProgress} />
          <EcosystemOrbits currentChapter={currentChapter} />
          <TfolioExploded currentChapter={currentChapter} />
          <ProductPanels currentChapter={currentChapter} />
          <MetaverseLandscape currentChapter={currentChapter} />
          <EvidenceHologram currentChapter={currentChapter} />
        </Suspense>
      </Canvas>
    </div>
  );
};

