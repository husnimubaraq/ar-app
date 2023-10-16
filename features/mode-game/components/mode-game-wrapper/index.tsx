'use client'

import Link from "next/link"

import { HomeIcon, SoundIcon } from "components/icon"
import { ModeGamePlayModel, TGame, dataGame } from "features/mode-game"
import { Tab } from "@headlessui/react"
import { twMerge } from "tailwind-merge"
import { useState } from "react"
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

export const ModeGameWrapper = () => {

  const [tabIndex, setTabIndex] = useState(0)
  const [gameIndex, setGameIndex] = useState(0)

  const data = dataGame.find((item) => item.level === dataGame[tabIndex].level)

  const onNext = () => {
    setGameIndex(gameIndex + 1)
  }

  return (
    <div className="h-[100vh]">
      <div className="flex justify-between items-end text-neutral-500">
        <Link
          href="/"
          className="text-neutral-500  hover:text-orange-500"
        >
          <HomeIcon />
        </Link>
        <SoundIcon />
      </div>

      <div className="w-full max-w-md px-2 mt-5 sm:px-0">
        <Tab.Group
          onChange={(index) => {
            setTabIndex(index)
            setGameIndex(0)
          }}
        >
          <Tab.List className="flex space-x-1 rounded-xl bg-orange-900/20 p-1">
            {dataGame.map((item) => (
              <Tab
                key={item.level}
                className={({ selected }) =>
                  twMerge(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-orange-700',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white shadow'
                      : 'text-orange-500 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                {item.title}
              </Tab>
            ))}
          </Tab.List>

          <div className="relative h-[80vh] mt-5">
            <Canvas>
              <group>
                {data && (
                  <ModeGamePlayModel
                    glb={data.game[gameIndex].model}
                  />
                )}
              </group>

              <OrbitControls />

              <Environment 
                preset="apartment" 
                background
                blur={0.65}
              />
            </Canvas>
            <div 
              onClick={onNext}
              className="bg-neutral-200 rounded-md py-2 w-[50%] hover:bg-orange-500 hover:text-white text-sm text-center cursor-pointer absolute bottom-[5%] left-0 right-0 mx-auto"
            >
              {data && data.game.length - 1 === gameIndex ? 'Selesai' : 'Lanjut'}
            </div>
          </div>
        </Tab.Group>
      </div>
    </div>
  )
}
