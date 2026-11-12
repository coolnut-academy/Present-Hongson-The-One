import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface EvidenceHologramProps {
  currentChapter: number;
}

export const EvidenceHologram: React.FC<EvidenceHologramProps> = ({ currentChapter }) => {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const band1Ref = useRef<THREE.Mesh>(null);
  const band2Ref = useRef<THREE.Mesh>(null);

  const isVisible = currentChapter === 10 || currentChapter === 11;
  const isFuture = currentChapter === 11;

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const targetScale = isVisible ? (isFuture ? 1.25 : 1.0) : 0.001;
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 3);

    if (!isVisible) return;

    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.4;
      sphereRef.current.rotation.x += delta * 0.2;
    }
    if (band1Ref.current) {
      band1Ref.current.rotation.x += delta * 0.8;
      band1Ref.current.rotation.z -= delta * 0.5;
    }
    if (band2Ref.current) {
      band2Ref.current.rotation.y -= delta * 0.7;
      band2Ref.current.rotation.z += delta * 0.6;
    }
  });

  const coreColor = isFuture ? '#00D6A3' : '#52CFE5';

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Geodesic Data Sphere */}
      <mesh ref={sphereRef}>
        <sphereGeometry args={[1.4, 24, 24]} />
        <meshStandardMaterial
          color={coreColor}
          emissive={coreColor}
          emissiveIntensity={isFuture ? 1.2 : 0.6}
          wireframe={true}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Orbiting Telemetry Bands */}
      <mesh ref={band1Ref}>
        <torusGeometry args={[1.9, 0.025, 12, 64]} />
        <meshBasicMaterial color="#00D6A3" transparent opacity={0.8} />
      </mesh>

      <mesh ref={band2Ref}>
        <torusGeometry args={[2.2, 0.02, 12, 64]} />
        <meshBasicMaterial color="#9673E6" transparent opacity={0.65} />
      </mesh>

      {/* Radiant Light */}
      <pointLight color={coreColor} intensity={isFuture ? 3.5 : 2.0} distance={9} />
    </group>
  );
};

