import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import { defaultTheme, Button, FormInput } from '../.';
import { ThemeProvider } from 'styled-components';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <Button>Primary</Button>
        <FormInput />
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
