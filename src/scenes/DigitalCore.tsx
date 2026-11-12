import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface DigitalCoreProps {
  currentChapter: number;
  overallProgress: number;
}

export const DigitalCore: React.FC<DigitalCoreProps> = ({ currentChapter }) => {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  const isProblemScene = currentChapter === 1;
  const isCoreVisible = currentChapter <= 4 || currentChapter === 11;

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    const targetScale = isCoreVisible ? 1 : 0.001;
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 2.5);

    if (!isCoreVisible) return;

    // Measured horology rotation
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.25;
      ring1Ref.current.rotation.y += delta * 0.35;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.28;
      ring2Ref.current.rotation.z += delta * 0.2;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x -= delta * 0.2;
      ring3Ref.current.rotation.z -= delta * 0.25;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y += delta * 0.4;
    }

    const spreadTarget = isProblemScene ? 1.6 : 1.0;
    if (ring1Ref.current) ring1Ref.current.scale.lerp(new THREE.Vector3(spreadTarget, spreadTarget, spreadTarget), delta * 2);
    if (ring2Ref.current) ring2Ref.current.scale.lerp(new THREE.Vector3(spreadTarget * 1.1, spreadTarget * 1.1, spreadTarget * 1.1), delta * 2);
    if (ring3Ref.current) ring3Ref.current.scale.lerp(new THREE.Vector3(spreadTarget * 1.25, spreadTarget * 1.25, spreadTarget * 1.25), delta * 2);
  });

  const coreColor = isProblemScene ? '#E05252' : '#00E599';
  const ringColor = '#2A2A30';

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Central Precision Geodesic Core */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[0.95, 1]} />
        <meshStandardMaterial
          color={coreColor}
          emissive={coreColor}
          emissiveIntensity={0.25}
          wireframe={true}
          roughness={0.4}
          metalness={0.9}
        />
      </mesh>

      {/* Machined Metal Concentric Rings */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.65, 0.02, 16, 64]} />
        <meshStandardMaterial
          color={ringColor}
          roughness={0.2}
          metalness={0.95}
        />
      </mesh>

      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.1, 0.016, 16, 64]} />
        <meshStandardMaterial
          color={ringColor}
          roughness={0.2}
          metalness={0.95}
        />
      </mesh>

      <mesh ref={ring3Ref}>
        <torusGeometry args={[2.55, 0.012, 16, 64]} />
        <meshStandardMaterial
          color={ringColor}
          roughness={0.2}
          metalness={0.95}
        />
      </mesh>

      {/* Subtle Restrained Ambient Point */}
      <pointLight color={coreColor} intensity={0.8} distance={6} />
    </group>
  );
};
