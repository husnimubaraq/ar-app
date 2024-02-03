import { TIntro } from 'features/intro'

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

export const dataIntroTKA2D: TIntro[] = [
    {
        category: {
            name: 'square',
            title: 'Segi 4',
            image_url: '/assets/images/square.png'
        },
        data: [
            {
                image_url: "/assets/models/biscuit/ori.png",
                model: biscuitGlb,
                text: 'Biskuit',
                scale: 0.5,
                name: 'biscuit',
                target: 'target.mind',
                ar_scale: '0.5 0.5 0.5',
                color: '#7db6e1'
            },
            {
                image_url: "/assets/models/door/ori.png",
                model: doorGlb,
                text: 'Pintu',
                scale: 3,
                name: 'door',
                target: 'target.mind',
                ar_scale: '0.7 0.7 0.7',
                color: '#e7cc57'
            },
            {
                image_url: "/assets/models/soap/ori.png",
                model: soapGlb,
                text: 'Sabun Batang',
                scale: 0.1,
                name: 'soap',
                target: 'target.mind',
                ar_scale: '0.5 0.5 0.5',
                color: '#938bb0'
            },
        ]
    },
    {
        category: {
            name: 'circle',
            title: 'Lingkaran',
            image_url: '/assets/images/circle.png'
        },
        data: [
            {
                image_url: "/assets/models/egg_sunny/ori.png",
                model: eggSunnyGlb,
                text: 'Telur Mata Sapi',
                scale: 0.4,
                name: 'egg_sunny',
                target: 'target.mind',
                ar_scale: '3 3 3',
                color: '#8ebb68'
            },
            {
                image_url: "/assets/models/sunflower/ori.png",
                model: sunflowerGlb,
                text: 'Bunga Matahari',
                scale: 0.02,
                name: 'sunflower',
                target: 'target.mind',
                ar_scale: '0.02 0.02 0.02',
                color: '#7db6e1'
            },
            {
                image_url: "/assets/models/sun/ori.png",
                model: sunGlb,
                text: 'Matahari',
                scale: 0.4,
                name: 'sun',
                target: 'target.mind',
                ar_scale: '0.09 0.09 0.09',
                color: '#8ebb68'
            },
            {
                image_url: "/assets/models/moon/ori.png",
                model: moonGlb,
                text: 'Bulan',
                scale: 1,
                name: 'moon',
                target: 'target.mind',
                ar_scale: '0.5 0.5 0.5',
                color: '#da7bb3'
            },
        ]
    },
    {
        category: {
            name: 'triangle',
            title: 'Segitiga',
            image_url: '/assets/images/triangle.png'
        },
        data: [
            {
                image_url: "/assets/models/watermelon/ori.png",
                model: watermelonGlb,
                text: 'Potongan Semangka',
                scale: 0.05,
                name: 'watermelon',
                target: 'target.mind',
                ar_scale: '0.05 0.05 0.05',
                color: '#e79353'
            },
            {
                image_url: "/assets/models/carrot/ori.png",
                model: carrotGlb,
                text: 'Wortel',
                scale: 0.5,
                name: 'carrot',
                target: 'target.mind',
                ar_scale: '5 5 5',
                color: '#938bb0'
            },
            {
                image_url: "/assets/models/strawberry/ori.png",
                model: strawberryGlb,
                text: 'Stroberi',
                scale: 0.5,
                name: 'strawberry',
                target: 'target.mind',
                ar_scale: '0.01 0.01 0.01',
                color: '#e7cc57'
            },
            {
                image_url: "/assets/models/sandwich/ori.png",
                model: sandwichGlb,
                text: 'Senwich',
                scale: 0.5,
                name: 'sandwich',
                target: 'target.mind',
                ar_scale: '0.01 0.01 0.01',
                color: '#e7cc57'
            },
        ]
    }
]

export const dataIntroTKA3D: TIntro[] = [
    {
        category: {
            name: 'cube',
            title: 'Kubus',
            image_url: '/assets/images/cube.png'
        },
        data: [
            {
                image_url: "/assets/models/lunchbox/ori.png",
                model: lunchboxGlb,
                text: 'Kotak Makan',
                scale: 15,
                name: 'lunchbox',
                target: 'target.mind',
                ar_scale: '15 15 15',
                color: '#da7bb3'
            },
            {
                image_url: "/assets/models/trash/ori.png",
                model: trashGlb,
                text: 'Tempat Sampah',
                scale: 0.5,
                name: 'trash',
                target: 'target.mind',
                ar_scale: '0.5 0.5 0.5',
                color: '#7db6e1'
            },
            {
                image_url: "/assets/models/red_basket/ori.png",
                model: redBasketGlb,
                text: 'Kerangjang',
                scale: 0.5,
                name: 'red_basket',
                target: 'target.mind',
                ar_scale: '0.01 0.01 0.01',
                color: '#e7cc57'
            },
        ]
    },
    {
        category: {
            name: 'ball',
            title: 'Bola',
            image_url: '/assets/images/ball.png'
        },
        data: [
            {
                image_url: "/assets/models/orange/ori.png",
                model: orangeGlb,
                text: 'Jeruk',
                scale: 1,
                name: 'orange',
                target: 'target.mind',
                ar_scale: '1 1 1',
                color: '#938bb0'
            },
            {
                image_url: "/assets/models/egg/ori.png",
                model: eggGlb,
                text: 'Telur',
                scale: 15,
                name: 'egg',
                target: 'target.mind',
                ar_scale: '15 15 15',
                color: '#da7bb3'
            },
            {
                image_url: "/assets/models/pear/ori.png",
                model: pearGlb,
                text: 'Buah Pir',
                scale: 0.02,
                name: 'pear',
                target: 'target.mind',
                ar_scale: '2.5 2.5 2.5',
                color: '#e7cc57'
            },
            {
                image_url: "/assets/models/apple/ori.png",
                model: appleGlb,
                text: 'Apel',
                scale: 0.4,
                name: 'apple',
                target: 'target.mind',
                ar_scale: '0.01 0.01 0.01',
                color: '#8ebb68'
            }
        ]
    },
    {
        category: {
            name: 'tube',
            title: 'Tabung',
            image_url: '/assets/images/tube.png'
        },
        data: [
            {
                image_url: "/assets/models/glass/ori.png",
                model: glassGlb,
                text: 'Gelas',
                scale: 0.1,
                name: 'glass',
                target: 'target.mind',
                ar_scale: '0.03 0.03 0.03',
                color: '#938bb0'
            },
            {
                image_url: "/assets/models/jar/ori.png",
                model: jarGlb,
                text: 'Toples',
                scale: 1,
                name: 'jar',
                target: 'target.mind',
                ar_scale: '1 1 1',
                color: '#8ebb68'
            },
            {
                image_url: "/assets/models/oil_drum/ori.png",
                model: oilDrumGlb,
                text: 'Drum',
                scale: 0.15,
                name: 'oil_drum',
                target: 'target.mind',
                ar_scale: '0.15 0.15 0.15',
                color: '#da7bb3'
            },
        ]
    }
]