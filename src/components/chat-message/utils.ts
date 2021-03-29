import { IChatMessageType } from '../chat/types';

export const withinTimeFromSameUser = (username: string, timestamp: Date, prevMessage: IChatMessageType): boolean => {
  const dt1 = new Date(timestamp).getTime();
  const dt2 = new Date(prevMessage.time).getTime();

  return (dt1 - dt2) / 1000 < 30 && username === prevMessage.username;
};
