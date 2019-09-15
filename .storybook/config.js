import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import {ThemeProvider} from 'styled-components';
import {defaultTheme} from '../src';
import '../src/Stylestrap';

// automatically import all files ending in *.stories.js
configure(require.context('../docs', true, /\.stories\.(js|mdx)$/), module);

function Root(storyFn) {
  return <ThemeProvider theme={defaultTheme}>{storyFn()}</ThemeProvider>
}

addDecorator(Root);
