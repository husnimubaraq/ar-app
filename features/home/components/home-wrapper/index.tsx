'use client'

import Link from "next/link"

import { XIcon } from "components/icon"
import { Footer } from "components/layouts"
import { useCustomSound } from "hooks"

export const HomeWrapper = () => {

  useCustomSound()

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
      <button onClick={onClick} className="flex flex-col items-end text-neutral-500">
        <XIcon />
      </button>

      <div className="flex items-center justify-center gap-x-2 mt-10">
        <h1 className="font-bold text-6xl">AR</h1>

        <div className="flex flex-col">
            <h3 className="font-bold text-2xl">FLASHCARD</h3>

            <h5 className="font-medium">BENTUK & BENDA</h5>
        </div>
      </div>

      <div className="flex flex-col items-center gap-y-10 mt-20">
        <Link
            href='/intro'
            className="bg-neutral-200 rounded-md py-2 w-[80%] hover:bg-orange-500 hover:text-white text-sm text-center"
        >
            PENGENALAN BENTUK
        </Link>
        <Link
            href='/mode-ar'
            className="bg-neutral-200 rounded-md py-2 w-[80%] hover:bg-orange-500 hover:text-white text-sm text-center"
        >
            MODE AR
        </Link>
        
        <Link href='/mode-game' className="bg-neutral-200 rounded-md py-2 w-[80%] hover:bg-orange-500 hover:text-white text-sm text-center">
            BERMAIN
        </Link>

        <Link href="/mode-card" className="bg-neutral-200 rounded-md py-2 w-[80%] hover:bg-orange-500 hover:text-white text-sm text-center">
            UNDUH KARTU
        </Link>
      </div>

      <Footer/>
    </div>
  )
}
