'use client'
import Image from 'next/image'
import { HomeIcon, SoundIcon } from "components/icon"
import { dataCard } from "features/mode-card"
import Link from "next/link"
import { twMerge } from "tailwind-merge"
import { useCustomSound } from 'hooks'

export const IntroWrapper = () => {

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

            <div className="relative h-[80vh] mt-5">
                
            </div>
        </div>
    )
}
