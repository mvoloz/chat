import React, { ReactNode } from 'react';

import './layout.scss';

const baseClass = 'layout';

export default function Main({ children }: { children: ReactNode }) {
  return <div className={baseClass}>{children}</div>;
}
