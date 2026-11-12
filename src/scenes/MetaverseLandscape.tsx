import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface MetaverseLandscapeProps {
  currentChapter: number;
}

const DISTRICT_BEACONS = [
  { name: 'Mueang', x: 0, z: 0, color: '#00D6A3' },
  { name: 'Pai', x: 1.8, z: -1.6, color: '#52CFE5' },
  { name: 'Pang Mapha', x: 0.9, z: -1.8, color: '#9673E6' },
  { name: 'Khun Yuam', x: -0.4, z: 1.1, color: '#00F0B5' },
  { name: 'Mae La Noi', x: -1.2, z: 2.0, color: '#00D6A3' },
  { name: 'Mae Sariang', x: -1.8, z: 2.8, color: '#52CFE5' },
  { name: 'Sop Moei', x: -2.3, z: 3.5, color: '#9673E6' },
];

export const MetaverseLandscape: React.FC<MetaverseLandscapeProps> = ({ currentChapter }) => {
  const groupRef = useRef<THREE.Group>(null);
  const isVisible = currentChapter === 9;

  // Generate mountain terrain geometry
  const terrainGeo = useMemo(() => {
    const geo = new THREE.PlaneGeometry(12, 12, 40, 40);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const vx = pos.getX(i);
      const vy = pos.getY(i);
      // Create synthetic Mae Hong Son mountain valley terrain
      const elevation =
        Math.sin(vx * 0.7) * Math.cos(vy * 0.7) * 1.1 +
        Math.sin(vx * 1.5 + vy * 1.2) * 0.4 -
        (vx * vx + vy * vy) * 0.04;
      pos.setZ(i, elevation);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    const targetScale = isVisible ? 1 : 0.001;
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 3);

    if (!isVisible) return;
    groupRef.current.rotation.y += delta * 0.08;
  });

  return (
    <group ref={groupRef} position={[0, -1.2, 0]}>
      {/* Mountainous Wireframe Terrain */}
      <mesh geometry={terrainGeo} rotation={[-Math.PI / 2.3, 0, 0]}>
        <meshStandardMaterial
          color="#0A1C22"
          wireframe={true}
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>

      {/* Solid Undersurface */}
      <mesh geometry={terrainGeo} rotation={[-Math.PI / 2.3, 0, 0]} position={[0, -0.05, 0]}>
        <meshBasicMaterial color="#050A0E" />
      </mesh>

      {/* 7 Cultural District Beacons */}
      {DISTRICT_BEACONS.map((b) => (
        <group key={b.name} position={[b.x, 0.4, b.z]}>
          {/* Vertical Laser Column */}
          <mesh position={[0, 0.8, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 1.6, 8]} />
            <meshBasicMaterial color={b.color} transparent opacity={0.8} />
          </mesh>

          {/* Floating Polygon Cultural Crystal */}
          <mesh position={[0, 1.7, 0]}>
            <octahedronGeometry args={[0.18, 0]} />
            <meshStandardMaterial
              color={b.color}
              emissive={b.color}
              emissiveIntensity={0.8}
            />
          </mesh>

          {/* Base Ring */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.15, 0.22, 16]} />
            <meshBasicMaterial color={b.color} side={THREE.DoubleSide} />
          </mesh>
        </group>
      ))}

      {/* Topographic Elevation Contour Light */}
      <pointLight color="#52CFE5" intensity={2.0} distance={10} position={[0, 3, 0]} />
    </group>
  );
};

