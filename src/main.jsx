import { Canvas } from "@react-three/fiber";
import React from "react";
import ReactDOM from "react-dom/client";
//NOTE: 3D Imports
import { KeyboardControls } from "@react-three/drei";

import Experience from "./components/experients.component";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <KeyboardControls
    map={[
      { mane: "forward", keys: ["ArrowRight", "KeyD"] },
      { mane: "backward", keys: ["ArrowLeft", "KeyA"] },
      { mane: "upward", keys: ["ArrowUp", "KeyW"] },
      { mane: "downward", keys: ["ArrowDown", "KeyS"] },
    ]}
  >
    <Canvas shadows={true}>
      <Experience />
    </Canvas>
  </KeyboardControls>
);
