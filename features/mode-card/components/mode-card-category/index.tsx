'use client'

import Link from "next/link"

import Image from 'next/image'
import { HomeIcon, SoundIcon } from "components/icon"
import { dataCard } from "features/mode-card"
import { twMerge } from "tailwind-merge"
import { useMemo } from "react"
import { useCustomSound, useMenuSound } from 'hooks'
import { useRouter } from "next/router"
import { dataIntro2D, dataIntro3D, dataIntroTKA2D, dataIntroTKA3D } from "features/intro"
import geo2dSound from 'public/assets/sounds/geometri2d.wav';
import geo3dSound from 'public/assets/sounds/geometri3d.wav';

export const ModeCardCategory = () => {

    const { query } = useRouter()

    const param = query.geometry as string ?? '' 
    const group = query.group as string ?? ''

    const data = useMemo(() => {
        if(group === "TKA"){
            return param === '2d' ? dataIntroTKA2D : dataIntroTKA3D
        }else{
            return param === '2d' ? dataIntro2D : dataIntro3D
        }
    }, [param, group])

    useMenuSound(param === '2d' ? geo2dSound : geo3dSound)

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
                    <h3 className="font-bold capitalize">Bentuk Geometri <span className="uppercase">{param}</span></h3>
                </div>
                <div id="btn-sound">
                    <SoundIcon />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center h-[60vh] gap-y-10 mt-20">
                {data.map((item, index) => (
                    <Link
                        key={index}
                        href={`${param}/${item.category.name}?group=${group}`}
                        className="bg-neutral-200 rounded-md py-2 w-[80%] hover:bg-orange-500 hover:text-white text-sm text-center"
                    >
                        {item.category.title}
                    </Link>
                ))}
            </div>
        </div>
    )
}
