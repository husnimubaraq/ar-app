'use client'

import Link from "next/link"
import { useRouter } from "next/router"
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useState } from "react";

import { HomeIcon, SoundIcon } from "components/icon"
import { dataGame, ModeGamePlayCarousel, ModeGamePlayModel, TGame } from "features/mode-game"

export const ModeGamePlay = () => {
    const { query } = useRouter()

    const data = dataGame.find((item) => item.level === query?.level as string)

    const [gameIndex, setGameIndex] = useState(0)

    const onGameClick = (item: TGame, index: number) => {
        console.log('item: ', item)
        setGameIndex(index)
    }

    return (
        <div className="relative">
            <div className="flex justify-between items-end text-neutral-500">
                <Link
                    href="/"
                    className="text-neutral-500  hover:text-orange-500"
                >
                    <HomeIcon />
                </Link>

                <h4 className="text-xl font-medium">{data?.title ?? ""}</h4>

                <SoundIcon />
            </div>

            <div className="relative h-[100vh] mt-5">
                <Canvas>
                    <group>
                        {data && (
                            <ModeGamePlayModel
                                glb={data.game[gameIndex].model}
                            />
                        )}
                    </group>

                    <OrbitControls />

                    <Environment preset="sunset" background />
                </Canvas>
            </div>

            <ModeGamePlayCarousel 
                onClick={onGameClick}
                data={data?.game ?? []} 
            />
        </div>
    )
}
