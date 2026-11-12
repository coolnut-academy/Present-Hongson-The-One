import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { DeckSlideData } from '../content/deckSlides';

interface Deck3DStageProps {
  currentSlide: DeckSlideData;
  activeSlideIndex: number;
  totalSlides: number;
}

// Sub-component: The Dynamic Multi-State 3D Apparatus
const Apparatus: React.FC<{ mode: DeckSlideData['scene3dMode']; activeIndex: number }> = ({ mode, activeIndex }) => {
  const mainGroup = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const layersRef = useRef<THREE.Group>(null);
  const neuralRef = useRef<THREE.Group>(null);
  const terrainRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!mainGroup.current) return;

    // Gentle global hover float
    mainGroup.current.rotation.y += delta * 0.35;

    // Horology Rings Rotation
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.4;
      ring1Ref.current.rotation.y += delta * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.35;
      ring2Ref.current.rotation.z += delta * 0.25;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x -= delta * 0.25;
      ring3Ref.current.rotation.z -= delta * 0.35;
    }

    // Core pulsing & spin
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.5;
      coreRef.current.rotation.x += delta * 0.2;
    }

    // 4R Layer floating depth
    if (layersRef.current) {
      layersRef.current.rotation.y = Math.sin(Date.now() * 0.001) * 0.25;
    }

    // Neural lattice subtle sway
    if (neuralRef.current) {
      neuralRef.current.rotation.x = Math.sin(Date.now() * 0.0015) * 0.2;
      neuralRef.current.rotation.z = Math.cos(Date.now() * 0.0012) * 0.15;
    }

    // Terrain grid slow wave
    if (terrainRef.current) {
      terrainRef.current.rotation.z += delta * 0.15;
    }
  });

  // Dynamic Theme Colors based on Mode
  const isProblem = mode === 'problem';
  const isTfolio = mode === 'tfolio' || mode === 'workflow4r';
  const isAI = mode === 'ai';
  const isMetaverse = mode === 'metaverse' || mode === 'makers';
  const isVision = mode === 'vision';

  const primaryAccent = isProblem
    ? '#FF453A' // Bright crimson
    : isTfolio
    ? '#0A84FF' // Electric Sapphire Blue
    : isAI
    ? '#BF5AF2' // Neon Violet
    : isMetaverse
    ? '#FFD60A' // Solar Amber
    : isVision
    ? '#FF9F0A' // Grand Titanium Gold
    : '#30D158'; // Emerald Mint

  const ringColor = '#48484A';
  const ringMetal = 0.95;
  const ringRough = 0.18;

  return (
    <group ref={mainGroup} position={[0, 0, 0]}>
      {/* 1. CENTRAL GYROSCOPIC CORE (Always subtly active or morphing) */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[mode === 'problem' ? 1.3 : mode === 'vision' ? 1.4 : 1.05, 1]} />
        <meshStandardMaterial
          color={primaryAccent}
          emissive={primaryAccent}
          emissiveIntensity={isProblem ? 0.9 : 0.45}
          wireframe={true}
          roughness={0.25}
          metalness={0.9}
        />
      </mesh>

      {/* Central Solid Inner Gem */}
      <mesh>
        <octahedronGeometry args={[0.55, 0]} />
        <meshStandardMaterial
          color="#FFFFFF"
          emissive={primaryAccent}
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.95}
        />
      </mesh>

      {/* 2. PRECISION CONCENTRIC GIMBAL RINGS */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[isProblem ? 2.3 : 1.85, 0.035, 16, 64]} />
        <meshStandardMaterial color={ringColor} metalness={ringMetal} roughness={ringRough} />
      </mesh>

      <mesh ref={ring2Ref}>
        <torusGeometry args={[isProblem ? 2.8 : 2.3, 0.028, 16, 64]} />
        <meshStandardMaterial color={ringColor} metalness={ringMetal} roughness={ringRough} />
      </mesh>

      <mesh ref={ring3Ref}>
        <torusGeometry args={[isProblem ? 3.3 : 2.75, 0.022, 16, 64]} />
        <meshStandardMaterial color={primaryAccent} emissive={primaryAccent} emissiveIntensity={0.3} metalness={0.9} roughness={0.2} />
      </mesh>

      {/* 3. MODE: 4 PILLARS ORBITS (Slides 5-6) */}
      {mode === 'orbits' && (
        <group>
          {[0, 1, 2, 3].map((idx) => {
            const angle = (idx * Math.PI) / 2;
            const dist = 3.2;
            const colors = ['#30D158', '#0A84FF', '#BF5AF2', '#FF9F0A'];
            return (
              <group key={idx} position={[Math.cos(angle) * dist, Math.sin(angle) * dist, 0]}>
                <mesh>
                  <sphereGeometry args={[0.28, 16, 16]} />
                  <meshStandardMaterial color={colors[idx]} emissive={colors[idx]} emissiveIntensity={0.8} />
                </mesh>
                <mesh>
                  <ringGeometry args={[0.38, 0.42, 32]} />
                  <meshBasicMaterial color={colors[idx]} side={THREE.DoubleSide} />
                </mesh>
              </group>
            );
          })}
        </group>
      )}

      {/* 4. MODE: 4R EXPLODED Z-AXIS APPARATUS (Slides 7-12) */}
      {(mode === 'tfolio' || mode === 'workflow4r') && (
        <group ref={layersRef}>
          {[-1.2, -0.4, 0.4, 1.2].map((zPos, i) => {
            const labels = ['RECORD', 'REVIEW', 'RETRIEVE', 'REPORT'];
            const colors = ['#30D158', '#0A84FF', '#BF5AF2', '#FFD60A'];
            return (
              <group key={i} position={[0, 0, zPos]}>
                {/* Floating Glass Plate */}
                <mesh>
                  <boxGeometry args={[3.2, 2.0, 0.04]} />
                  <meshPhysicalMaterial
                    color={colors[i]}
                    transparent={true}
                    opacity={0.35}
                    roughness={0.1}
                    metalness={0.2}
                    transmission={0.8}
                    thickness={0.5}
                  />
                </mesh>
                {/* Machined Bevel Frame */}
                <lineSegments>
                  <edgesGeometry args={[new THREE.BoxGeometry(3.2, 2.0, 0.04)]} />
                  <lineBasicMaterial color={colors[i]} linewidth={2} />
                </lineSegments>
              </group>
            );
          })}
        </group>
      )}

      {/* 5. MODE: AI NEURAL LATTICE (Slides 13-15) */}
      {(mode === 'ai' || mode === 'learn') && (
        <group ref={neuralRef}>
          {[
            [-1.5, 1.2, -0.5],
            [1.5, 1.2, 0.5],
            [-1.2, -1.2, 0.8],
            [1.2, -1.0, -0.8],
            [0, 1.8, 0],
            [0, -1.8, 0],
          ].map((pos, i) => (
            <mesh key={i} position={pos as [number, number, number]}>
              <octahedronGeometry args={[0.22, 0]} />
              <meshStandardMaterial color="#BF5AF2" emissive="#BF5AF2" emissiveIntensity={0.8} />
            </mesh>
          ))}
          {/* Outer Energy Torus */}
          <mesh rotation={[Math.PI / 4, 0, 0]}>
            <torusGeometry args={[3.2, 0.015, 16, 64]} />
            <meshBasicMaterial color="#BF5AF2" />
          </mesh>
        </group>
      )}

      {/* 6. MODE: METAVERSE & MAKERS (Slides 16-20, 24) */}
      {(mode === 'metaverse' || mode === 'makers') && (
        <group ref={terrainRef} position={[0, -0.6, 0]}>
          <gridHelper args={[7, 14, primaryAccent, '#333333']} position={[0, -0.8, 0]} />
          {/* Glowing Beacon Monoliths */}
          {[-1.5, 0, 1.5].map((x, i) => (
            <mesh key={i} position={[x, 0.2, (i - 1) * 1.2]}>
              <boxGeometry args={[0.25, 1.6 + i * 0.4, 0.25]} />
              <meshStandardMaterial
                color={primaryAccent}
                emissive={primaryAccent}
                emissiveIntensity={0.6}
                roughness={0.2}
                metalness={0.9}
              />
            </mesh>
          ))}
        </group>
      )}

      {/* 7. MODE: INNOVATION CYCLE & APP CENTER (Slides 21-23) */}
      {(mode === 'cycle' || mode === 'appcenter' || mode === 'creator') && (
        <group>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[3.0, 0.04, 16, 64]} />
            <meshStandardMaterial color="#30D158" emissive="#30D158" emissiveIntensity={0.5} />
          </mesh>
          {[0, 1, 2, 3, 4].map((step) => {
            const angle = (step * (Math.PI * 2)) / 5;
            return (
              <mesh key={step} position={[Math.cos(angle) * 3.0, 0, Math.sin(angle) * 3.0]}>
                <sphereGeometry args={[0.2, 16, 16]} />
                <meshStandardMaterial color="#FFFFFF" emissive="#30D158" emissiveIntensity={0.9} />
              </mesh>
            );
          })}
        </group>
      )}

      {/* 8. MODE: GRAND CONVERGENCE MONUMENT (Slides 25-27) */}
      {mode === 'vision' && (
        <group>
          {/* Dual Monument Wings */}
          <mesh position={[-0.8, 0, 0]} rotation={[0, 0.2, 0]}>
            <cylinderGeometry args={[0.08, 0.25, 4.2, 16]} />
            <meshStandardMaterial color="#FF9F0A" metalness={0.95} roughness={0.15} />
          </mesh>
          <mesh position={[0.8, 0, 0]} rotation={[0, -0.2, 0]}>
            <cylinderGeometry args={[0.08, 0.25, 4.2, 16]} />
            <meshStandardMaterial color="#FF9F0A" metalness={0.95} roughness={0.15} />
          </mesh>
          {/* Golden Orbit Ring */}
          <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
            <torusGeometry args={[3.4, 0.03, 16, 80]} />
            <meshStandardMaterial color="#FFD60A" emissive="#FF9F0A" emissiveIntensity={0.6} metalness={0.95} roughness={0.1} />
          </mesh>
        </group>
      )}

      {/* Illuminated Studio Point Light following the primary accent */}
      <pointLight color={primaryAccent} intensity={2.5} distance={10} position={[0, 0, 2]} />
      <pointLight color="#FFFFFF" intensity={1.5} distance={8} position={[0, 3, -2]} />
    </group>
  );
};

