import { useRef } from "react";
import { OrbitControls, PivotControls, useHelper } from "@react-three/drei";

import * as THREE from "three";

//NOTE: My Imports
import Player from "./player.component";

export default function Experience() {
  const lightRef = useRef();
  useHelper(lightRef, THREE.DirectionalLightHelper, 1);

  return (
    <>
      //TODO: Comment for Follow Cam
      <OrbitControls />
      <ambientLight intensity={0.05} />
      <directionalLight position={[0, 3, 5]} ref={lightRef} />
      <color args={["#202121"]} attach={"background"} />
      {/* NOTE: Char cube */}
      {/* TODO: Uncomment Player */}
      {/* <Player /> */}
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
      <PivotControls>
        <mesh position={[0, 0, 1]} rotation-x={-(Math.PI * 0.5)}>
          <planeGeometry args={[1, 1]} />
          <meshStandardMaterial
            color={"orange"}
            emissive={"orange"}
            emissiveIntensity={5}
          />
        </mesh>
      </PivotControls>
    </>
  );
}
