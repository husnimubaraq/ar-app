'use client'
import Image from 'next/image'
import { HomeIcon, SoundIcon } from "components/icon"
import { dataCard } from "features/mode-card"
import Link from "next/link"
import { twMerge } from "tailwind-merge"
import { useCustomSound } from 'hooks'

export const ModeCardWrapper = () => {

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
                <div className="grid grid-cols-3 gap-2">
                    {dataCard.map((item, index) => (
                        <Link
                            key={index.toString()}
                            href={`/mode-card/${item.title}`}
                            className={twMerge(
                                'p-2 rounded-md cursor-pointer border border-white hover:border-orange-500'
                            )}
                            style={{
                                backgroundColor: item.color
                            }}
                        >
                            <div
                                className='bg-white rounded-t-md px-2 w-full h-[150px] flex flex-col items-center justify-center'
                            >
                                <Image
                                    src={item.image_url}
                                    width={200}
                                    height={200}
                                    className='object-cover'
                                    alt={""}
                                />
                            </div>

                            <div className='flex flex-col items-center'>
                                <label className='text-md text-white font-bold my-2 text-center'>{item.title}</label>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
