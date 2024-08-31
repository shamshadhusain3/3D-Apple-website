// src/component/Preloader.jsx
import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, useProgress } from '@react-three/drei';

// Loader component to show loading progress
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ color: 'white', fontSize: '24px' }}>
        {progress.toFixed(2)}% loaded
      </div>
    </Html>
  );
}

// Preloader component
function Preloader() {
  return (
    <Canvas>
      {/* Ambient and directional lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />

      {/* Suspense to load the 3D content */}
      <Suspense fallback={<Loader />}>
        {/* 3D box model */}
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Suspense>

      {/* Orbit controls for 3D scene navigation */}
      <OrbitControls />
    </Canvas>
  );
}

export default Preloader;
