import { useRef } from "react";
import { OrbitControls, useHelper } from "@react-three/drei";

import * as THREE from "three";

export default function Experience() {
  const lightRef = useRef();
  useHelper(lightRef, THREE.DirectionalLightHelper, 1);

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.05} />
      <directionalLight position={[0, 3, 5]} ref={lightRef} />

      <color args={["#202121"]} attach={"background"} />
      {/* NOTE: Char cube */}
      <mesh castShadow>
        <boxGeometry args={[0.25, 0.25, 0.25]} />
        <meshStandardMaterial
          color={"orange"}
          emissive={"orange"}
          emissiveIntensity={5}
        />
      </mesh>
      {/* NOTE: Processor */}
      <mesh position={[0, 0, -2]} castShadow>
        <boxGeometry args={[2, 0.8, 2]} />
        <meshStandardMaterial color="darkgray" />
      </mesh>
      {/* NOTE: Floor */}
      <mesh position={[0, -1, 0]} receiveShadow>
        <boxGeometry args={[50, 0.5, 50]} />
        <meshBasicMaterial color="#020b24" metalness={5} />
      </mesh>
    </>
  );
}
