'use client'
import Image from 'next/image'
import { HomeIcon, SoundIcon } from "components/icon"
import { dataCard } from "features/mode-card"
import Link from "next/link"
import { twMerge } from "tailwind-merge"
import { useCustomSound } from 'hooks'
import { useRouter } from 'next/router'
import { dataIntro2D, dataIntro3D } from 'features/intro'

export const ModeCardList = () => {

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
                <SoundIcon />
            </div>

            <div className="relative h-[80vh] mt-5">
                <div className="grid grid-cols-3 gap-2">
                    {data?.data.map((item, index) => (
                        <Link
                            key={index.toString()}
                            href={`/mode-card/${geometry}/${category}/${item.name}`}
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
                                <label className='text-md text-white font-bold my-2 text-center'>{item.text}</label>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
