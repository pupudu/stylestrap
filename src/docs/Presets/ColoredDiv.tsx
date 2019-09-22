import React from 'react';
import { Styled } from '../';

export function ColoredDiv({ color, css, ...props }) {
  return (
    <Styled
      {...props}
      css={{
        backgroundColor: color,
        height: '50px',
        ...css,
      }}
    />
  );
}
