'use client'

import Link from "next/link"

import { HomeIcon, SoundIcon } from "components/icon"
import { dataGame } from "features/mode-game"

export const ModeGameWrapper = () => {
  return (
    <div className="h-[100vh]">
      <div className="flex justify-between items-end text-neutral-500">
        <Link
          href="/"
          className="text-neutral-500  hover:text-orange-500"
        >
          <HomeIcon />
        </Link>
        <SoundIcon />
      </div>

      <div className="flex flex-col items-center gap-y-10 mt-20">
        {dataGame.map((item, index) => (
          <Link
            key={index.toString()}
            href={`/mode-game/${item.level}`}
            className="bg-neutral-200 rounded-md py-2 w-[50%] hover:bg-orange-500 hover:text-white text-sm text-center"
          >
              {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
