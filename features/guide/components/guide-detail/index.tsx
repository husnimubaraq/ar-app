'use client'

import Image from 'next/image'
import { XIcon } from "components/icon"
import { Footer } from "components/layouts"
import { useCustomSound } from 'hooks'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const GuideDetail = () => {
    const { query } = useRouter()

    const type = query.type as string ?? ''

    const imageUrl = type === 'ar' ? '/assets/images/panduan3.jpg' : '/assets/images/panduan4.png'
    
    useCustomSound()

    return (
        <div className="">
            <div className="relative border-2 border-neutral-400 h-[70vh] mt-10 bg-[#fff]">
                <div className="absolute -top-5 left-0 right-0" style={{zIndex: 10}}>
                    <div className="bg-neutral-200 py-2 rounded-full text-center mx-[10%] font-bold" >
                        <label>PANDUAN</label>
                    </div>
                </div>

                <div className="relative " style={{zIndex: 0}}>
                    <div
                        className='rounded-t-md w-full h-[65vh] flex flex-col items-center justify-center overflow-auto pt-5'
                    >
                        <img
                            src={imageUrl}
                            className='w-full h-full object-contain'
                        />
                    </div>
                </div>

                <div className="absolute -bottom-4 left-0 right-0 flex justify-center">
                    <Link 
                        href="/"
                        className="rounded-full text-white bg-neutral-500 w-fit flex flex-col items-center">
                        <XIcon width={30} height={30} />
                    </Link>
                </div>
            </div>

            <Footer disabled />
        </div>
    )
}
