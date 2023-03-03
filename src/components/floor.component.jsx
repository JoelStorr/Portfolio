export default function Floor() {
  return (
    <group>
      {/* NOTE: Floor */}
      <mesh position={[0, -1, 0]} receiveShadow>
        <boxGeometry args={[50, 0.5, 50]} />
        <meshBasicMaterial color="#020b24" metalness={5} />
      </mesh>
      <mesh position={[0, -0.74, 4.5]} rotation-x={-(Math.PI * 0.5)}>
        <planeGeometry args={[0.3, 15]} />
        <meshStandardMaterial
          color={"#07c9f0"}
          emissive={"#07c9f0"}
          emissiveIntensity={1}
        />
      </mesh>
      <mesh position={[4.85, -0.74, 12]} rotation-x={-(Math.PI * 0.5)}>
        <planeGeometry args={[10, 0.3]} />
        <meshStandardMaterial
          color={"#07c9f0"}
          emissive={"#07c9f0"}
          emissiveIntensity={1}
        />
      </mesh>
    </group>
  );
}
