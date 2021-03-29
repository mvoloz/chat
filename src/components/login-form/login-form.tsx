import React, { ChangeEvent, SyntheticEvent, useCallback, useState } from 'react';
import Main from '@/components/layout';
import Button, { ButtonType } from '@/components/button';

import './login-form.scss';

const baseClass = 'login-form';

export default function JoinChatForm({ setGlobalUsername }) {
  const [username, setUsername] = useState<string>('');

  const handleUsername = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setUsername(evt.target.value);
  }, []);

  const handleSubmit = useCallback(
    (evt: SyntheticEvent) => {
      evt.preventDefault();
      if (!Boolean(username)) {
        return false;
      }
      setGlobalUsername(username.trim());
    },
    [username]
  );

  return (
    <Main>
      <div className={baseClass}>
        <h2 className={`${baseClass}__heading`}>Join Chat</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='username-input'>Please enter your username</label>
          <input id='username-input' type='text' value={username} onChange={handleUsername} />
          <Button id='login-button' title='Next' handleClick={handleSubmit} type={ButtonType.primary} />
        </form>
      </div>
    </Main>
  );
}
