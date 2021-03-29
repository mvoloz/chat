import React, { useState } from 'react';
import Chat from '@/components/chat';
import If from '@/components/if';
import LoginForm from '@/components/login-form';

import './app.scss';

export default function App() {
  const [globalUsername, setGlobalUsername] = useState<string>('');
  const hasGlobalUsername = Boolean(globalUsername);

  return (
    <div className='app'>
      <If condition={!hasGlobalUsername} then={<LoginForm setGlobalUsername={setGlobalUsername} />}>
        <Chat username={globalUsername} />
      </If>
    </div>
  );
}
