import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const AbstractShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = Math.sin(t / 2);
    meshRef.current.rotation.x = Math.cos(t / 2);
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.2, 2]} />
        <MeshDistortMaterial
          color="#34d399" /* emerald-400 */
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
          wireframe={true}
          transparent={true}
          opacity={0.8}
        />
      </mesh>
      {/* Inner solid core */}
      <mesh>
        <octahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial color="#00ffcc" roughness={0.1} metalness={0.8} />
      </mesh>
    </Float>
  );
};

export const HeroGraphic = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} className="w-full h-full cursor-grab active:cursor-grabbing">
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#00ffcc" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#ff00cc" />
        <AbstractShape />
      </Canvas>
    </div>
  );
};
