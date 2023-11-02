import { Layout } from 'types'
import { TProps } from './type'
import { twMerge } from 'tailwind-merge'
import sound from 'public/assets/sounds/sound.mp3';
import useSound from 'use-sound'
import { useEffect } from 'react';

export const DefaultLayout = ({ children, transparent = false }: Layout & TProps) => {
  
  return (
    <div className={twMerge("mx-auto max-w-md px-5 py-5", !transparent && "bg-[#f9f9f9]")}>
      {children}
    </div>
  )
}
