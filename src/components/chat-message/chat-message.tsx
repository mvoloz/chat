import React, { memo } from 'react';
import Avatar from '@/components/avatar';
import DisplayName from '@/components/display-name';
import If from '@/components/if';

import ChatTextMessage from './chat-text-message';
import ChatImageMessage from './chat-image-message';

import { withinTimeFromSameUser } from './utils';

import { ChatMessageProps, EMessageTypes, IImageMessage, ITextMessage } from '@/components/chat';

import './chat-message.scss';

const baseClass = 'chat-message';

function ChatMessage(props: ChatMessageProps) {
  const { type, username, time, prevMessage } = props;

  const hasPrevMsg = prevMessage && withinTimeFromSameUser(username, time, prevMessage);
  const isImgMsg = type === EMessageTypes.image;

  const wrapperClass = [baseClass, hasPrevMsg && '__with-previous'].filter(Boolean).join('');

  return (
    <li className={wrapperClass}>
      <Avatar username={username} show={!hasPrevMsg} />
      <div className={`${baseClass}__wrapper`}>
        <DisplayName username={username} time={time} show={!hasPrevMsg} />
        <If condition={isImgMsg} then={<ChatImageMessage {...(props as IImageMessage)} />}>
          <ChatTextMessage {...(props as ITextMessage)} />
        </If>
      </div>
    </li>
  );
}

export default memo(ChatMessage);
