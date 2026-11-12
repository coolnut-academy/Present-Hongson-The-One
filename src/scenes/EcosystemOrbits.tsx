import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface EcosystemOrbitsProps {
  currentChapter: number;
}

const PILLAR_CONFIGS = [
  { name: 'WORK', color: '#00E599', angle: 0, distance: 3.4 },
  { name: 'LEARN', color: '#40D9FF', angle: Math.PI / 2, distance: 3.4 },
  { name: 'CREATE', color: '#B580FF', angle: Math.PI, distance: 3.4 },
  { name: 'SHARE', color: '#00E599', angle: (3 * Math.PI) / 2, distance: 3.4 },
];

export const EcosystemOrbits: React.FC<EcosystemOrbitsProps> = ({ currentChapter }) => {
  const groupRef = useRef<THREE.Group>(null);
  const isVisible = currentChapter >= 2 && currentChapter <= 4;

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const targetScale = isVisible ? 1 : 0.001;
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 2.5);
    if (!isVisible) return;
    groupRef.current.rotation.y += delta * 0.12;
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Precision Hairline Orbit Track */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3.38, 3.40, 64]} />
        <meshBasicMaterial color="#33333A" side={THREE.DoubleSide} transparent opacity={0.4} />
      </mesh>

      {/* 4 Pillar Technical Nodes */}
      {PILLAR_CONFIGS.map((pillar) => {
        const x = Math.cos(pillar.angle) * pillar.distance;
        const z = Math.sin(pillar.angle) * pillar.distance;

        return (
          <group key={pillar.name} position={[x, 0, z]}>
            <mesh>
              <octahedronGeometry args={[0.28, 0]} />
              <meshStandardMaterial
                color="#141418"
                wireframe={true}
                roughness={0.5}
                metalness={0.8}
              />
            </mesh>
            <mesh>
              <sphereGeometry args={[0.06, 12, 12]} />
              <meshBasicMaterial color={pillar.color} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
};
