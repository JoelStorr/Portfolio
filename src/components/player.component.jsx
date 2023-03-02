import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, PivotControls, useKeyboardControls } from "@react-three/drei";
import * as THREE from "three";

export default function Player() {
  //NOTE: Get Key Hooks
  const [sub, getKeys] = useKeyboardControls();

  const [smoothCameraPosition] = useState(() => new THREE.Vector3(10, 10, 10));
  const [smoothCameraTarget] = useState(() => new THREE.Vector3());

  const playerRef = useRef();
  console.log(playerRef);

  useFrame((state, delta) => {
    //NOTE: Hook onto Keys
    const { forward, backward, upward, downward } = getKeys();
    const impuls = { x: 0, y: 0, z: 0 };
    const speed = 1.5 * delta;

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

    //NOTE: Follow Cam
    //TODO: Uncomment if Orbit Controll is no longer needed

    //Get Player Position
    const playerPosition = playerRef.current.position;
    const cameraPosition = new THREE.Vector3();
    cameraPosition.copy(playerPosition);
    //Offset Camera
    cameraPosition.x -= 5;
    cameraPosition.z -= 0;
    cameraPosition.y += 5;

    //Make Cam look at Object
    const cameraTarget = new THREE.Vector3();
    cameraTarget.copy(playerPosition);
    cameraTarget.y += 0.25;
    smoothCameraPosition.lerp(cameraPosition, 5 * delta);
    smoothCameraTarget.lerp(cameraTarget, 5 * delta);

    //Apply Cam Values
    state.camera.position.copy(cameraPosition);
    state.camera.lookAt(cameraTarget);
  });

  return (
    <group ref={playerRef}>
      <Float
        speed={5}
        rotationIntensity={0.2}
        floatIntensity={0.5}
        floatingRange={[0, 0.3]}
      >
        <PivotControls>
          <mesh castShadow>
            <boxGeometry args={[0.25, 0.25, 0.25]} />
            <meshStandardMaterial
              color={"orange"}
              emissive={"orange"}
              emissiveIntensity={5}
            />
          </mesh>
        </PivotControls>
      </Float>
    </group>
  );
}
