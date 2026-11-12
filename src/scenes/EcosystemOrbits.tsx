import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface EcosystemOrbitsProps {
  currentChapter: number;
}

const PILLAR_CONFIGS = [
  { name: 'WORK', color: '#00D6A3', angle: 0, distance: 3.4 },
  { name: 'LEARN', color: '#52CFE5', angle: Math.PI / 2, distance: 3.4 },
  { name: 'CREATE', color: '#9673E6', angle: Math.PI, distance: 3.4 },
  { name: 'SHARE', color: '#00F0B5', angle: (3 * Math.PI) / 2, distance: 3.4 },
];

export const EcosystemOrbits: React.FC<EcosystemOrbitsProps> = ({ currentChapter }) => {
  const groupRef = useRef<THREE.Group>(null);
  const orbitRingRef = useRef<THREE.Mesh>(null);

  const isVisible = currentChapter >= 2 && currentChapter <= 4;

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    const targetScale = isVisible ? 1 : 0.001;
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 3);

    if (!isVisible) return;

    // Slow orbital rotation
    groupRef.current.rotation.y += delta * 0.2;

    if (orbitRingRef.current) {
      orbitRingRef.current.rotation.z += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Orbital Track Ring */}
      <mesh ref={orbitRingRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3.36, 3.44, 64]} />
        <meshBasicMaterial
          color="#1A3338"
          side={THREE.DoubleSide}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* 4 Pillar Orbiting Stations */}
      {PILLAR_CONFIGS.map((pillar, idx) => {
        const x = Math.cos(pillar.angle) * pillar.distance;
        const z = Math.sin(pillar.angle) * pillar.distance;

        return (
          <group key={pillar.name} position={[x, 0, z]}>
            {/* Station Diamond / Octahedron */}
            <mesh>
              <octahedronGeometry args={[0.38, 0]} />
              <meshStandardMaterial
                color={pillar.color}
                emissive={pillar.color}
                emissiveIntensity={0.8}
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>

            {/* Orbiting Halo */}
            <mesh rotation={[Math.PI / 3, 0, 0]}>
              <torusGeometry args={[0.55, 0.015, 8, 32]} />
              <meshBasicMaterial color={pillar.color} transparent opacity={0.7} />
            </mesh>

            {/* Pulsing Light */}
            <pointLight color={pillar.color} intensity={1.5} distance={4} />
          </group>
        );
      })}
    </group>
  );
};

