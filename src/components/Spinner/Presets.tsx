import React, { useState } from 'react';
import { LoadingButton as Button } from '../Button';

export const LoadingButton = props => {
  const [state, setState] = useState(false);

  return (
    <Button
      {...props}
      onClick={() => {
        setState(true);
        setTimeout(() => setState(false), 3000);
      }}
      loading={state}
    >
      Loading
    </Button>
  );
};

export const Presets = {} as any;
Presets.LoadingButton = LoadingButton;
