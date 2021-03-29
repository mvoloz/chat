import React from 'react';
import { ButtonType, ButtonProps } from './types';

import './button.scss';

const baseClass = 'button';

export default function Button({ id, handleClick, modifier, title, type = ButtonType.default }: ButtonProps) {
  return (
    <button id={id} className={`${baseClass} ${baseClass}__${type} ${modifier ? modifier : ''}`} onClick={handleClick}>
      {title}
    </button>
  );
}
