import React, { Suspense, useEffect, useState } from 'react'
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";

import { Ground, Track } from "./Components/Index"

export default function App() {
  const [thirdPerson, setThirdPerson] = useState(false);
  const [cameraPosition, setCameraPosition] = useState([-6, 3.9, 6.21]);

  useEffect(() => {
    function keydownHandler(e) {
      if (e.key == "k") {
        // random is necessary to trigger a state change
        if (thirdPerson) setCameraPosition([-6, 3.9, 6.21 + Math.random() * 0.01]);
        setThirdPerson(!thirdPerson);
      }
    }

    window.addEventListener("keydown", keydownHandler);
    return () => window.removeEventListener("keydown", keydownHandler);
  }, [thirdPerson]);

  return (
    <Suspense fallback={null}>
      <Environment
        background={"both"}
        files={'/src/Assets/Textures/envmap.hdr'} />

      <PerspectiveCamera makeDefault position={cameraPosition} fov={40} />
      <OrbitControls target={[-2.64, -0.71, 0.03]} />
      {/* {!thirdPerson && (
      <OrbitControls target={[-2.64, -0.71, 0.03]} />
      )} */}
      <Ground />
      <Track />

    </Suspense>
  )
}
