import React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import { Button, Card } from './';
import { getState, setState } from './Provider';

const currentTheme = getState();
const { __filemeta, ...themeWithoutFileMeta } = currentTheme as any;
const defaultTheme = JSON.stringify(themeWithoutFileMeta, null, 2).replace(
  /\"([^(\")"]+)\":/g,
  '$1:'
);

let text = defaultTheme;

export function Editor() {
  return (
    <Card css={{ padding: 'sm' }}>
      <CodeMirror
        value={defaultTheme}
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true,
        }}
        onChange={(_editor, _data, value) => (text = value)}
      />
      <br />
      <div>
        <Button
          onClick={() => {
            const newTheme = Function(`return ${text}`)();
            setState({ ...currentTheme, ...newTheme });
          }}
        >
          Apply Theme
        </Button>
      </div>
    </Card>
  );
}
