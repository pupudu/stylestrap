import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './index';
import '../Stylestrap/index';

const defaultCssUrl = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';

const cacheState: {
  setState?: Function;
  state?: any;
  setBaseCssUrl?: Function;
  baseCssUrl?: any;
} = {};

export const getState = () => cacheState.state;
export const getBaseCssUrl = () => cacheState.baseCssUrl;

export function setState(theme) {
  if (cacheState.setState) {
    return cacheState.setState(theme);
  }
  throw new Error('Attempted to set cache state. But the state has not been initialized yet.');
}

export function setBaseCssUrl(theme = defaultCssUrl) {
  if (cacheState.setBaseCssUrl) {
    return cacheState.setBaseCssUrl(theme);
  }
  throw new Error('Attempted to set cache state. But the state has not been initialized yet.');
}

export default function DoczRoot(props) {
  const [state, setState] = useState(cacheState.state || defaultTheme);
  const [baseCssUrl, setBaseCssUrl] = useState(cacheState.baseCssUrl || defaultCssUrl);

  useEffect(() => {
    cacheState.state = state;
    cacheState.setState = setState;
    cacheState.baseCssUrl = baseCssUrl;
    cacheState.setBaseCssUrl = setBaseCssUrl;
  }, [baseCssUrl, state]);

  return (
    <div style={{ fontSize: '1rem' }}>
      <link
        href="https://fonts.googleapis.com/css?family=Barriecito&display=swap"
        rel="stylesheet"
      />
      <link href={baseCssUrl} rel="stylesheet" />
      <ThemeProvider theme={state} {...props} />
    </div>
  );
}
