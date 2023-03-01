import { Canvas } from "@react-three/fiber";
import React from "react";
import ReactDOM from "react-dom/client";
//NOTE: 3D Imports

import Experience from "./experients.component";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Canvas>
    <Experience />
  </Canvas>
);
