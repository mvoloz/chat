import { RefObject } from 'react';
import { ScrollToBottomHookType } from './types';

export const useScrollToBottom = (ref: RefObject<HTMLUListElement | HTMLUnknownElement>): ScrollToBottomHookType => {
  const scrollToBottom = () => {
    ref.current.scrollIntoView({
      behavior: 'auto',
      block: 'end'
    });
  };
  return {
    scrollToBottom
  };
};
