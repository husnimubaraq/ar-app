import { TModeGame } from 'features/mode-game';

import cardboardBoxGlb from 'public/assets/models/cardboard_box/scene.glb'
import cardboardLowpolyGlb from 'public/assets/models/cardboard_lowpoly/scene.glb'
import clockGlb from 'public/assets/models/clock/scene.glb'
import bookGlb from 'public/assets/models/book/scene.glb'
import kiteGlb from 'public/assets/models/kite/scene.glb'
import soccerBallGlb from 'public/assets/models/soccer-ball/scene.glb'
import whiteboardGlb from 'public/assets/models/whiteboard/scene.glb'
import marblesGlb from 'public/assets/models/marbles/scene.glb'
import smartphoneGlb from 'public/assets/models/smartphone/scene.glb'
import bucketGlb from 'public/assets/models/bucket/scene.glb'
import wheelGlb from 'public/assets/models/wheel/scene.glb'
import diceGlb from 'public/assets/models/dice/scene.glb'
import balloonsGlb from 'public/assets/models/balloons/scene.glb'
import canGlb from 'public/assets/models/can/scene.glb'
import platesGlb from 'public/assets/models/plates/scene.glb'
import eraserGlb from 'public/assets/models/eraser/scene.glb'
import radioGlb from 'public/assets/models/radio/scene.glb'
import cupGlb from 'public/assets/models/cup/scene.glb'
import hangerGlb from 'public/assets/models/hanger/scene.glb'
import chairGlb from 'public/assets/models/chair/scene.glb'
import bellGlb from 'public/assets/models/bell/scene.glb'
import fanGlb from 'public/assets/models/fan/scene.glb'
import bottleGlb from 'public/assets/models/bottle/scene.glb'
import glassBowlGlb from 'public/assets/models/glass_bowl/scene.glb'
import conicalHatGlb from 'public/assets/models/conical_hat/scene.glb'
import gasGlb from 'public/assets/models/gas/scene.glb'
import rubricGlb from 'public/assets/models/rubric/scene.glb'

export const dataGame: TModeGame[] = [
    {
        level: 'level-1',
        title: 'Level 1',
        game: [
            {
                image_url: "/assets/models/cardboard_box/low.jpg",
                model: cardboardBoxGlb,
                text: 'Kotak Kardus',
                scale: 0.5,
                name: 'cardboard_box'
            },
            {
                image_url: "/assets/models/clock/low.jpg",
                model: clockGlb,
                text: 'Jam',
                scale: 3,
                name: 'clock'
            },
            {
                image_url: "/assets/models/book/low.jpg",
                model: bookGlb,
                text: 'Buku',
                scale: 0.1,
                name: 'book'
            },
            {
                image_url: "/assets/models/kite/low.jpg",
                model: kiteGlb,
                text: 'Layang-Layang',
                scale: 0.5,
                name: 'kite'
            },
            {
                image_url: "/assets/models/cardboard_lowpoly/low.jpg",
                model: cardboardLowpolyGlb,
                text: 'Kardus Makan',
                scale: 3,
                name: 'cardboard_lowpoly'
            },
            {
                image_url: "/assets/models/soccer-ball/low.jpg",
                model: soccerBallGlb,
                text: 'Bola',
                scale: 1,
                name: 'soccer-ball'
            },
            {
                image_url: "/assets/models/whiteboard/low.jpg",
                model: whiteboardGlb,
                text: 'Papan Tulis',
                scale: 0.5,
                name: 'whiteboard'
            },
            {
                image_url: "/assets/models/marbles/low.jpg",
                model: marblesGlb,
                text: 'Kelereng',
                scale: 15,
                name: 'marbles'
            },
            {
                image_url: "/assets/models/smartphone/low.jpg",
                model: smartphoneGlb,
                text: 'Smartphone',
                scale: 0.5,
                name: 'smartphone'
            }
        ]
    },
    {
        level: 'level-2',
        title: 'Level 2',
        game: [
            {
                image_url: "/assets/models/bucket/low.jpg",
                model: bucketGlb,
                text: 'Ember',
                scale: 0.05,
                name: 'bucket'
            },
            {
                image_url: "/assets/models/wheel/low.jpg",
                model: wheelGlb,
                text: 'Roda',
                scale: 0.4,
                name: 'wheel'
            },
            {
                image_url: "/assets/models/dice/low.jpg",
                model: diceGlb,
                text: 'Dadu',
                scale: 1,
                name: 'dice'
            },
            {
                image_url: "/assets/models/balloons/low.jpg",
                model: balloonsGlb,
                text: 'Balon',
                scale: 3,
                name: 'balloons'
            }, 
            {
                image_url: "/assets/models/can/low.jpg",
                model: canGlb,
                text: 'Kaleng',
                scale: 0.1,
                name: 'can'
            },
            {
                image_url: "/assets/models/plates/low.jpg",
                model: platesGlb,
                text: 'Piring',
                scale: 0.02,
                name: 'plates'
            },
            {
                image_url: "/assets/models/rubric/low.jpg",
                model: rubricGlb,
                text: 'Rubrik',
                scale: 15,
                name: 'rubric'
            },
            {
                image_url: "/assets/models/eraser/low.jpg",
                model: eraserGlb,
                text: 'Penghapus Papan',
                scale: 0.05,
                name: 'eraser'
            },
            {
                image_url: "/assets/models/radio/low.jpg",
                model: radioGlb,
                text: 'Radio',
                scale: 0.005,
                name: 'radio'
            }
        ]
    },
    {
        level: 'level-3',
        title: 'Level 3',
        game: [
            {
                image_url: "/assets/models/cup/low.jpg",
                model: cupGlb,
                text: 'Cangkir',
                scale: 0.5,
                name: 'cup'
            },
            {
                image_url: "/assets/models/hanger/low.jpg",
                model: hangerGlb,
                text: 'Hanger',
                scale: 0.05,
                name: 'hanger'
            },
            {
                image_url: "/assets/models/chair/low.jpg",
                model: chairGlb,
                text: 'Kursi',
                scale: 0.5,
                name: 'chair'
            },
            {
                image_url: "/assets/models/bell/low.jpg",
                model: bellGlb,
                text: 'Lonceng',
                scale: 0.003,
                name: 'bell'
            },
            {
                image_url: "/assets/models/fan/low.jpg",
                model: fanGlb,
                text: 'Kipas Angin',
                scale: 0.0005,
                name: 'fan'
            },
            {
                image_url: "/assets/models/bottle/low.jpg",
                model: bottleGlb,
                text: 'Botol Minum',
                scale: 0.15,
                name: 'bottle'
            },
            {
                image_url: "/assets/models/glass_bowl/low.jpg",
                model: glassBowlGlb,
                text: 'Mangkuk',
                scale: 15,
                name: 'glass_bowl'
            },
            {
                image_url: "/assets/models/conical_hat/low.jpg",
                model: conicalHatGlb,
                text: 'Caping',
                scale: 5,
                name: 'conical_hat'
            },
            {
                image_url: "/assets/models/gas/low.jpg",
                model: gasGlb,
                text: 'Tabung Gas',
                scale: 1,
                name: 'gas'
            }
        ]
    }
]