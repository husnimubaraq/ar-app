'use client'

import Link from "next/link"

import Image from 'next/image'
import { HomeIcon, SoundIcon } from "components/icon"
import { dataCard } from "features/mode-card"
import { twMerge } from "tailwind-merge"
import { useCustomSound } from 'hooks'
import { useRouter } from "next/router"
import useSound from "use-sound"
import { useEffect } from "react"

export const IntroMenu = () => {

    const { query } = useRouter()

    const param = query.geometry as string ?? '' 

    const [play, {
        stop
    }] = param === '2d' ? 
        useSound(`/assets/sounds/2d.mp3`) : 
        useSound(`/assets/sounds/3d.mp3`)

    useEffect(() => {

        return () => {
            stop()
        }
    }, [stop])
    return (
        <div className="">
            <div className="flex justify-between items-end text-neutral-500">
                <Link
                    href="/"
                    className="text-neutral-500  hover:text-orange-500"
                >
                    <HomeIcon />
                </Link>
                <div id="btn-sound">
                    <SoundIcon />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center h-[60vh] gap-y-10 mt-20">
                <div
                    onClick={() => play()}
                    className="bg-neutral-200 rounded-md py-2 w-[80%] hover:bg-orange-500 hover:text-white text-sm text-center cursor-pointer"
                >
                    Penjelasan
                </div>
                <Link
                    href={`list/${param}`}
                    className="bg-neutral-200 rounded-md py-2 w-[80%] hover:bg-orange-500 hover:text-white text-sm text-center"
                >
                    Contoh Benda
                </Link>
            </div>
        </div>
    )
}
