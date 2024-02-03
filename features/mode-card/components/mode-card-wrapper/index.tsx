'use client'

import Link from "next/link"

import Image from 'next/image'
import { HomeIcon, SoundIcon } from "components/icon"
import { dataCard } from "features/mode-card"
import { twMerge } from "tailwind-merge"
import { useMenuSound } from 'hooks'
import { useRouter } from "next/router"
import { ButtonSound } from "components/button-sound"
import modeCardSound from 'public/assets/sounds/unduhkartu.wav';

export const ModeCardWrapper = () => {
    const { query } = useRouter()

    const group = query.group as string ?? ''

    useMenuSound(modeCardSound)

    return (
        <div className="">
            <div className="flex justify-between items-center text-neutral-500">
                <Link
                    href={`/home?group=${group}`}
                    className="text-neutral-500  hover:text-orange-500"
                >
                    <HomeIcon />
                </Link>
                <div className="bg-white shadow rounded-lg py-2.5 text-sm font-medium text-orange-500 px-4">
                    <h3 className="font-bold">Unduh Kartu</h3>
                </div>
                <ButtonSound/>
            </div>

            <div className="flex flex-col justify-center h-[80vh] mt-5">
                <div className="flex items-center justify-around">
                    <Link
                        href={`mode-card/2d?group=${group}`}
                        className="flex flex-col items-center justify-center gap-y-3 hover:text-orange-500 px-5"
                    >
                        <Image
                            src='/assets/images/geometry-2d.png'
                            width={100}
                            height={100}
                            alt={""}
                        />
                        <p className='text-xl text-black font-medium text-center'>Bentuk Geometri 2D</p>
                    </Link>

                    <Link
                        href={`mode-card/3d?group=${group}`}
                        className="flex flex-col items-center justify-center gap-y-3 hover:text-orange-500 px-5"
                    >
                        <Image
                            src='/assets/images/geometry-3d.png'
                            width={100}
                            height={100}
                            alt={""}
                        />
                        <p className='text-xl text-black font-medium text-center'>Bentuk Geometri 3D</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
