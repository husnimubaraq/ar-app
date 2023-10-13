// @ts-nocheck

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { HomeIcon, SoundIcon } from 'components/icon';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// import 'aframe';
// import 'mind-ar/dist/mindar-image-aframe.prod.js';
import gld from 'public/waving.glb'

import {MindARThree} from 'mind-ar/dist/mindar-image-three.prod.js';
import * as THREE from 'three';

export const ModeArWrapper = () => {

  const containerRef = useRef<any>(null);

  const loader = new GLTFLoader();

  useEffect(() => {
    const mindarThree = new MindARThree({
      container: containerRef.current,
      imageTargetSrc: "https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/card.mind"
    });
    const {renderer, scene, camera} = mindarThree;
    const anchor = mindarThree.addAnchor(0);

    loader.load( gld, function ( gltf ) {
      const directionalLight = new THREE.DirectionalLight( 0xffffff, 1.5 );
      gltf.scene.add(directionalLight)
      anchor.group.add(gltf.scene);
    
    }, undefined, function ( error ) {
    
      console.error( error );
    
    } );

    mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });

    return () => {
      renderer.setAnimationLoop(null);
      // mindarThree.stop();
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

      <div  className="container">
        <div 
          style={{
            height: '100vw',
            width: '100vw'
            // position: 'absolute',
            // // left:-100,
            // right:0
          }}
          ref={containerRef}
        >

        </div>
      </div>
    </div>
  )
}
