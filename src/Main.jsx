import React from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";

import App from './App.jsx'
import "./Styles/Index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas>
      <Physics broadphase="SAP" gravity={[0, -2.6, 0]}>
        <App />
      </Physics>
    </Canvas>
  </React.StrictMode>,
)
