'use client'

import Link from "next/link"

import Image from 'next/image'
import { HomeIcon, SoundIcon } from "components/icon"
import { dataCard } from "features/mode-card"
import { twMerge } from "tailwind-merge"
import { useCustomSound } from 'hooks'
import { useRouter } from "next/router"
import { dataIntro2D, dataIntro3D } from "features/intro"

export const ModeArList = () => {

    const { query } = useRouter()

    const geometry = query.geometry as string ?? '' 
    const category = query.category as string ?? '' 

    const data = geometry === '2d' ? 
        dataIntro2D.find((item) => item.category.name === category)
            : 
        dataIntro3D.find((item) => item.category.name === category)

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
                <div id="btn-sound">
                    <SoundIcon />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center h-[60vh] gap-y-10 mt-20">
                {data && data.data.map((item, index) => (
                    <Link
                        key={index}
                        href={`/mode-ar/${geometry}/category/${category}/${item.name}`}
                        className="bg-neutral-200 rounded-md py-2 w-[80%] hover:bg-orange-500 hover:text-white text-sm text-center"
                    >
                        {item.text}
                    </Link>
                ))}
            </div>
        </div>
    )
}
