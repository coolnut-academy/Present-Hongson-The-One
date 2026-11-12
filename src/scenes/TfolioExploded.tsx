import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface TfolioExplodedProps {
  currentChapter: number;
}

const FOUR_R_LAYERS = [
  { key: 'RECORD', color: '#00E599', zOffset: -0.8 },
  { key: 'REVIEW', color: '#40D9FF', zOffset: -0.25 },
  { key: 'RETRIEVE', color: '#B580FF', zOffset: 0.25 },
  { key: 'REPORT', color: '#00E599', zOffset: 0.8 },
];

export const TfolioExploded: React.FC<TfolioExplodedProps> = ({ currentChapter }) => {
  const groupRef = useRef<THREE.Group>(null);
  const layersRef = useRef<(THREE.Group | null)[]>([]);

  const isVisible = currentChapter === 5 || currentChapter === 6;
  const isExploded = currentChapter === 6;

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const targetScale = isVisible ? 1 : 0.001;
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 2.5);

    if (!isVisible) return;

    groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.08;
    groupRef.current.rotation.x = 0.12 + Math.cos(state.clock.getElapsedTime() * 0.35) * 0.04;

    layersRef.current.forEach((layerGroup, i) => {
      if (!layerGroup) return;
      const targetZ = isExploded ? FOUR_R_LAYERS[i].zOffset : 0;
      layerGroup.position.z = THREE.MathUtils.lerp(layerGroup.position.z, targetZ, delta * 3);
    });
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {FOUR_R_LAYERS.map((layer, index) => (
        <group
          key={layer.key}
          ref={(el) => (layersRef.current[index] = el)}
          position={[0, 0, 0]}
        >
          {/* Smoked Sapphire Glass Plate */}
          <mesh>
            <boxGeometry args={[3.2, 1.9, 0.02]} />
            <meshStandardMaterial
              color="#0D0D10"
              roughness={0.1}
              metalness={0.8}
              transparent
              opacity={0.85}
            />
          </mesh>

          {/* Precision 1px Hairline Perimeter */}
          <lineSegments>
            <edgesGeometry args={[new THREE.BoxGeometry(3.205, 1.905, 0.025)]} />
            <lineBasicMaterial
              color={layer.color}
              transparent
              opacity={isExploded ? 0.6 : 0.25}
            />
          </lineSegments>
        </group>
      ))}
    </group>
  );
};
