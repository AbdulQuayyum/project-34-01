import React, { useEffect } from 'react'
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export default function Track() {
    const result = useLoader(
        GLTFLoader,
        "/src/Assets/Models/track.glb"
    );

    const colorMap = useLoader(
        TextureLoader,
        "/src/Assets/Textures/track.png"
    );

    useEffect(() => {
        colorMap.anisotropy = 16;
    }, [colorMap]);

    let geometry = result.scene.children[0].geometry;

    return (
        <>
            <mesh geometry={geometry}>
                <meshBasicMaterial
                    toneMapped={false}
                    map={colorMap}
                />
            </mesh>
        </>
    )
}
