'use client'

import useEmblaCarousel from 'embla-carousel-react'

import { TProps } from "./type"

export const ModeGamePlayCarousel = (props: TProps) => {
    const { data, onClick } = props

    const [emblaRef] = useEmblaCarousel()

    return (
        <div className='fixed bottom-0 left-0 right-0 max-w-md mx-auto'>
            <div
                ref={emblaRef}
                className='overflow-hidden bg-neutral-200'
            >
                <div 
                    className="flex items-center gap-x-3 py-3 px-3 w-full"
                >
                    {data.map((item, index) => (
                        <div 
                            key={index.toString()}
                            onClick={() => onClick(item, index)}
                            className="relative h-[100px] w-[90px] cursor-pointer border border-neutral-200 hover:border-orange-500 rounded-md"
                        >
                            <img
                                src={item.image_url}
                                alt={item.image_url}
                                className="h-full w-full object-cover rounded-md"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
