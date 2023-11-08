// @ts-nocheck
'use client'

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { HomeIcon, SoundIcon } from 'components/icon';
import { useCustomSound } from 'hooks'

import { data } from './data'

import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';
import { useGetVoiceModel } from 'features/mode-ar';


export const ModeArWrapper = () => {

  const sceneRef = useRef<any>(null)
  
  const [title, setTitle] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    const sceneEl = sceneRef?.current ?? null
    if (sceneEl) {
      const arSystem = sceneEl?.systems["mindar-image-system"] ?? null
      sceneEl?.addEventListener('renderstart', () => {
        if (arSystem) {
          arSystem?.start()
        }
      })
    }
  }, [])

  useEffect(() => {
    for(let item of data){
      const target = document.querySelector(`#${item.name}-target`)

      target?.addEventListener('targetFound', () => {
        setTitle(item.title.toUpperCase())
        setName(item.name)
      })

      target?.addEventListener('targetLost', () => {
        setTitle('')
        setName('')
      })
    }
  }, [])

  const { play } = useGetVoiceModel(name)

  const onPlay = () => {
    play()
  }


  return (
    <div>
      <div 
        className="fixed top-0 left-0 right-0"
        style={{
          zIndex:1000
        }}
      >
        <div className="flex justify-between items-end text-neutral-500 bg-white py-5 px-5">
          <Link
            href="/"
            className="text-neutral-500  hover:text-orange-500"
          >
            <HomeIcon />
          </Link>
          
          <div onClick={() => onPlay()} className='cursor-pointer'>
            <SoundIcon />
          </div>
        </div>
      </div>

      <div className="container">
        <a-scene ref={sceneRef} mindar-image="imageTargetSrc: ./targets.mind;uiScanning: no;" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
          <a-assets>
            {data.map((item) => (
              <a-asset-item 
                id={`${item.name}-model`} src={item.url}
              ></a-asset-item>
            ))}
          </a-assets>

          <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

          {data.map((item, index) => (
            <a-entity id={`${item.name}-target`} mindar-image-target={`targetIndex: ${index}`}>
              <a-gltf-model rotation="0 0 0 " position="0 -0.25 0" scale={item.scale} src={`#${item.name}-model`} animation-mixer></a-gltf-model>
            </a-entity>
          ))}
        </a-scene>

        {title && (
          <div className='fixed top-[11%] left-10 right-10'>
            <div className='bg-orange-500 rounded-md py-2 px-5'>
              <h4 className='text-xl font-bold text-white text-center'>{title}</h4>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
