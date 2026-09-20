import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import './InteriorScene.css';

function Room() {
  return (
    <group>
      {/* ================= FLOOR ================= */}

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.5, 0]}
      >
        <planeGeometry args={[14, 14]} />
        <meshStandardMaterial
          color="#1A2438"
          roughness={0.75}
        />
      </mesh>

      {/* Floor Gold Inlay */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.485, 0]}
      >
        <planeGeometry args={[7, 0.025]} />
        <meshStandardMaterial
          color="#C9A24B"
          metalness={0.7}
          roughness={0.25}
        />
      </mesh>

      {/* ================= BACK WALL ================= */}

      <mesh position={[0, 1, -3]}>
        <boxGeometry args={[10, 5, 0.15]} />
        <meshStandardMaterial
          color="#0F1729"
          roughness={0.6}
        />
      </mesh>

      {/* Left Architectural Panel */}
      <mesh position={[-3.15, 0.7, -2.88]}>
        <boxGeometry args={[1.6, 3.6, 0.12]} />
        <meshStandardMaterial
          color="#1A2438"
          roughness={0.5}
        />
      </mesh>

      {/* Right Architectural Panel */}
      <mesh position={[3.15, 0.7, -2.88]}>
        <boxGeometry args={[1.6, 3.6, 0.12]} />
        <meshStandardMaterial
          color="#1A2438"
          roughness={0.5}
        />
      </mesh>

      {/* ================= CENTRAL FEATURE WALL ================= */}

      <mesh position={[0, 0.5, -2.85]}>
        <boxGeometry args={[4.4, 3.2, 0.08]} />
        <meshStandardMaterial
          color="#C9A24B"
          metalness={0.8}
          roughness={0.22}
        />
      </mesh>

      <mesh position={[0, 0.5, -2.78]}>
        <boxGeometry args={[4.05, 2.85, 0.08]} />
        <meshStandardMaterial
          color="#1A2438"
          roughness={0.4}
        />
      </mesh>

      {/* Inner Gold Frame */}
      <mesh position={[0, 0.5, -2.70]}>
        <boxGeometry args={[3.45, 2.35, 0.06]} />
        <meshStandardMaterial
          color="#C9A24B"
          metalness={0.85}
          roughness={0.2}
        />
      </mesh>

      <mesh position={[0, 0.5, -2.64]}>
        <boxGeometry args={[3.25, 2.15, 0.06]} />
        <meshStandardMaterial
          color="#0F1729"
          roughness={0.45}
        />
      </mesh>

      {/* ================= CENTER SCULPTURE ================= */}

      <mesh position={[0, -0.35, -2.25]}>
        <cylinderGeometry
          args={[0.38, 0.52, 1.9, 48]}
        />
        <meshStandardMaterial
          color="#C9A24B"
          metalness={0.8}
          roughness={0.18}
        />
      </mesh>

      {/* Sculpture Top */}
      <mesh position={[0, 0.62, -2.25]}>
        <sphereGeometry args={[0.28, 32, 32]} />
        <meshStandardMaterial
          color="#E0BE6E"
          metalness={0.75}
          roughness={0.18}
        />
      </mesh>

      {/* ================= SIDE DECOR ================= */}

      <mesh position={[-2.35, -0.45, -2.65]}>
        <cylinderGeometry
          args={[0.28, 0.35, 1.3, 32]}
        />
        <meshStandardMaterial
          color="#9BA3B5"
          roughness={0.45}
        />
      </mesh>

      <mesh position={[2.35, -0.45, -2.65]}>
        <cylinderGeometry
          args={[0.28, 0.35, 1.3, 32]}
        />
        <meshStandardMaterial
          color="#9BA3B5"
          roughness={0.45}
        />
      </mesh>

      {/* ================= CEILING BEAM ================= */}

      <mesh position={[0, 3.25, -1.5]}>
        <boxGeometry args={[9, 0.18, 0.25]} />
        <meshStandardMaterial
          color="#C9A24B"
          metalness={0.7}
          roughness={0.25}
        />
      </mesh>

      {/* ================= LIGHT FIXTURE ================= */}

      <mesh position={[0, 2.6, -1.4]}>
        <sphereGeometry args={[0.16, 24, 24]} />
        <meshStandardMaterial
          color="#E0BE6E"
          emissive="#C9A24B"
          emissiveIntensity={1.5}
        />
      </mesh>

      {/* ================= GOLD FLOOR DETAILS ================= */}

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[-2.8, -1.47, -0.8]}
      >
        <planeGeometry args={[0.02, 4]} />
        <meshStandardMaterial
          color="#C9A24B"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[2.8, -1.47, -0.8]}
      >
        <planeGeometry args={[0.02, 4]} />
        <meshStandardMaterial
          color="#C9A24B"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

function CameraAnimation() {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x =
        (event.clientX / window.innerWidth) * 2 - 1;

      mouse.current.y =
        (event.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame(({ camera }) => {
    const scrollProgress = Math.min(
      window.scrollY / window.innerHeight,
      1
    );

    const scrollX = 6 - scrollProgress * 2.5;
    const scrollY = 3 + scrollProgress * 0.8;
    const scrollZ = 7 - scrollProgress * 2;

    const mouseX = mouse.current.x * 0.35;
    const mouseY = mouse.current.y * -0.2;

    const targetX = scrollX + mouseX;
    const targetY = scrollY + mouseY;
    const targetZ = scrollZ;

    camera.position.x +=
      (targetX - camera.position.x) * 0.035;

    camera.position.y +=
      (targetY - camera.position.y) * 0.035;

    camera.position.z +=
      (targetZ - camera.position.z) * 0.035;

    camera.lookAt(0, 0, -1);
  });

  return null;
}

function InteriorScene() {
  return (
    <div className="interior-scene">
      <Canvas
        camera={{
          position: [6, 3, 7],
          fov: 45,
        }}
      >
        {/* Ambient */}
        <ambientLight intensity={0.55} />

        {/* Main architectural light */}
        <directionalLight
          position={[4, 6, 5]}
          intensity={2}
        />

        {/* Gold accent */}
        <pointLight
          position={[-4, 2, 2]}
          intensity={18}
          distance={10}
          color="#C9A24B"
        />

        {/* Soft fill */}
        <pointLight
          position={[4, 1, -1]}
          intensity={8}
          distance={8}
          color="#9BA3B5"
        />

        <Room />

        <CameraAnimation />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}

export default InteriorScene;