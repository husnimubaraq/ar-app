import { TModeGame } from 'features/mode-game';

//square
import biscuitGlb from 'public/assets/models/biscuit/scene.glb'
import doorGlb from 'public/assets/models/door/scene.glb'
import soapGlb from 'public/assets/models/soap/scene.glb'

//circle
import donutGlb from 'public/assets/models/donut/scene.glb'
import eggSunnyGlb from 'public/assets/models/egg_sunny/scene.glb'
import sunflowerGlb from 'public/assets/models/sunflower/scene.glb'
import sunGlb from 'public/assets/models/sun/scene.glb'
import moonGlb from 'public/assets/models/moon/scene.glb'

//triangle
import watermelonGlb from 'public/assets/models/watermelon/scene.glb'
import carrotGlb from 'public/assets/models/carrot/scene.glb'
import strawberryGlb from 'public/assets/models/strawberry/scene.glb'
import sandwichGlb from 'public/assets/models/sandwich/scene.glb'

//cube
import milkCarton from 'public/assets/models/milk_carton/scene.glb'
import lunchboxGlb from 'public/assets/models/lunchbox/scene.glb'
import trashGlb from 'public/assets/models/trash/scene.glb'
import redBasketGlb from 'public/assets/models/red_basket/scene.glb'

//ball
import orangeGlb from 'public/assets/models/orange/scene.glb'
import eggGlb from 'public/assets/models/egg/scene.glb'
import pearGlb from 'public/assets/models/pear/scene.glb'
import appleGlb from 'public/assets/models/apple/scene.glb'

//tube
import glassGlb from 'public/assets/models/glass/scene.glb'
import jarGlb from 'public/assets/models/jar/scene.glb'
import vaseGlb from 'public/assets/models/vase/scene.glb'
import oilDrumGlb from 'public/assets/models/oil_drum/scene.glb'
import tinCanGlb from 'public/assets/models/tin_can/scene.glb'

export const dataGameTKA2D: TModeGame[] = [
    {
        level: 'level-1',
        title: 'Segi Empat',
        game: [
            {
                image_url: "/assets/models/biscuit/ori.png",
                model: biscuitGlb,
                text: 'Biskuit',
                scale: 1,
                name: 'biscuit',
            },
            {
                image_url: "/assets/models/door/ori.png",
                model: doorGlb,
                text: 'Pintu',
                scale: 0.02,
                name: 'door',
            },
            {
                image_url: "/assets/models/soap/ori.png",
                model: soapGlb,
                text: 'Sabun Batang',
                scale: 0.1,
                name: 'soap',
            },
        ]
    },
    {
        level: 'level-2',
        title: 'Lingkaran',
        game: [
            {
                image_url: "/assets/models/sunflower/ori.png",
                model: sunflowerGlb,
                text: 'Bunga Matahari',
                scale: 0.02,
                name: 'sunflower',
            },
            {
                image_url: "/assets/models/sun/ori.png",
                model: sunGlb,
                text: 'Matahari',
                scale: 0.1,
                name: 'sun',
            },
            {
                image_url: "/assets/models/moon/ori.png",
                model: moonGlb,
                text: 'Bulan',
                scale: 1,
                name: 'moon',
            },
        ]
    },
    {
        level: 'level-3',
        title: 'Segitiga',
        game: [
            {
                image_url: "/assets/models/watermelon/ori.png",
                model: watermelonGlb,
                text: 'Potongan Semangka',
                scale: 1,
                name: 'watermelon',
            },
            {
                image_url: "/assets/models/carrot/ori.png",
                model: carrotGlb,
                text: 'Wortel',
                scale: 5,
                name: 'carrot',
            },
            {
                image_url: "/assets/models/strawberry/ori.png",
                model: strawberryGlb,
                text: 'Stroberi',
                scale: 3,
                name: 'strawberry',
            },
            {
                image_url: "/assets/models/sandwich/ori.png",
                model: sandwichGlb,
                text: 'Senwich',
                scale: 8,
                name: 'sandwich',
            },
        ]
    }
]

export const dataGameTKA3D: TModeGame[] = [
    {
        level: 'level-1',
        title: 'Kubus',
        game: [
            {
                image_url: "/assets/models/lunchbox/ori.png",
                model: lunchboxGlb,
                text: 'Kotak Makan',
                scale: 15,
                name: 'lunchbox',
            },
            {
                image_url: "/assets/models/trash/ori.png",
                model: trashGlb,
                text: 'Tempat Sampah',
                scale: 3,
                name: 'trash',
            },
            {
                image_url: "/assets/models/red_basket/ori.png",
                model: redBasketGlb,
                text: 'Kerangjang',
                scale: 5,
                name: 'red_basket',
            },
        ]
    },
    {
        level: 'level-2',
        title: 'Bola',
        game: [
            {
                image_url: "/assets/models/orange/ori.png",
                model: orangeGlb,
                text: 'Jeruk',
                scale: 10,
                name: 'orange',
            },
            {
                image_url: "/assets/models/egg/ori.png",
                model: eggGlb,
                text: 'Telur',
                scale: 1,
                name: 'egg',
            },
            {
                image_url: "/assets/models/pear/ori.png",
                model: pearGlb,
                text: 'Buah Pir',
                scale: 7,
                name: 'pear',
            },
            {
                image_url: "/assets/models/apple/ori.png",
                model: appleGlb,
                text: 'Apel',
                scale: 5,
                name: 'apple',
            }
        ]
    },
    {
        level: 'level-3',
        title: 'Tabung',
        game: [
            {
                image_url: "/assets/models/glass/ori.png",
                model: glassGlb,
                text: 'Gelas',
                scale: 8,
                name: 'glass',
            },
            {
                image_url: "/assets/models/jar/ori.png",
                model: jarGlb,
                text: 'Toples',
                scale: 0.5,
                name: 'jar',
            },
            {
                image_url: "/assets/models/oil_drum/ori.png",
                model: oilDrumGlb,
                text: 'Drum',
                scale: 0.05,
                name: 'oil_drum',
            },
        ]
    }
]