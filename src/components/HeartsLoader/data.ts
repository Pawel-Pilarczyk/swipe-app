import { scaling } from 'src/styles/scaling';

export const SIZE = scaling.hs(200);
export const HEART_SIZE = scaling.hs(30);
export const positions = [
  {
    posx: SIZE / 2 - HEART_SIZE / 2,
    posy: -(HEART_SIZE / 2),
    rotation: 0,
  },
  {
    posx: SIZE / 2 + SIZE / 2 / 3,
    posy: SIZE / 2 / 3 - HEART_SIZE,
    rotation: 30, //
  },
  {
    posx: SIZE / 2 + SIZE / 2 / 1.5,
    posy: SIZE / 2 / 1.5 - HEART_SIZE,
    rotation: 60,
  },
  {
    posx: SIZE - HEART_SIZE / 2,
    posy: SIZE / 2 - HEART_SIZE / 2,
    rotation: 90,
  },
  {
    posx: SIZE / 2 + SIZE / 2 / 1.5,
    posy: SIZE / 2 + HEART_SIZE,
    rotation: 120,
  },
  {
    posx: SIZE / 2 + SIZE / 2 / 3,
    posy: SIZE / 2 + HEART_SIZE * 2.2,
    rotation: 150,
  },
  {
    posx: SIZE / 2 - HEART_SIZE / 2,
    posy: SIZE - HEART_SIZE / 2,
    rotation: 180,
  },
  {
    posx: SIZE / 6,
    posy: SIZE / 2 + HEART_SIZE * 2.2,
    rotation: 210,
  },
  {
    posx: 0,
    posy: SIZE / 2 + HEART_SIZE,
    rotation: 240,
  },
  {
    posx: -HEART_SIZE / 2,
    posy: SIZE / 2 - HEART_SIZE / 2,
    rotation: 270,
  },
  {
    posx: 0,
    posy: SIZE / 2 / 1.5 - HEART_SIZE,
    rotation: 300,
  },
  {
    posx: HEART_SIZE,
    posy: SIZE / 2 / 3 - HEART_SIZE,
    rotation: 330,
  },
];
