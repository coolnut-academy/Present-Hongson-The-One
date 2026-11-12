import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface CameraRigProps {
  currentChapter: number;
  overallProgress: number;
  isMobile: boolean;
}

// Camera coordinates for each chapter [posX, posY, posZ, targetX, targetY, targetZ]
const DESKTOP_CAMERA_TRACKS: Record<number, [number, number, number, number, number, number]> = {
  0: [0, 0, 7.5, 0, 0, 0],              // 00 Genesis: Centered dramatic view
  1: [2.8, 1.2, 8.5, 0.4, 0, 0],         // 01 Problem: Angled offset, observing fragmentation
  2: [0, 2.2, 9.2, 0, 0, 0],             // 02 Ecosystem: Elevated wide orbital view
  3: [-2.5, 0.8, 7.8, -0.6, 0.2, 0],     // 03 Pillars: Tracking left-side pillar stations
  4: [2.2, -0.6, 7.2, 0.5, 0, 0],        // 04 Access: Approaching role nodes
  5: [0, 0, 5.8, 0, 0, 0],               // 05 T-Folio Reveal: Macro tight dolly-in
  6: [1.8, 1.4, 6.8, 0.2, 0.2, 0],       // 06 4R Exploded: Oblique angle to show 3D layer depth
  7: [-1.5, 0.4, 6.2, -0.2, 0, 0],       // 07 Product Tour: Screen viewing perspective
  8: [0, 2.8, 7.5, 0, 0.5, 0],           // 08 Governance: Top-down hierarchical view
  9: [0, 3.2, 8.0, 0, -0.5, 0],          // 09 Metaverse: Landscape overview, looking down onto valley
  10: [1.5, 0.8, 6.5, 0.2, 0, 0],        // 10 Evidence: Focused on data hologram
  11: [0, 0.5, 7.0, 0, 0, 0],            // 11 Future: Centered grand convergence
};

const MOBILE_CAMERA_TRACKS: Record<number, [number, number, number, number, number, number]> = {
  0: [0, 0.8, 10.5, 0, 0.2, 0],          // 00 Genesis: Portrait tight elevation
  1: [0, 1.8, 11.2, 0, 0.5, 0],          // 01 Problem: High view showing scattered fragments
  2: [0, 2.5, 12.0, 0, 0.2, 0],          // 02 Ecosystem: Portrait overhead orbit
  3: [0, 1.2, 10.8, 0, 0.3, 0],          // 03 Pillars: Dynamic vertical framing
  4: [0, -0.8, 9.8, 0, -0.2, 0],         // 04 Access: Lower angle looking up at nodes
  5: [0, 0.2, 8.2, 0, 0.1, 0],           // 05 T-Folio: Macro portrait zoom
  6: [1.2, 1.8, 9.2, 0, 0.4, 0],         // 06 4R Exploded: Steep diagonal to show Z-depth clearly
  7: [0, 0.5, 8.8, 0, 0.2, 0],           // 07 Product Tour: Portrait card perspective
  8: [0, 3.2, 10.0, 0, 0.8, 0],          // 08 Governance: Vertical flow stack
  9: [0, 4.0, 10.5, 0, -0.2, 0],         // 09 Metaverse: Dramatic bird's-eye valley view
  10: [0, 1.0, 9.0, 0, 0.2, 0],          // 10 Evidence: Portrait data focus
  11: [0, 0.8, 9.5, 0, 0.2, 0],          // 11 Future: Majestic closing angle
};

export const CameraRig: React.FC<CameraRigProps> = ({
  currentChapter,
  overallProgress,
  isMobile,
}) => {
  const { camera } = useThree();
  const currentTarget = useRef(new THREE.Vector3(0, 0, 0));
  const targetPos = useRef(new THREE.Vector3(0, 0, 7.5));
  const lookAtTarget = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state, delta) => {
    const trackSet = isMobile ? MOBILE_CAMERA_TRACKS : DESKTOP_CAMERA_TRACKS;
    const currentTrack = trackSet[currentChapter] || trackSet[0];

    // Compute subtle mouse parallax (more restrained on mobile)
    const mouseParallaxX = isMobile ? 0 : state.mouse.x * 0.35;
    const mouseParallaxY = isMobile ? 0 : state.mouse.y * 0.25;

    targetPos.current.set(
      currentTrack[0] + mouseParallaxX,
      currentTrack[1] + mouseParallaxY,
      currentTrack[2]
    );

    lookAtTarget.current.set(
      currentTrack[3],
      currentTrack[4],
      currentTrack[5]
    );

    // Smooth camera interpolation with framerate independence
    const lerpFactor = Math.min(delta * 2.8, 1);
    camera.position.lerp(targetPos.current, lerpFactor);
    currentTarget.current.lerp(lookAtTarget.current, lerpFactor);
    camera.lookAt(currentTarget.current);
  });

  return null;
};

