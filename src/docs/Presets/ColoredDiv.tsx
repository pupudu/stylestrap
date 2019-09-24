import React from 'react';
import { Box } from '../';

type Props = {
  color?;
  css?;
  height?;
  width?;
};

export const ColoredDiv: React.FC<Props> = ({ color, css, height, width, ...props }) => {
  return (
    <Box
      {...props}
      css={{
        backgroundColor: color,
        height: height || '50px',
        width,
        ...css,
      }}
    />
  );
};
