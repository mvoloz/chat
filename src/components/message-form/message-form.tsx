import React, { ChangeEvent, FocusEvent, SyntheticEvent, useCallback, useState } from 'react';
import { MessageFormProps } from './types';
import { getGiphyQuery, isImageMessage } from './utils';

import './message-form.scss';
import Button from '../button';

const baseClass = 'message-form';

export default function MessageForm({ setGiphyQuery, sendIsTyping, sendMessage }: MessageFormProps) {
  const [newMessage, setNewMessage] = useState<string>('');

  const handleFocus = useCallback(
    (_evt: FocusEvent) => {
      sendIsTyping(true);
    },
    [newMessage]
  );

  const handleBlur = useCallback(
    (_evt: FocusEvent) => {
      sendIsTyping(false);
    },
    [newMessage]
  );

  const handleMessage = useCallback((evt: ChangeEvent<HTMLInputElement>): void => {
    setNewMessage(evt.target.value);
  }, []);

  const handleSendMessage = useCallback(
    (evt: SyntheticEvent): void => {
      evt.preventDefault();
      if (isImageMessage(newMessage)) {
        const giphyQuery = getGiphyQuery(newMessage);
        setGiphyQuery(giphyQuery);
      } else {
        sendMessage(newMessage);
      }
      setNewMessage('');
    },
    [newMessage]
  );

  return (
    <form className={baseClass} onSubmit={handleSendMessage}>
      <input
        placeholder='Message'
        type='text'
        onBlur={handleBlur}
        onChange={handleMessage}
        onFocus={handleFocus}
        value={newMessage}
      />
      <Button id='message-form-button' title='Send' handleClick={handleSendMessage} />
    </form>
  );
}
