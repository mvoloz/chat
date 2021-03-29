import React, { memo } from 'react';
import { ITextMessage } from '../chat/types';

import './chat-message.scss';

const baseClass = 'chat-message';

function ChatTextMessage({ text }: ITextMessage) {
  return <div className={`${baseClass}__body`}>{text}</div>;
}

export default memo(ChatTextMessage);
