export type GiphyPreviewPropsType = {
  query: string;
  closeGiphy: () => void;
  sendImage: (url: string, alt: string) => void;
};
