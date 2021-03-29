import { GIPHY_REGEX_TEST, GIPHY_TRIGGER } from '@/constants';

export const isImageMessage = (message: string): boolean => GIPHY_REGEX_TEST.test(message);

export const getGiphyQuery = (message: string): string => message.replace(GIPHY_TRIGGER, '').trim();
