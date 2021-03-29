export type UsernameType = string;

export type TextMessageType = {
  text: string;
};

export enum EMessageTypes {
  text = 'text',
  image = 'image'
}

interface IMessage {
  username: UsernameType;
  time: Date;
}

export interface ITextMessage extends IMessage {
  type: EMessageTypes.text;
  text: string;
}

export interface IImageMessage extends IMessage {
  type: EMessageTypes.image;
  url: string;
  alt: string | null;
}

export type IChatPropsType = {
  username: UsernameType;
};

export type IChatMessageType = ITextMessage | IImageMessage;

export type IChatMessages = (ITextMessage | IImageMessage)[];

export type ChatMessageProps = IChatMessageType & { prevMessage: IChatMessageType | null };

export type ChatMessagesListType = {
  messages: IChatMessages;
};

export type OnlineUserListType = UsernameType[];
