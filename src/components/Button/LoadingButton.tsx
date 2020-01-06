import React from 'react';
import { Button } from './Button';
import { Loading } from '../Spinner';
import { LoadingButtonProps } from './Types';

const LoadingSizeMap = {
  lg: '24px',
  sm: '18px',
  xs: '15px',
  undefined: '18px',
};

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  loading,
  direction,
  $css,
  ...props
}) => {
  const marginDirection = direction === 'right' ? 'marginLeft' : 'marginRight';

  const size = loading ? LoadingSizeMap[String(props.size)] : 0;
  const styles = {
    [marginDirection]: loading ? `calc(${size} * 2 / 5)` : 0,
    float: direction,
  };

  return (
    <Button
      {...props}
      disabled={loading}
      $css={{ ...$css, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Loading $css={styles} size={size} /> {props.children}
    </Button>
  );
};
