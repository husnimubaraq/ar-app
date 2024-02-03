'use client'

import Link from "next/link"
import Image from 'next/image'
import { XIcon } from "components/icon"
import { Footer } from "components/layouts"

export const MainWrapper = () => {

  const onClick = () => {
    //@ts-ignore
    window.ReactNativeWebView.postMessage(
        JSON.stringify({
            type: 'btn-exit'
        })
    )
  }
    
  return (
    <div 
      className="h-[100vh]"
    >
      <div className="flex flex-col items-end text-neutral-500">
        <button onClick={onClick} >
          <XIcon />
        </button>
      </div>

      <div className="flex items-center justify-center gap-x-2 mt-10">
        <h1 className="font-bold text-6xl">AR</h1>

        <div className="flex flex-col">
            <h3 className="font-bold text-2xl">FLASHCARD</h3>

            <h5 className="font-medium">BENTUK & BENDA</h5>
        </div>
      </div>

      <div className="flex flex-col items-center gap-y-5 mt-10">
        <Link
            href='/home?group=TKA'
            className="flex flex-col items-center rounded-md py-2 w-[80%] hover:text-orange-500 text-sm text-center"
        >
            <Image
                src='/assets/images/intro.png'
                width={70}
                height={70}
                alt={""}
            />
            <p className='text-xl text-black font-medium text-center'>TK Kelompok A</p>
        </Link>
        <Link
            href='/home?group=TKB'
            className="flex flex-col items-center rounded-md py-2 w-[80%] hover:text-orange-500 text-sm text-center"
        >
            <Image
                src='/assets/images/ar.png'
                width={70}
                height={70}
                alt={""}
            />
            <p className='text-xl text-black font-medium text-center'>TK Kelompok B</p>
        </Link>
      </div>

      <Footer/>
    </div>
  )
}
