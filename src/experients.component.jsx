import { OrbitControls } from "@react-three/drei";

export default function Experience() {
  return (
    <>
      <OrbitControls />
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color={"red"} />
      </mesh>
    </>
  );
}
