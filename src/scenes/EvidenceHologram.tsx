import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface EvidenceHologramProps {
  currentChapter: number;
}

export const EvidenceHologram: React.FC<EvidenceHologramProps> = ({ currentChapter }) => {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const isVisible = currentChapter === 10 || currentChapter === 11;

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const targetScale = isVisible ? 1.0 : 0.001;
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 2.5);
    if (!isVisible) return;
    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <mesh ref={sphereRef}>
        <sphereGeometry args={[1.3, 20, 20]} />
        <meshStandardMaterial
          color="#222228"
          wireframe={true}
          roughness={0.6}
          metalness={0.7}
        />
      </mesh>
    </group>
  );
};
