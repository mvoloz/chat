import { IChatMessages, UsernameType } from '@/components/chat';

type ImageType = {
  title: string;
  height: string;
  size: string;
  url: string;
  alt: string;
  width: string;
};

export type UseGiphyHookType = {
  image: ImageType;
  error: Error;
  shuffleImages: () => void;
};

export type UseChatHookType = {
  messages: IChatMessages;
  sendIsTyping: (isTyping: boolean) => void;
  sendImage: (url: string, alt: string) => void;
  sendMessage: (messageBody: string) => void;
  typers: UsernameType[];
};

export type ScrollToBottomHookType = {
  scrollToBottom: () => void;
};
