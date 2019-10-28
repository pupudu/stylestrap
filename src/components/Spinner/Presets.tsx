import React, { useState } from 'react';
import { Button } from '../Button';
import { Loading } from './Loading';

const LoadingButton = () => {
  const [state, setState] = useState(0);
  return (
    <Button
      onClick={() => {
        setState(1);
        setTimeout(() => {
          setState(0);
        }, 5000);
      }}
      size="sm"
    >
      <Loading size={state !== 2 ? '1.25rem' : 0} css={{ marginRight: state === 1 && '0.5rem' }} />
      Button
    </Button>
  );
};

export const Presets = {} as any;
Presets.LoadingButton = LoadingButton;
