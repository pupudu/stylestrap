import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './';
import '../src/Stylestrap';

const cacheState: {
  setState?: Function;
  state?: any;
} = {};

export function setState(theme) {
  if (cacheState.setState) {
    cacheState.setState(theme);
  } else {
    throw new Error('Attempted to set cache state. But the state has not been initialized yet.');
  }
}

export function getState() {
  if (cacheState.state) {
    return cacheState.state;
  }
  throw new Error('Attempted to getState. But state is empty. Have you set the Theme Provider?');
}

export default function DoczRoot(props) {
  const [state, setState] = useState(defaultTheme);
  useEffect(() => {
    cacheState.state = state;
    cacheState.setState = setState;
  }, [state]);
  return <ThemeProvider theme={state} {...props} />;
}
