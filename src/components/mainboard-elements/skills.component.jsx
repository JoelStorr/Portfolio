import { Float, Text, Text3D, Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";

import useSection from "../../store/useSection";

export default function Skills() {
  const [animationActive, setAnimationActive] = useState(false);

  //NOTE: Handeling Store Data
  useEffect(() => {
    const unsubScribeSetion = useSection.subscribe(
      (state) => state.sectionOne,
      (sectionOne) => {
        if (sectionOne) {
          console.log("Action in sec one", sectionOne);
          setAnimationActive(() => false);
        } else {
          console.log("Action outside sec one", sectionOne);
        }
      }
    );

    return () => {
      unsubScribeSetion();
    };
  }, []);

  useFrame((state, delta) => {});

  return (
    <>
      <group position={[0, -0.5, 0]}>
        {/* HTML CSS JS */}
        <group position={[5, 0, 11]}>
          <mesh position-y={1.0}>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshBasicMaterial color={"blue"} />
          </mesh>
          <Float
            speed={2}
            rotationIntensity={2}
            floatIntensity={1}
            floatingRange={[0, 0.1]}
          >
            <mesh position-y={0.5}>
              <boxGeometry args={[0.3, 0.3, 0.3]} />
              <meshBasicMaterial color={"orange"} />
            </mesh>
          </Float>
          <mesh>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshBasicMaterial color={"blue"} />
          </mesh>

          <Center left position={[0, 0.2, 4.8]} rotation-y={-Math.PI * 0.5}>
            <Text3D font={"./Oxygen_Regular.json"} scale={0.4} max={1}>
              HTML CSS JS
              <meshNormalMaterial />
            </Text3D>
          </Center>
        </group>

        {/* React */}
        <group position={[7, 0, 11]}>
          <mesh position-y={1.0}>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshBasicMaterial color={"blue"} />
          </mesh>
          <Float
            speed={2}
            rotationIntensity={2}
            floatIntensity={1}
            floatingRange={[0, 0.1]}
          >
            <mesh position-y={0.5}>
              <boxGeometry args={[0.3, 0.3, 0.3]} />
              <meshBasicMaterial color={"orange"} />
            </mesh>
          </Float>
          <mesh>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshBasicMaterial color={"blue"} />
          </mesh>
          <Center
            left
            bottom
            position={[0, 0.2, 3]}
            rotation-y={-Math.PI * 0.5}
          >
            <Text3D font={"./Oxygen_Regular.json"} scale={0.4} max={1}>
              React
              <meshNormalMaterial />
            </Text3D>
          </Center>
        </group>

        {/* Vue */}
        <group position={[9, 0, 11]}>
          <mesh position-y={1.0}>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshBasicMaterial color={"blue"} />
          </mesh>
          <Float
            speed={2}
            rotationIntensity={2}
            floatIntensity={1}
            floatingRange={[0, 0.1]}
          >
            <mesh position-y={0.5}>
              <boxGeometry args={[0.3, 0.3, 0.3]} />
              <meshBasicMaterial color={"orange"} />
            </mesh>
          </Float>
          <mesh>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshBasicMaterial color={"blue"} />
          </mesh>
          <Center
            left
            bottom
            position={[0, 0.2, 2.5]}
            rotation-y={-Math.PI * 0.5}
          >
            <Text3D font={"./Oxygen_Regular.json"} scale={0.4} max={1}>
              Vue
              <meshNormalMaterial />
            </Text3D>
          </Center>
        </group>
      </group>
    </>
  );
}
