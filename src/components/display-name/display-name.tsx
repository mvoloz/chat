import React from 'react';
import { formatTime } from './utils';
import { DisplayNameType } from './types';

import './display-name.scss';

const baseClass = 'display-name';

export default function DisplayName({ username, time, show = true }: DisplayNameType) {
  if (!show) return null;

  return (
    <div className={baseClass}>
      <div className={`${baseClass}__username`}>{username}</div>
      <div className={`${baseClass}__timestamp`}>{formatTime(time)}</div>
    </div>
  );
}
