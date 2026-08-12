"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import type { Mesh } from "three";

function DistortedBlob() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.12;
    meshRef.current.rotation.y = t * 0.18;
    // gentle drift toward the pointer without fully tracking it
    meshRef.current.position.x += (state.pointer.x * 0.6 - meshRef.current.position.x) * 0.02;
    meshRef.current.position.y += (state.pointer.y * 0.4 - meshRef.current.position.y) * 0.02;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.9}>
      <mesh ref={meshRef} scale={2.1}>
        <icosahedronGeometry args={[1, 6]} />
        <MeshDistortMaterial
          color="#7c5cff"
          attach="material"
          distort={0.42}
          speed={1.8}
          roughness={0.15}
          metalness={0.6}
          emissive="#3a2a9e"
          emissiveIntensity={0.25}
        />
      </mesh>
    </Float>
  );
}

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 4, 5]} intensity={1.4} color="#22d3ee" />
        <pointLight position={[-4, -2, -3]} intensity={0.8} color="#7c5cff" />
        <DistortedBlob />
        <Sparkles count={60} scale={7} size={2} speed={0.25} color="#8ea9ff" />
      </Suspense>
    </Canvas>
  );
}
