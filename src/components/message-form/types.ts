export type MessageFormProps = {
  setGiphyQuery: (query: string) => void;
  sendIsTyping: (isTyping: boolean) => void;
  sendImage: (url: string, alt: string) => void;
  sendMessage: (messageBody: string) => void;
};
