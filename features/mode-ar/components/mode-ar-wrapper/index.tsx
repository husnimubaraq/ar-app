'use client'

import Link from "next/link"

import { HomeIcon, SoundIcon } from "components/icon"

export const ModeArWrapper = () => {
  return (
    <div>
      <div className="flex justify-between items-end text-neutral-500">
        <Link
          href="/"
          className="text-neutral-500  hover:text-orange-500"
        >
          <HomeIcon />
        </Link>
        <SoundIcon />
      </div>


    </div>
  )
}