export const Deck3DStage: React.FC<Deck3DStageProps> = ({
  currentSlide,
  activeSlideIndex,
  totalSlides,
}) => {
  return (
    <div className="relative w-full h-full flex flex-col bg-[#070709] select-none overflow-hidden">
      {/* Top Precision HUD Bar */}
      <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-5 py-3.5 border-b border-white/10 backdrop-blur-md bg-[#070709]/75">
        <div className="flex items-center space-x-3">
          <div className="relative flex items-center justify-center w-2.5 h-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </div>
          <span className="font-mono text-[11px] font-semibold tracking-[0.2em] uppercase text-white/90">
            {currentSlide.sectionLabel}
          </span>
        </div>

        <div className="flex items-center space-x-2 font-mono text-[11px] text-white/70">
          <span className="text-emerald-400 font-bold">
            {String(currentSlide.slideNumber).padStart(2, '0')}
          </span>
          <span className="text-white/30">/</span>
          <span>{String(totalSlides).padStart(2, '0')}</span>
        </div>
      </div>

      {/* Main 3D Canvas Viewport (High Illumination, 100% Opacity) */}
      <div className="relative w-full flex-1">
        <Canvas
          camera={{ position: [0, 0, 6.8], fov: 45 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
        >
          {/* Studio Lighting Rig - Bright, Crystal Clear & Metallic */}
          <ambientLight intensity={0.9} />
          <directionalLight position={[6, 8, 6]} intensity={2.2} color="#FFFFFF" />
          <directionalLight position={[-6, -4, -4]} intensity={1.5} color="#00E599" />
          <directionalLight position={[0, 6, -3]} intensity={1.2} color="#00C4FF" />
          <directionalLight position={[0, -5, 4]} intensity={0.8} color="#FFFFFF" />

          {/* Interactive Apparatus */}
          <Suspense fallback={null}>
            <Apparatus mode={currentSlide.scene3dMode} activeIndex={activeSlideIndex} />
          </Suspense>

          {/* Allow user to orbit & explore apparatus */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            maxPolarAngle={Math.PI / 1.7}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>

        {/* Technical Coordinate Crosshairs (Machined Luxury Aesthetic) */}
        <div className="pointer-events-none absolute inset-x-5 top-14 bottom-14 flex flex-col justify-between border border-white/[0.04]">
          <div className="flex justify-between p-2">
            <span className="font-mono text-[9px] text-white/30 tracking-widest">STAGE // 3D-GL</span>
            <span className="font-mono text-[9px] text-white/30 tracking-widest">60 FPS</span>
          </div>
          <div className="flex justify-between p-2">
            <span className="font-mono text-[9px] text-emerald-400/60 tracking-widest">
              MODE: {currentSlide.scene3dMode.toUpperCase()}
            </span>
            <span className="font-mono text-[9px] text-white/30 tracking-widest">INTERACTIVE</span>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry & Navigation Guide */}
      <div className="relative z-20 px-5 py-3 border-t border-white/10 backdrop-blur-md bg-[#070709]/75 flex items-center justify-between">
        <div className="text-[11px] text-white/60 font-mono flex items-center space-x-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>DRAG 3D MODEL TO INSPECT</span>
        </div>

        {/* Progress Segment Indicator */}
        <div className="flex space-x-0.5">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-none transition-all duration-300 ${
                i === activeSlideIndex
                  ? 'w-4 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]'
                  : i < activeSlideIndex
                  ? 'w-1.5 bg-white/40'
                  : 'w-1 bg-white/10'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

