

import Link from "next/link"
import { useFrame, useLoader } from '@react-three/fiber';
import {
  ZapparCamera, ImageTracker, ZapparCanvas, Loader, BrowserCompatibility,
} from '@zappar/zappar-react-three-fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { HomeIcon, SoundIcon } from "components/icon"
import { Suspense } from "react";
import React from "react";

import gld from 'public/waving.glb'
import targetImage from 'public/example-tracking-image.zpt'

let action: THREE.AnimationAction;

const Model = () => {

  const clock = new THREE.Clock();
  const gltf = useLoader(GLTFLoader, gld) as any ;
  const mixer = new THREE.AnimationMixer(gltf.scene);

  action = mixer.clipAction(gltf.animations[0]);
  gltf.scene.rotateX(Math.PI / 2);

  useFrame(() => mixer.update(clock.getDelta()));

  return <primitive object={gltf.scene} />;
};

function Nametitle() {
  return (
    <group>
      <mesh>
        <Text color="white" position={[-0.958, 0.1, 0.1]} fontSize={0.13}>
          Francesca Ellis
        </Text>
        <Text color="white" position={[-0.85, -0.033, 0.1]} fontSize={0.1}>
          Junior Support Engineer
        </Text>
      </mesh>
    </group>
  );
}


export const ModeArWrapper = () => {

  return (
    <div>
      <div className="flex justify-between items-end text-neutral-500">
        <Link
          href="/"
          className="text-neutral-500  hover:text-orange-500"
        >
          <HomeIcon />
        </Link>
        <SoundIcon />
      </div>

      <div className="h-[80vh] mt-5">
        <BrowserCompatibility />
        <ZapparCanvas>
          <ZapparCamera />
          <ImageTracker targetImage={targetImage}>
              <Nametitle/>
              <Model />
          </ImageTracker>

          <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
          <Loader />
        </ZapparCanvas>
      </div>
    </div>
  )
}
