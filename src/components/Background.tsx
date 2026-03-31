import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Terrain = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    // Simulate forward movement by shifting Z in a looping module
    meshRef.current.position.z = (t * 2) % 4;
    // Apply slight wave motion to the height and scroll parallax offset
    meshRef.current.position.y = -3 - window.scrollY * 0.002 + Math.sin(t * 0.5) * 0.2;
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
      <planeGeometry args={[100, 100, 60, 60]} />
      <meshStandardMaterial 
        color="#34d399" 
        wireframe={true} 
        transparent 
        opacity={0.35} 
        emissive="#00ffcc" 
        emissiveIntensity={0.8} 
      />
    </mesh>
  );
};

const BackgroundParticles = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!groupRef.current) return;
    const scrollY = window.scrollY;
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.02 + scrollY * 0.001;
    groupRef.current.position.y = scrollY * 0.005;
    
    // Parallax mapped to mouse
    groupRef.current.rotation.x = state.mouse.y * 0.1;
    groupRef.current.rotation.z = state.mouse.x * 0.1;
  });

  // Pre-generate stable positions
  const particles = useRef(
    Array.from({ length: 300 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 50, 
        (Math.random() - 0.5) * 50 + 10, 
        (Math.random() - 0.5) * 50
      ] as [number, number, number],
      size: Math.random() * 0.08 + 0.02,
      color: Math.random() > 0.5 ? "#00ffcc" : "#ff00cc"
    }))
  ).current;

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <mesh key={i} position={p.position}>
          <sphereGeometry args={[p.size, 8, 8]} />
          <meshBasicMaterial color={p.color} transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
};

export const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-gray-900 pointer-events-none">
      <Canvas camera={{ position: [0, 2, 12], fov: 60 }}>
        <fog attach="fog" args={['#111827', 10, 35]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[0, 8, 0]} intensity={1.5} color="#ff00cc" />
        <pointLight position={[5, 2, -5]} intensity={1} color="#00ffcc" />
        <Terrain />
        <BackgroundParticles />
      </Canvas>
    </div>
  );
};
