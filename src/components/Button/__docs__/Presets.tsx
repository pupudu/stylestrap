import React, { useState } from 'react';
import { LoadingButton } from '../LoadingButton';

const LoadingButtonBase = props => {
  const [loading, setLoading] = useState(false);
  return (
    <LoadingButton
      {...props}
      loading={loading}
      onClick={() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
      }}
    />
  );
};

export const Presets = {} as any;
Presets.LoadingButton = LoadingButtonBase;
