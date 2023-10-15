'use client'

import { useLoader } from "@react-three/fiber";
import { TProps } from "./type"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const ModeGamePlayModel = (props: TProps) => {
    const { glb } = props

    const gltf = useLoader(GLTFLoader, glb) as any;

    return (
        <>
            <primitive object={gltf.scene} scale={0.2} />
        </>
    );
}
