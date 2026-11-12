import React, { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { DeckSlideData } from '../content/deckSlides';

interface Deck3DBackgroundProps {
  currentSlide: DeckSlideData;
  activeSlideIndex: number;
  totalSlides: number;
  scrollProgress: number;
}

// Sub-component: Camera Rig that smoothly animates camera position & rotation based on scroll & active slide
const DynamicCameraRig: React.FC<{ activeSlideIndex: number; scrollProgress: number }> = ({
  activeSlideIndex,
  scrollProgress,
}) => {
  const { camera } = useThree();
  const currentPos = useRef(new THREE.Vector3(0, 0, 7.5));
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

  // Determine dynamic camera target based on slide index and continuous scroll
  useFrame((state, delta) => {
    // Determine dynamic offset: alternate slightly left/right/center to frame the slide nicely
    const cyclePos = (activeSlideIndex % 6);
    let targetX = 0;
    let targetY = 0;
    let targetZ = 7.2;
    let lookX = 0;
    let lookY = 0;

    switch (cyclePos) {
      case 0: // Centered hero
        targetX = 0;
        targetY = 0.2;
        targetZ = 7.0;
        lookX = 0;
        lookY = 0;
        break;
      case 1: // Angled right view (when showing problem/tension)
        targetX = 1.6;
        targetY = 0.8;
        targetZ = 7.6;
        lookX = 0.3;
        lookY = 0.1;
        break;
      case 2: // Angled left view (ecosystem view)
        targetX = -1.6;
        targetY = 0.5;
        targetZ = 7.4;
        lookX = -0.2;
        lookY = 0;
        break;
      case 3: // Elevated perspective (4R exploded view)
        targetX = 1.2;
        targetY = 1.4;
        targetZ = 6.8;
        lookX = 0;
        lookY = 0.2;
        break;
      case 4: // Close inspect
        targetX = -1.2;
        targetY = -0.4;
        targetZ = 6.5;
        lookX = -0.1;
        lookY = -0.1;
        break;
      case 5: // Wide panoramic
        targetX = 0;
        targetY = 1.8;
        targetZ = 8.2;
        lookX = 0;
        lookY = 0;
        break;
    }

    // Add continuous subtle scroll modulation
    const scrollWave = Math.sin(scrollProgress * Math.PI * 4) * 0.4;
    targetY += scrollWave;

    // Mouse parallax for tactile depth
    const mouseX = state.mouse.x * 0.5;
    const mouseY = state.mouse.y * 0.35;

    const destPos = new THREE.Vector3(targetX + mouseX, targetY + mouseY, targetZ);
    const destLookAt = new THREE.Vector3(lookX, lookY, 0);

    const lerpSpeed = Math.min(delta * 2.2, 1);
    currentPos.current.lerp(destPos, lerpSpeed);
    currentLookAt.current.lerp(destLookAt, lerpSpeed);

    camera.position.copy(currentPos.current);
    camera.lookAt(currentLookAt.current);
  });

  return null;
};

// Sub-component: The 3D Multi-State Apparatus that transforms behind the slides
const Apparatus: React.FC<{
  mode: DeckSlideData['scene3dMode'];
  activeSlideIndex: number;
  scrollProgress: number;
}> = ({ mode, activeSlideIndex, scrollProgress }) => {
  const mainGroup = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const layersRef = useRef<THREE.Group>(null);
  const neuralRef = useRef<THREE.Group>(null);
  const terrainRef = useRef<THREE.Group>(null);
  const cycleGroupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!mainGroup.current) return;

    // Continuous rotation driven by delta + scroll progress
    mainGroup.current.rotation.y += delta * 0.3 + scrollProgress * 0.05;

    // Gimbal Ring rotations
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.35;
      ring1Ref.current.rotation.y += delta * 0.25;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.3;
      ring2Ref.current.rotation.z += delta * 0.2;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x -= delta * 0.2;
      ring3Ref.current.rotation.z -= delta * 0.3;
    }

    // Central Core Pulse & Spin
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.45;
      coreRef.current.rotation.x += delta * 0.2;
    }

    // 4R Layers floating wave
    if (layersRef.current) {
      layersRef.current.rotation.y = Math.sin(Date.now() * 0.0012) * 0.35;
      layersRef.current.position.y = Math.cos(Date.now() * 0.001) * 0.15;
    }

    // Neural Lattice gentle oscillation
    if (neuralRef.current) {
      neuralRef.current.rotation.x = Math.sin(Date.now() * 0.001) * 0.25;
      neuralRef.current.rotation.y += delta * 0.2;
    }

    // Terrain grid slow rotation
    if (terrainRef.current) {
      terrainRef.current.rotation.z += delta * 0.12;
    }

    // Cycle group rotation
    if (cycleGroupRef.current) {
      cycleGroupRef.current.rotation.y += delta * 0.4;
    }
  });

  // Dynamic Theme Colors based on Mode
  const isProblem = mode === 'problem';
  const isTfolio = mode === 'tfolio' || mode === 'workflow4r';
  const isAI = mode === 'ai';
  const isMetaverse = mode === 'metaverse' || mode === 'makers';
  const isVision = mode === 'vision';

  const primaryAccent = isProblem
    ? '#FF453A' // Bright crimson for problem/fragmentation
    : isTfolio
    ? '#0A84FF' // Electric Sapphire Blue for T-Folio & 4R
    : isAI
    ? '#BF5AF2' // Neon Violet for AI workshop
    : isMetaverse
    ? '#FFD60A' // Solar Amber for Metaverse & Robotics
    : isVision
    ? '#FF9F0A' // Grand Titanium Gold for Closing Vision
    : '#30D158'; // Emerald Mint for Platform & Ecosystem

  const ringColor = '#3A3A3E';
  const ringMetal = 0.95;
  const ringRough = 0.15;

  return (
    <group ref={mainGroup} position={[0, 0, 0]}>
      {/* 1. CENTRAL GYROSCOPIC CORE */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[mode === 'problem' ? 1.4 : mode === 'vision' ? 1.45 : 1.1, 1]} />
        <meshStandardMaterial
          color={primaryAccent}
          emissive={primaryAccent}
          emissiveIntensity={isProblem ? 0.9 : 0.45}
          wireframe={true}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Central Solid Inner Gem */}
      <mesh>
        <octahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial
          color="#FFFFFF"
          emissive={primaryAccent}
          emissiveIntensity={0.65}
          roughness={0.1}
          metalness={0.95}
        />
      </mesh>

      {/* 2. PRECISION CONCENTRIC GIMBAL RINGS */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[isProblem ? 2.4 : 1.95, 0.04, 16, 64]} />
        <meshStandardMaterial color={ringColor} metalness={ringMetal} roughness={ringRough} />
      </mesh>

      <mesh ref={ring2Ref}>
        <torusGeometry args={[isProblem ? 2.9 : 2.45, 0.03, 16, 64]} />
        <meshStandardMaterial color={ringColor} metalness={ringMetal} roughness={ringRough} />
      </mesh>

      <mesh ref={ring3Ref}>
        <torusGeometry args={[isProblem ? 3.4 : 2.9, 0.025, 16, 64]} />
        <meshStandardMaterial
          color={primaryAccent}
          emissive={primaryAccent}
          emissiveIntensity={0.35}
          metalness={0.95}
          roughness={0.15}
        />
      </mesh>

      {/* 3. MODE: 4 PILLARS ORBITS (Slides 5-6) */}
      {mode === 'orbits' && (
        <group>
          {[0, 1, 2, 3].map((idx) => {
            const angle = (idx * Math.PI) / 2;
            const dist = 3.4;
            const colors = ['#30D158', '#0A84FF', '#BF5AF2', '#FF9F0A'];
            return (
              <group key={idx} position={[Math.cos(angle) * dist, Math.sin(angle) * dist, 0]}>
                <mesh>
                  <sphereGeometry args={[0.32, 16, 16]} />
                  <meshStandardMaterial color={colors[idx]} emissive={colors[idx]} emissiveIntensity={0.85} />
                </mesh>
                <mesh>
                  <ringGeometry args={[0.42, 0.46, 32]} />
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
          {[-1.3, -0.45, 0.45, 1.3].map((zPos, i) => {
            const colors = ['#30D158', '#0A84FF', '#BF5AF2', '#FFD60A'];
            return (
              <group key={i} position={[0, 0, zPos]}>
                {/* Floating Glass Plate */}
                <mesh>
                  <boxGeometry args={[3.4, 2.1, 0.04]} />
                  <meshPhysicalMaterial
                    color={colors[i]}
                    transparent={true}
                    opacity={0.4}
                    roughness={0.1}
                    metalness={0.2}
                    transmission={0.85}
                    thickness={0.5}
                  />
                </mesh>
                {/* Machined Bevel Frame */}
                <lineSegments>
                  <edgesGeometry args={[new THREE.BoxGeometry(3.4, 2.1, 0.04)]} />
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
            [-1.6, 1.3, -0.5],
            [1.6, 1.3, 0.5],
            [-1.3, -1.3, 0.8],
            [1.3, -1.1, -0.8],
            [0, 1.9, 0],
            [0, -1.9, 0],
          ].map((pos, i) => (
            <mesh key={i} position={pos as [number, number, number]}>
              <octahedronGeometry args={[0.26, 0]} />
              <meshStandardMaterial color="#BF5AF2" emissive="#BF5AF2" emissiveIntensity={0.85} />
            </mesh>
          ))}
          {/* Outer Energy Torus */}
          <mesh rotation={[Math.PI / 4, 0, 0]}>
            <torusGeometry args={[3.4, 0.018, 16, 64]} />
            <meshBasicMaterial color="#BF5AF2" />
          </mesh>
        </group>
      )}

      {/* 6. MODE: METAVERSE & MAKERS (Slides 16-20, 24) */}
      {(mode === 'metaverse' || mode === 'makers') && (
        <group ref={terrainRef} position={[0, -0.6, 0]}>
          <gridHelper args={[8, 16, primaryAccent, '#333333']} position={[0, -0.9, 0]} />
          {/* Glowing Beacon Monoliths */}
          {[-1.8, 0, 1.8].map((x, i) => (
            <mesh key={i} position={[x, 0.3, (i - 1) * 1.3]}>
              <boxGeometry args={[0.28, 1.8 + i * 0.4, 0.28]} />
              <meshStandardMaterial
                color={primaryAccent}
                emissive={primaryAccent}
                emissiveIntensity={0.65}
                roughness={0.2}
                metalness={0.9}
              />
            </mesh>
          ))}
        </group>
      )}

      {/* 7. MODE: INNOVATION CYCLE & APP CENTER (Slides 21-23) */}
      {(mode === 'cycle' || mode === 'appcenter' || mode === 'creator') && (
        <group ref={cycleGroupRef}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[3.2, 0.045, 16, 64]} />
            <meshStandardMaterial color="#30D158" emissive="#30D158" emissiveIntensity={0.55} />
          </mesh>
          {[0, 1, 2, 3, 4].map((step) => {
            const angle = (step * (Math.PI * 2)) / 5;
            return (
              <mesh key={step} position={[Math.cos(angle) * 3.2, 0, Math.sin(angle) * 3.2]}>
                <sphereGeometry args={[0.22, 16, 16]} />
                <meshStandardMaterial color="#FFFFFF" emissive="#30D158" emissiveIntensity={0.95} />
              </mesh>
            );
          })}
        </group>
      )}

      {/* 8. MODE: GRAND CONVERGENCE MONUMENT (Slides 25-27) */}
      {mode === 'vision' && (
        <group>
          {/* Dual Monument Wings */}
          <mesh position={[-0.9, 0, 0]} rotation={[0, 0.2, 0]}>
            <cylinderGeometry args={[0.08, 0.28, 4.4, 16]} />
            <meshStandardMaterial color="#FF9F0A" metalness={0.95} roughness={0.15} />
          </mesh>
          <mesh position={[0.9, 0, 0]} rotation={[0, -0.2, 0]}>
            <cylinderGeometry args={[0.08, 0.28, 4.4, 16]} />
            <meshStandardMaterial color="#FF9F0A" metalness={0.95} roughness={0.15} />
          </mesh>
          {/* Golden Orbit Ring */}
          <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
            <torusGeometry args={[3.6, 0.035, 16, 80]} />
            <meshStandardMaterial
              color="#FFD60A"
              emissive="#FF9F0A"
              emissiveIntensity={0.65}
              metalness={0.95}
              roughness={0.1}
            />
          </mesh>
        </group>
      )}

      {/* High-Key Studio Point Lights */}
      <pointLight color={primaryAccent} intensity={2.8} distance={12} position={[0, 0, 2.5]} />
      <pointLight color="#FFFFFF" intensity={1.8} distance={10} position={[0, 4, -2.5]} />
    </group>
  );
};

export const Deck3DBackground: React.FC<Deck3DBackgroundProps> = ({
  currentSlide,
  activeSlideIndex,
  totalSlides,
  scrollProgress,
}) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#050505]">
      {/* 3D WebGL Canvas Layer - Crisp, Vivid & Highly Illuminated */}
      <Canvas
        camera={{ position: [0, 0, 7.2], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        {/* Studio Lighting Rig */}
        <ambientLight intensity={0.85} />
        <directionalLight position={[6, 8, 6]} intensity={2.2} color="#FFFFFF" />
        <directionalLight position={[-6, -4, -4]} intensity={1.6} color="#00E599" />
        <directionalLight position={[0, 6, -3]} intensity={1.2} color="#00C4FF" />
        <directionalLight position={[0, -5, 4]} intensity={0.9} color="#FFFFFF" />

        {/* Dynamic Camera Tracking based on Slide Index & Scroll */}
        <DynamicCameraRig activeSlideIndex={activeSlideIndex} scrollProgress={scrollProgress} />

        {/* Dynamic 3D Apparatus */}
        <Suspense fallback={null}>
          <Apparatus
            mode={currentSlide.scene3dMode}
            activeSlideIndex={activeSlideIndex}
            scrollProgress={scrollProgress}
          />
        </Suspense>
      </Canvas>

      {/* Very subtle ambient radial vignette to enhance foreground text contrast without darkening the 3D model */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,5,5,0.75)_95%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-transparent to-[#050505]/70 pointer-events-none" />
    </div>
  );
};
