import React from 'react';
import { buildAvatarInitials } from './utils';

import './avatar.scss';

export default function Avatar({ username, show = true }: { username: string; show: boolean }) {
  if (!show) return null;
  const initials = buildAvatarInitials(username);

  return <div className='avatar'>{initials}</div>;
}
