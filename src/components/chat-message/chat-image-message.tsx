import React, { memo } from 'react';
import { IImageMessage } from '../chat/types';

function ChatImageMessage({ url, alt }: IImageMessage) {
  return (
    <div className='chat-message__body'>
      <img src={url} alt={alt} />
    </div>
  );
}

export default memo(ChatImageMessage);
