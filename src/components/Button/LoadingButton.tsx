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

const defaultProps = {
  delay: 200,
  duration: 300,
  disabled: false,
  disabledWhileLoading: true,
};

export const LoadingButton: React.FC<LoadingButtonProps> = allProps => {
  const { loading, direction, delay, $css, disabled, duration, disabledWhileLoading, ...props } = {
    ...defaultProps,
    ...allProps,
  };

  const marginDirection = direction === 'right' ? 'margin-left' : 'margin-right';
  const size = loading ? LoadingSizeMap[String(props.size)] : 0;

  const styles = {
    float: direction,
    transition: `all ${duration}ms`,
    [marginDirection]: loading ? `calc(${size} * 2 / 5)` : 0,
    opacity: loading ? 1 : 0,
    transitionDelay: loading ? `${delay}ms` : 0,
  };

  return (
    <Button
      {...props}
      disabled={disabled || (disabledWhileLoading && loading)}
      $css={{ ...$css, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Loading $css={styles} size={size} />
      {props.children}
    </Button>
  );
};
