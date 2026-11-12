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
  const particlesRef = useRef<THREE.Points>(null);

  const isProblemScene = currentChapter === 1;
  const isCoreVisible = currentChapter <= 4 || currentChapter === 11;

  // Generate particle cloud
  const [particlePositions, particleColors] = useMemo(() => {
    const count = 350;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const emerald = new THREE.Color('#00D6A3');
    const cyan = new THREE.Color('#52CFE5');
    const amber = new THREE.Color('#FFB800');

    for (let i = 0; i < count; i++) {
      const radius = 1.8 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const color = Math.random() > 0.4 ? emerald : cyan;
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return [positions, colors];
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    // Smooth visibility fade
    const targetScale = isCoreVisible ? 1 : 0.001;
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 3);

    if (!isCoreVisible) return;

    // Constant cybernetic rotation
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * (isProblemScene ? 1.4 : 0.4);
      ring1Ref.current.rotation.y += delta * (isProblemScene ? 1.8 : 0.6);
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * (isProblemScene ? 1.2 : 0.5);
      ring2Ref.current.rotation.z += delta * (isProblemScene ? 1.6 : 0.3);
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x -= delta * (isProblemScene ? 1.5 : 0.3);
      ring3Ref.current.rotation.z -= delta * (isProblemScene ? 1.1 : 0.4);
    }
    if (innerRef.current) {
      innerRef.current.rotation.y += delta * 0.8;
      // Pulse effect
      const pulse = 1 + Math.sin(Date.now() * 0.003) * 0.08;
      innerRef.current.scale.set(pulse, pulse, pulse);
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.15;
    }

    // Fragmentation effect during Problem scene
    const spreadTarget = isProblemScene ? 1.7 : 1.0;
    if (ring1Ref.current) ring1Ref.current.scale.lerp(new THREE.Vector3(spreadTarget, spreadTarget, spreadTarget), delta * 2.5);
    if (ring2Ref.current) ring2Ref.current.scale.lerp(new THREE.Vector3(spreadTarget * 1.15, spreadTarget * 1.15, spreadTarget * 1.15), delta * 2.5);
    if (ring3Ref.current) ring3Ref.current.scale.lerp(new THREE.Vector3(spreadTarget * 1.3, spreadTarget * 1.3, spreadTarget * 1.3), delta * 2.5);
  });

  const coreColor = isProblemScene ? '#FF5252' : '#00D6A3';
  const ringColor = isProblemScene ? '#FFB800' : '#52CFE5';

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Central Holographic Geodesic Core */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.0, 1]} />
        <meshStandardMaterial
          color={coreColor}
          emissive={coreColor}
          emissiveIntensity={0.8}
          wireframe={true}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Concentric Gyroscopic Rings */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.65, 0.035, 16, 64]} />
        <meshStandardMaterial
          color={ringColor}
          emissive={ringColor}
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.1, 0.028, 16, 64]} />
        <meshStandardMaterial
          color={coreColor}
          emissive={coreColor}
          emissiveIntensity={0.5}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      <mesh ref={ring3Ref}>
        <torusGeometry args={[2.55, 0.02, 16, 64]} />
        <meshStandardMaterial
          color={ringColor}
          emissive={ringColor}
          emissiveIntensity={0.4}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Data particle cloud */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlePositions.length / 3}
            array={particlePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particleColors.length / 3}
            array={particleColors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          vertexColors
          transparent
          opacity={0.85}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Subtle Core Glow Light */}
      <pointLight color={coreColor} intensity={2.2} distance={8} />
    </group>
  );
};

