'use client'

import Link from "next/link"

import Image from 'next/image'
import { HomeIcon, SoundIcon } from "components/icon"
import { dataCard } from "features/mode-card"
import { twMerge } from "tailwind-merge"
import { useCustomSound } from 'hooks'
import { Tab } from "@headlessui/react"
import { useState } from "react"
import { useRouter } from "next/router"
import { dataIntro2D, dataIntro3D } from "features/intro"

export const IntroList = () => {

    const { query } = useRouter()

    const param = query.geometry as string ?? '' 

    const data = param === '2d' ? dataIntro2D : dataIntro3D

    const [tabIndex, setTabIndex] = useState(0)

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

            <div className="w-full max-w-md  mt-5 sm:px-0">
                <Tab.Group
                    onChange={(index) => {
                        setTabIndex(index)
                    }}
                >
                    <Tab.List className="flex space-x-1 rounded-xl bg-orange-900/20 p-1">
                        {data.map((item, index) => (
                            <Tab
                                key={item.category.name}
                                className={({ selected }) =>
                                    twMerge(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-orange-500 hover:bg-white/[0.12] hover:text-white',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-2',
                                        tabIndex === index
                                            ? 'bg-white shadow focus:bg-white focus:text-orange-500'
                                            : 'text-orange-500 bg-neutral-500 hover:bg-white hover:text-white'
                                    )
                                }
                            >
                                {item.category.title}
                            </Tab>
                        ))}
                    </Tab.List>

                    <div 
                        className="grid grid-cols-3 gap-3 py-4" 
                    >
                        {data[tabIndex].data.map((item, index) => (
                            <div key={index} className="flex flex-col items-center justify-center  h-[120px] bg-white rounded-xl">
                                <Image
                                    src={item.image_url}
                                    width={50}
                                    height={50}
                                    alt={""}
                                />
                                <p className='text-md text-black font-medium text-center'>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </Tab.Group>
            </div>
        </div>
    )
}
