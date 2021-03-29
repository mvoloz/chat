import React, { useEffect, useRef } from 'react';
import ChatMessage from './chat-message';

import { useScrollToBottom } from '@/hooks';
import { ChatMessagesListType, IChatMessageType } from '../chat/types';

import './chat-message-list.scss';

const baseClass = 'chat-messages';

export default function ChatMessageList(props: ChatMessagesListType) {
  const { messages } = props;
  const messagesRef = useRef<HTMLUListElement>(null);
  const { scrollToBottom } = useScrollToBottom(messagesRef);

  useEffect(() => {
    /**
     * using timeout to batch the scrolling
     * as it fails to scroll all the way to the bottom
     * on initial load.
     */
    const batchedScroll = setTimeout(() => scrollToBottom(), 100);
    return () => clearTimeout(batchedScroll);
  }, [messages]);

  return (
    <div className={`${baseClass}__container`}>
      <ul className={`${baseClass}__list`} ref={messagesRef}>
        {messages.map((message: IChatMessageType, idx: number) => (
          <ChatMessage key={`${message.time}-${message.username}`} {...message} prevMessage={messages[idx - 1]} />
        ))}
      </ul>
    </div>
  );
}
