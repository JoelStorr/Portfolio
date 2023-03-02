import { EffectComposer, Bloom } from "@react-three/postprocessing";

export function Effect() {
  return (
    <EffectComposer>
      <Bloom mipmapBlur={true} intensity={1} luminanceThreshold={0} />
    </EffectComposer>
  );
}
