import React, { useCallback, useState } from 'react';
import Main from '@/components/layout';
import Typers from '@/components/typers';
import ChatMessageList from '@/components/chat-message/chat-message-list';
import GiphyPreview from '@/components/giphy-preview';
import MessageForm from '@/components/message-form';
import If from '@/components/if';

import { useChat } from '@/hooks';

import { IChatPropsType } from './types';

import './chat.scss';

const baseClass = 'chat-view';

export default function Chat({ username }: IChatPropsType) {
  const [giphyQuery, setGiphyQuery] = useState<string>('');
  const { messages, sendImage, sendIsTyping, sendMessage, typers } = useChat(username);

  const handleCloseGiphyPreview = useCallback(() => {
    setGiphyQuery('');
  }, [giphyQuery]);

  return (
    <Main>
      <div className={baseClass}>
        <ChatMessageList messages={messages} />
        <If condition={Boolean(giphyQuery)}>
          <GiphyPreview query={giphyQuery} closeGiphy={handleCloseGiphyPreview} sendImage={sendImage} />
        </If>

        <MessageForm
          setGiphyQuery={setGiphyQuery}
          sendImage={sendImage}
          sendIsTyping={sendIsTyping}
          sendMessage={sendMessage}
        />
        <Typers typers={typers} />
      </div>
    </Main>
  );
}
