import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface MetaverseLandscapeProps {
  currentChapter: number;
}

export const MetaverseLandscape: React.FC<MetaverseLandscapeProps> = ({ currentChapter }) => {
  const groupRef = useRef<THREE.Group>(null);
  const isVisible = currentChapter === 9;

  const terrainGeo = useMemo(() => {
    const geo = new THREE.PlaneGeometry(12, 12, 32, 32);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const vx = pos.getX(i);
      const vy = pos.getY(i);
      const elevation =
        Math.sin(vx * 0.7) * Math.cos(vy * 0.7) * 0.8 +
        Math.sin(vx * 1.5 + vy * 1.2) * 0.25 -
        (vx * vx + vy * vy) * 0.03;
      pos.setZ(i, elevation);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const targetScale = isVisible ? 1 : 0.001;
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 2);
    if (!isVisible) return;
    groupRef.current.rotation.y += delta * 0.04;
  });

  return (
    <group ref={groupRef} position={[0, -1.2, 0]}>
      {/* Matte Obsidian Wireframe Topography */}
      <mesh geometry={terrainGeo} rotation={[-Math.PI / 2.3, 0, 0]}>
        <meshStandardMaterial
          color="#18181D"
          wireframe={true}
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
};
