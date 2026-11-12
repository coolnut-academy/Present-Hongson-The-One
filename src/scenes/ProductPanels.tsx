import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface ProductPanelsProps {
  currentChapter: number;
}

export const ProductPanels: React.FC<ProductPanelsProps> = ({ currentChapter }) => {
  const groupRef = useRef<THREE.Group>(null);
  const approvalNodesRef = useRef<THREE.Group>(null);

  const isVisible = currentChapter === 7 || currentChapter === 8;
  const isGovernance = currentChapter === 8;

  // Load sanitized UI screenshots for 3D surfaces
  const basePath = import.meta.env.BASE_URL || './';
  const textures = useTexture({
    dashboard: `${basePath}hongson-assets/screenshots/tfolio-dashboard.webp`,
    analytics: `${basePath}hongson-assets/screenshots/tfolio-analytics.webp`,
    approval: `${basePath}hongson-assets/screenshots/tfolio-approval.webp`,
  });

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const targetScale = isVisible ? 1 : 0.001;
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 3.5);

    if (!isVisible) return;

    // Gentle floating
    const t = state.clock.getElapsedTime();
    groupRef.current.position.y = Math.sin(t * 0.8) * 0.08;

    if (approvalNodesRef.current) {
      approvalNodesRef.current.rotation.y = Math.sin(t * 0.4) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Chapter 7: 3D UI Screen Showcase */}
      {!isGovernance && (
        <group>
          {/* Main Center Panel (Dashboard) */}
          <mesh position={[0, 0, 0.4]} rotation={[-0.05, 0, 0]}>
            <planeGeometry args={[3.2, 1.8]} />
            <meshBasicMaterial map={textures.dashboard} transparent opacity={0.95} />
          </mesh>
          <lineSegments position={[0, 0, 0.4]}>
            <edgesGeometry args={[new THREE.PlaneGeometry(3.22, 1.82)]} />
            <lineBasicMaterial color="#00D6A3" transparent opacity={0.7} />
          </lineSegments>

          {/* Angled Left Panel (Analytics) */}
          <mesh position={[-2.4, 0.3, -0.6]} rotation={[0, 0.45, 0]}>
            <planeGeometry args={[2.4, 1.35]} />
            <meshBasicMaterial map={textures.analytics} transparent opacity={0.75} />
          </mesh>
          <lineSegments position={[-2.4, 0.3, -0.6]} rotation={[0, 0.45, 0]}>
            <edgesGeometry args={[new THREE.PlaneGeometry(2.42, 1.37)]} />
            <lineBasicMaterial color="#52CFE5" transparent opacity={0.5} />
          </lineSegments>

          {/* Angled Right Panel (Approval Flow Overview) */}
          <mesh position={[2.4, -0.3, -0.6]} rotation={[0, -0.45, 0]}>
            <planeGeometry args={[2.4, 1.35]} />
            <meshBasicMaterial map={textures.approval} transparent opacity={0.75} />
          </mesh>
          <lineSegments position={[2.4, -0.3, -0.6]} rotation={[0, -0.45, 0]}>
            <edgesGeometry args={[new THREE.PlaneGeometry(2.42, 1.37)]} />
            <lineBasicMaterial color="#9673E6" transparent opacity={0.5} />
          </lineSegments>
        </group>
      )}

      {/* Chapter 8: Multi-Tier Approval Pipeline in 3D */}
      {isGovernance && (
        <group ref={approvalNodesRef} position={[0, 0, 0]}>
          {/* Main Approval Screen Plane */}
          <mesh position={[0, 0, -0.4]}>
            <planeGeometry args={[3.4, 1.9]} />
            <meshBasicMaterial map={textures.approval} transparent opacity={0.9} />
          </mesh>
          <lineSegments position={[0, 0, -0.4]}>
            <edgesGeometry args={[new THREE.PlaneGeometry(3.42, 1.92)]} />
            <lineBasicMaterial color="#52CFE5" transparent opacity={0.8} />
          </lineSegments>

          {/* 4 Interactive Flow Nodes in front */}
          {[
            { label: 'Submit', x: -1.8, color: '#00D6A3' },
            { label: 'Review', x: -0.6, color: '#52CFE5' },
            { label: 'Approve', x: 0.6, color: '#9673E6' },
            { label: 'Complete', x: 1.8, color: '#00F0B5' },
          ].map((node, i) => (
            <group key={node.label} position={[node.x, -1.2, 0.6]}>
              <mesh>
                <cylinderGeometry args={[0.22, 0.22, 0.08, 6]} />
                <meshStandardMaterial
                  color={node.color}
                  emissive={node.color}
                  emissiveIntensity={0.8}
                  metalness={0.9}
                  roughness={0.1}
                />
              </mesh>
              {/* Connecting laser beam to next node */}
              {i < 3 && (
                <mesh position={[0.6, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                  <cylinderGeometry args={[0.02, 0.02, 1.0, 8]} />
                  <meshBasicMaterial color="#52CFE5" transparent opacity={0.7} />
                </mesh>
              )}
            </group>
          ))}
        </group>
      )}
    </group>
  );
};

