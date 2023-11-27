'use client'

import Link from "next/link"

import Image from 'next/image'
import { HomeIcon, SoundIcon } from "components/icon"
import { dataCard } from "features/mode-card"
import { twMerge } from "tailwind-merge"
import { useCustomSound } from 'hooks'
import { useRouter } from "next/router"

export const IntroMenu = () => {

    const { query } = useRouter()

    const param = query.geometry as string ?? '' 

    useCustomSound()

    return (
        <div className="">
            <div className="flex justify-between items-end text-neutral-500">
                <Link
                    href="/"
                    className="text-neutral-500  hover:text-orange-500"
                >
                    <HomeIcon />
                </Link>
                <SoundIcon />
            </div>

            <div className="flex flex-col items-center justify-center h-[60vh] gap-y-10 mt-20">
                <div
                    className="bg-neutral-200 rounded-md py-2 w-[80%] hover:bg-orange-500 hover:text-white text-sm text-center"
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
