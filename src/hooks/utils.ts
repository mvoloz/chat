import { GIPHY_URI } from '@/constants';

export const buildQuery = (query: string): string => `${GIPHY_URI}${query}`;

export const getRandomImage = (images) => images[Math.floor(images.length * Math.random())];
