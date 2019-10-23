import React from 'react';
import { Box } from '../';

type Props =
  | {
      color?;
      $css?;
      height?;
      width?;
    }
  | any;

export const ColoredDiv: React.FC<Props> = ({ color, $css, height, width, ...props }) => {
  return (
    <Box
      {...props}
      $css={(_, theme) => ({
        backgroundColor: color,
        color: theme.colorByLuminance(color),
        height: height || '50px',
        width,
        ...$css,
      })}
    />
  );
};
