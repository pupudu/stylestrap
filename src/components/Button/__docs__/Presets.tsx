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

export const FigmaEmbed = () => {
  return (
    <div>
      <iframe
        title="blah"
        height="450"
        width="800"
        src="https://www.figma.com/embed?embed_host=astra&url=https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File"
        allowfullscreen
      />
    </div>
  );
};

export const Presets = {} as any;
Presets.LoadingButton = LoadingButtonBase;
