'use client'

import Link from "next/link"
import Image from 'next/image'
import { XIcon } from "components/icon"
import { useRouter } from "next/router"
import { Footer } from "components/layouts"
import { useCustomSound } from "hooks"

export const HomeWrapper = () => {
  const { query, push } = useRouter()

  const group = query.group as string ?? '' 

  useCustomSound()

  const onClick = () => {
    push('/')
    
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
            href={`/intro?group=${group}`}
            className="flex flex-col items-center rounded-md py-2 w-[80%] hover:text-orange-500 text-sm text-center"
        >
            <Image
                src='/assets/images/intro.png'
                width={70}
                height={70}
                alt={""}
            />
            <p className='text-xl text-black font-medium text-center'>Pengenalan Bentuk</p>
        </Link>
        <Link
            href={`/mode-ar?group=${group}`}
            className="flex flex-col items-center rounded-md py-2 w-[80%] hover:text-orange-500 text-sm text-center"
        >
            <Image
                src='/assets/images/ar.png'
                width={70}
                height={70}
                alt={""}
            />
            <p className='text-xl text-black font-medium text-center'>Mode AR</p>
        </Link>
        
        <Link 
          href={`/mode-game?group=${group}`}
          className="flex flex-col items-center rounded-md py-2 w-[80%] hover:text-orange-500 text-sm text-center">
            <Image
                src='/assets/images/play.png'
                width={70}
                height={70}
                alt={""}
            />
            <p className='text-xl text-black font-medium text-center'>Bermain</p>
        </Link>

        <Link 
          href={`/mode-card?group=${group}`}
          className="flex flex-col items-center rounded-md py-2 w-[80%] hover:text-orange-500 text-sm text-center">
            <Image
                src='/assets/images/card.png'
                width={70}
                height={70}
                alt={""}
            />
            <p className='text-xl text-black font-medium text-center'>Unduh Kartu</p>
        </Link>
      </div>

      <Footer/>
    </div>
  )
}
