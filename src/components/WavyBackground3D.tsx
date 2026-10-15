import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface WavyBackground3DProps {
  className?: string;
}

export const WavyBackground3D: React.FC<WavyBackground3DProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / (container.clientHeight || 1),
      0.1,
      1000
    );
    camera.position.set(0, 5, 12);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Geometry: Wavy plane
    const planeWidth = 28;
    const planeHeight = 20;
    const segmentsX = 40;
    const segmentsY = 30;
    const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight, segmentsX, segmentsY);
    geometry.rotateX(-Math.PI / 2.5);

    // Material: Champagne Gold wireframe / point sheen
    const material = new THREE.MeshBasicMaterial({
      color: 0xc8a96b,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Store original positions for wave calculations
    const posAttr = geometry.attributes.position;
    const initialZ = new Float32Array(posAttr.count);
    for (let i = 0; i < posAttr.count; i++) {
      initialZ[i] = posAttr.getZ(i);
    }

    // Animation loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      const pos = geometry.attributes.position;

      for (let i = 0; i < pos.count; i++) {
        const u = pos.getX(i);
        const v = pos.getY(i);
        // Subtle luxurious undulating wave
        const z = Math.sin(u * 0.35 + elapsedTime * 0.8) * Math.cos(v * 0.35 + elapsedTime * 0.6) * 1.2;
        pos.setZ(i, initialZ[i] + z);
      }
      pos.needsUpdate = true;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / (height || 1);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} 
      aria-hidden="true" 
    />
  );
};

export default WavyBackground3D;
