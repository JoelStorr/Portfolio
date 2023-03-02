export default function Player() {
  return (
    <mesh castShadow>
      <boxGeometry args={[0.25, 0.25, 0.25]} />
      <meshStandardMaterial
        color={"orange"}
        emissive={"orange"}
        emissiveIntensity={5}
      />
    </mesh>
  );
}
