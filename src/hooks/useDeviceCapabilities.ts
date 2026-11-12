import { useState, useEffect } from 'react';

export interface DeviceCapabilities {
  hasWebGL: boolean;
  isMobile: boolean;
  isTablet: boolean;
  prefersReducedMotion: boolean;
  dpr: number;
}

export function useDeviceCapabilities(): DeviceCapabilities {
  const [capabilities, setCapabilities] = useState<DeviceCapabilities>(() => {
    const hasWebGL = checkWebGL();
    const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
    const isTablet = typeof window !== 'undefined' ? window.innerWidth >= 768 && window.innerWidth < 1024 : false;
    const prefersReducedMotion =
      typeof window !== 'undefined'
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : false;
    const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 1.75) : 1;

    return {
      hasWebGL,
      isMobile,
      isTablet,
      prefersReducedMotion,
      dpr,
    };
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setCapabilities((prev) => ({
        ...prev,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        dpr: Math.min(window.devicePixelRatio || 1, 1.75),
      }));
    };

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setCapabilities((prev) => ({
        ...prev,
        prefersReducedMotion: e.matches,
      }));
    };

    window.addEventListener('resize', handleResize);
    mediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return capabilities;
}

function checkWebGL(): boolean {
  if (typeof window === 'undefined') return true;
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

