// @ts-nocheck

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { HomeIcon, SoundIcon } from 'components/icon';

import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';

import { MindARThree } from 'mind-ar/dist/mindar-image-three.prod.js';
import * as THREE from 'three';

export const ModeArWrapper = () => {

  const sceneRef = useRef<any>(null);

  useEffect(() => {
    const sceneEl = sceneRef?.current;
    const arSystem = sceneEl.systems["mindar-image-system"];
    if(sceneEl){
      sceneEl.addEventListener('renderstart', () => {
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
        <a-scene ref={sceneRef} mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/card.mind; autoStart: false; uiLoading: no; uiError: no; uiScanning: no;" color-space="sRGB" embedded renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
          <a-assets>
            <img id="card" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/card.png" />
            <a-asset-item id="avatarModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/softmind/scene.gltf"></a-asset-item>
          </a-assets>

          <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

          <a-entity mindar-image-target="targetIndex: 0">
            <a-plane src="#card" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>
            <a-gltf-model rotation="0 0 0 " position="0 0 0.1" scale="0.005 0.005 0.005" src="#avatarModel" animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"></a-gltf-model>
          </a-entity>
        </a-scene>
      </div>
    </div>
  )
}
