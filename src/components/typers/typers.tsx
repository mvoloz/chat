import React from 'react';
import { TypersPropsType } from './types';

import './typers.scss';

const baseClass = 'message-status';

export default function Typers({ typers }: TypersPropsType) {
  if (!typers.length) return <div className={baseClass} />;

  const typersLabel = typers.length > 1 ? 'People are ' : `${typers[0]} is `;

  return (
    <div className={baseClass}>
      <div className={`${baseClass}__typing`}>{typersLabel} is typing...</div>
    </div>
  );
}
