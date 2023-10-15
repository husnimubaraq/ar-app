import { TModeGame } from 'features/mode-game';

import bearGlb from 'public/assets/models/bear/bear.glb'
import raccoonGlb from 'public/assets/models/raccoon/raccoon.glb'
import foxGlb from 'public/assets/models/fox/Fox.glb'
import droneGlb from 'public/assets/models/drone/Drone.glb'
import gunaiGlb from 'public/assets/models/kunai/Kunai.glb'

export const dataGame: TModeGame[] = [
    {
        level: 'level-1',
        title: 'Level 1',
        game: [
            {
                image_url: "https://source.unsplash.com/300x208/?polar bears",
                model: bearGlb,
                text: 'Beruang'
            },
            {
                image_url: "https://source.unsplash.com/300x208/?raccoon",
                model: raccoonGlb,
                text: 'Rakun'
            },
            {
                image_url: "https://source.unsplash.com/300x208/?fox",
                model: foxGlb,
                text: 'Rubah'
            },
            {
                image_url: "https://source.unsplash.com/300x208/?drone",
                model: droneGlb,
                text: 'Drone'
            },
            {
                image_url: "https://source.unsplash.com/300x208/?kunai",
                model: gunaiGlb,
                text: 'Kunai'
            }
        ]
    },
    {
        level: 'level-2',
        title: 'Level 2',
        game: [
            {
                image_url: "https://source.unsplash.com/300x208/?polar bears",
                model: bearGlb,
                text: 'Beruang'
            },
            {
                image_url: "https://source.unsplash.com/300x208/?raccoon",
                model: raccoonGlb,
                text: 'Rakun'
            },
            {
                image_url: "https://source.unsplash.com/300x208/?fox",
                model: foxGlb,
                text: 'Rubah'
            },
        ]
    },
    {
        level: 'level-3',
        title: 'Level 3',
        game: [
            {
                image_url: "https://source.unsplash.com/300x208/?polar bears",
                model: bearGlb,
                text: 'Beruang'
            },
            {
                image_url: "https://source.unsplash.com/300x208/?raccoon",
                model: raccoonGlb,
                text: 'Rakun'
            },
            {
                image_url: "https://source.unsplash.com/300x208/?fox",
                model: foxGlb,
                text: 'Rubah'
            },
        ]
    }
]