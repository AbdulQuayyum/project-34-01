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
    <div className="controls">
      <p>press "w - To Move Forward"</p>
      <p>press "a - To Move Left"</p>
      <p>press "s - To Move Right"</p>
      <p>press "d - To Move Backward"</p>
      <p>press k to swap camera</p>
      <p>press r to reset</p>
      <p>press arrows for flips</p>
    </div>
  </React.StrictMode>,
)
