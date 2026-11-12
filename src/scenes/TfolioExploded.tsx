import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface TfolioExplodedProps {
  currentChapter: number;
}

const FOUR_R_LAYERS = [
  { key: 'RECORD', color: '#00D6A3', zOffset: -0.9, label: 'RECORD // บันทึก' },
  { key: 'REVIEW', color: '#52CFE5', zOffset: -0.3, label: 'REVIEW // ตรวจสอบ' },
  { key: 'RETRIEVE', color: '#9673E6', zOffset: 0.3, label: 'RETRIEVE // สืบค้น' },
  { key: 'REPORT', color: '#00F0B5', zOffset: 0.9, label: 'REPORT // สรุปรายงาน' },
];

export const TfolioExploded: React.FC<TfolioExplodedProps> = ({ currentChapter }) => {
  const groupRef = useRef<THREE.Group>(null);
  const layersRef = useRef<(THREE.Group | null)[]>([]);

  const isVisible = currentChapter === 5 || currentChapter === 6;
  const isExploded = currentChapter === 6;

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Smooth visibility fade
    const targetScale = isVisible ? 1 : 0.001;
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 3.5);

    if (!isVisible) return;

    // Subtle gentle float and tilt
    groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.6) * 0.12;
    groupRef.current.rotation.x = 0.15 + Math.cos(state.clock.getElapsedTime() * 0.5) * 0.06;

    // Explode or converge the 4 layers along Z axis
    layersRef.current.forEach((layerGroup, i) => {
      if (!layerGroup) return;
      const targetZ = isExploded ? FOUR_R_LAYERS[i].zOffset : 0;
      layerGroup.position.z = THREE.MathUtils.lerp(layerGroup.position.z, targetZ, delta * 3.5);

      // In exploded view, slightly stagger X and Y tilt for dramatic parallax depth
      const targetRotX = isExploded ? (i - 1.5) * 0.08 : 0;
      layerGroup.rotation.x = THREE.MathUtils.lerp(layerGroup.rotation.x, targetRotX, delta * 3);
    });
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 4R Glass Layers */}
      {FOUR_R_LAYERS.map((layer, index) => (
        <group
          key={layer.key}
          ref={(el) => (layersRef.current[index] = el)}
          position={[0, 0, 0]}
        >
          {/* Main Translucent Glass Sheet */}
          <mesh>
            <boxGeometry args={[3.2, 2.0, 0.04]} />
            <meshPhysicalMaterial
              color="#0A1117"
              emissive={layer.color}
              emissiveIntensity={isExploded ? 0.35 : 0.15}
              roughness={0.15}
              metalness={0.2}
              transmission={0.85}
              transparent
              opacity={0.88}
              reflectivity={0.6}
            />
          </mesh>

          {/* Glowing Border Edge */}
          <lineSegments>
            <edgesGeometry args={[new THREE.BoxGeometry(3.22, 2.02, 0.045)]} />
            <lineBasicMaterial
              color={layer.color}
              transparent
              opacity={isExploded ? 0.85 : 0.4}
              linewidth={2}
            />
          </lineSegments>

          {/* Corner Cyber Brackets */}
          <mesh position={[-1.5, 0.9, 0.03]}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshBasicMaterial color={layer.color} />
          </mesh>
          <mesh position={[1.5, 0.9, 0.03]}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshBasicMaterial color={layer.color} />
          </mesh>
          <mesh position={[-1.5, -0.9, 0.03]}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshBasicMaterial color={layer.color} />
          </mesh>
          <mesh position={[1.5, -0.9, 0.03]}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshBasicMaterial color={layer.color} />
          </mesh>
        </group>
      ))}

      {/* Central Holographic Accent Light */}
      <pointLight color="#00D6A3" intensity={isExploded ? 2.5 : 1.5} distance={6} />
    </group>
  );
};

