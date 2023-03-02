import { useRef } from "react";
import { Float, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Player() {
  //NOTE: Get Key Hooks
  const [sub, getKeys] = useKeyboardControls();

  const playerRef = useRef();

  useFrame((state, delta) => {
    //NOTE: Hook onto Keys
    const { forward, backward, upward, downward } = getKeys();
    const impuls = { x: 0, y: 0, z: 0 };
    const speed = 1.5 * delta;

    console.log(forward);

    if (forward) {
      playerRef.current.position.z += speed;
    }
    if (backward) {
      playerRef.current.position.z -= speed;
    }
    if (upward) {
      playerRef.current.position.x += speed;
    }
    if (downward) {
      playerRef.current.position.x -= speed;
    }
  });

  return (
    <group ref={playerRef}>
      <Float
        speed={5}
        rotationIntensity={0.2}
        floatIntensity={0.5}
        floatingRange={[0, 0.3]}
      >
        <mesh castShadow>
          <boxGeometry args={[0.25, 0.25, 0.25]} />
          <meshStandardMaterial
            color={"orange"}
            emissive={"orange"}
            emissiveIntensity={5}
          />
        </mesh>
      </Float>
    </group>
  );
}
