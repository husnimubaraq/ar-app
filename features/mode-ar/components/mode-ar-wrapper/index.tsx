// @ts-nocheck
'use client'

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { HomeIcon, SoundIcon } from 'components/icon';

import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';

export const ModeArWrapper = () => {

  const sceneRef = useRef<any>(null);

  useEffect(() => {
    const sceneEl = sceneRef?.current ?? null;
    if(sceneEl){
      const arSystem = sceneEl?.systems["mindar-image-system"] ?? null;
      sceneEl?.addEventListener('renderstart', () => {
        if(arSystem){
          arSystem?.start(); // start AR 
        }
      });
    }
  }, []);


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

      <div className="container">
        <a-scene ref={sceneRef}  mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.2/examples/image-tracking/assets/band-example/band.mind;uiScanning: no;" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
          <a-assets>
            <a-asset-item id="bearModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.2/examples/image-tracking/assets/band-example/bear/scene.gltf"></a-asset-item>
            <a-asset-item id="raccoonModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.2/examples/image-tracking/assets/band-example/raccoon/scene.gltf"></a-asset-item>
          </a-assets>

          <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

          <a-entity mindar-image-target="targetIndex: 0">
            <a-gltf-model rotation="0 0 0 " position="0 -0.25 0" scale="0.05 0.05 0.05" src="#raccoonModel" animation-mixer></a-gltf-model>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 1">
            <a-gltf-model rotation="0 0 0 " position="0 -0.25 0" scale="0.05 0.05 0.05" src="#bearModel" animation-mixer></a-gltf-model>
          </a-entity>
        </a-scene>
      </div>
    </div>
  )
}
