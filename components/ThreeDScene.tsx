"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows, RoundedBox } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

interface CubeProps {
  position: any;
  rotation?: any;
  scale?: any;
  color?: string;
}

function ChocolateCube({ position, rotation, scale, color = "#5D4037" }: CubeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <RoundedBox args={[1, 1, 1]} radius={0.1} smoothness={4} position={position} rotation={rotation} scale={scale} ref={meshRef}>
        <meshStandardMaterial
          color={color}
          roughness={0.3}
          metalness={0.1}
          envMapIntensity={1}
        />
      </RoundedBox>
    </Float>
  );
}

interface NuggetProps {
  position: any;
  scale?: any;
}

function GoldNugget({ position, scale }: NuggetProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y -= 0.01;
  });
  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#C5A028" roughness={0.1} metalness={0.8} />
      </mesh>
    </Float>
  )
}

export default function ThreeDScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 40 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Environment preset="city" />

        {/* Main Cluster */}
        <group position={[3, 0, 0]}>
          <ChocolateCube position={[0, 0, 0]} rotation={[0.5, 0.5, 0]} scale={1.5} />
          <ChocolateCube position={[-2, 1, -2]} rotation={[0.2, 0.1, 0]} scale={0.8} color="#3E2723" />
          <ChocolateCube position={[1.5, -1.5, -1]} rotation={[0.1, 0.4, 0]} scale={0.6} color="#A1887F" />
          <GoldNugget position={[-1, -1, 1]} scale={0.4} />
          <GoldNugget position={[1, 1.5, -0.5]} scale={0.3} />
        </group>

        {/* Left Side Drift */}
        <group position={[-3, 1, 0]}>
          <ChocolateCube position={[0, 0, 0]} rotation={[0.1, 0.2, 0]} scale={0.7} color="#5D4037" />
          <GoldNugget position={[1, -1, 0]} scale={0.2} />
        </group>

        <ContactShadows position={[0, -4, 0]} opacity={0.4} scale={20} blur={2.5} far={4} />
      </Canvas>
    </div>
  );
}
