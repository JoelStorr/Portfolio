import { useRef } from "react";
import { OrbitControls, PivotControls, useHelper } from "@react-three/drei";

import * as THREE from "three";

//NOTE: My Imports
import Player from "./player.component";
import Floor from "./floor.component";
import { Effect } from "./effect.component";

export default function Experience() {
  const lightRef = useRef();
  useHelper(lightRef, THREE.DirectionalLightHelper, 1);

  return (
    <>
      //TODO: Comment for Follow Cam
      <OrbitControls />
      <Effect />
      <ambientLight intensity={0.05} />
      <directionalLight position={[0, 3, 5]} ref={lightRef} intensity={0.3} />
      <color args={["#202121"]} attach={"background"} />
      {/* NOTE: Char cube */}
      {/* TODO: Uncomment Player */}
      <Player />
      {/* NOTE: Processor */}
      <mesh position={[0, 0, -2]} castShadow>
        <boxGeometry args={[2, 0.8, 2]} />
        <meshStandardMaterial color="darkgray" />
      </mesh>
      <Floor />
    </>
  );
}
