

import Link from "next/link"
import { useFrame, useLoader } from '@react-three/fiber';
import {
  ZapparCamera, ImageTracker, ZapparCanvas, Loader, BrowserCompatibility,
} from '@zappar/zappar-react-three-fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { HomeIcon, SoundIcon } from "components/icon"
import { Suspense } from "react";
import React from "react";

let action: THREE.AnimationAction;

const Model = () => {

  const clock = new THREE.Clock();
  const gltf = useLoader(GLTFLoader, "/waving.glb") as any ;
  const mixer = new THREE.AnimationMixer(gltf.scene);

  action = mixer.clipAction(gltf.animations[0]);
  gltf.scene.rotateX(Math.PI / 2);

  useFrame(() => mixer.update(clock.getDelta()));

  return <primitive object={gltf.scene} />;
};

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

      <div>
        <BrowserCompatibility />
        <ZapparCanvas>
          <ZapparCamera />
          <Suspense fallback={null}>
            <ImageTracker targetImage={"/example-tracking-image.zpt"}>
              <React.Suspense fallback={null}>
                <Model />
              </React.Suspense>
            </ImageTracker>
          </Suspense>
          <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
          <Loader />
        </ZapparCanvas>
      </div>
    </div>
  )
}
