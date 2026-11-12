import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface ProductPanelsProps {
  currentChapter: number;
}

export const ProductPanels: React.FC<ProductPanelsProps> = ({ currentChapter }) => {
  const groupRef = useRef<THREE.Group>(null);
  const isVisible = currentChapter === 7 || currentChapter === 8;

  const basePath = import.meta.env.BASE_URL || './';
  const textures = useTexture({
    dashboard: `${basePath}hongson-assets/screenshots/tfolio-dashboard.webp`,
    analytics: `${basePath}hongson-assets/screenshots/tfolio-analytics.webp`,
    approval: `${basePath}hongson-assets/screenshots/tfolio-approval.webp`,
  });

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const targetScale = isVisible ? 1 : 0.001;
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 2.5);
    if (!isVisible) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.position.y = Math.sin(t * 0.5) * 0.05;
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Precision Floating Plane with Hairline Border */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[3.2, 1.8]} />
        <meshBasicMaterial map={textures.dashboard} transparent opacity={0.65} />
      </mesh>
      <lineSegments position={[0, 0, 0.005]}>
        <edgesGeometry args={[new THREE.PlaneGeometry(3.205, 1.805)]} />
        <lineBasicMaterial color="#33333A" />
      </lineSegments>
    </group>
  );
};
