import React from 'react';
import { Button, Card, FormInput as Input, Styled } from './index';
import { getState, setBaseCssUrl, getBaseCssUrl } from './Provider';

export function Editor() {
  const currentTheme = getState();
  if (!currentTheme) return;
  const { __filemeta, ...themeWithoutFileMeta } = currentTheme as any;
  const defaultTheme = JSON.stringify(themeWithoutFileMeta, null, 2).replace(
    /\"([^(\")"]+)\":/g,
    '$1:'
  );

  // Not using state, as we don't want to re-render every time this changes
  let defaultThemeText = defaultTheme;
  let cssUrl = getBaseCssUrl();

  void (defaultThemeText = defaultThemeText); // TODO remove when prismjs is integrated

  return (
    <Card css={{ padding: 'sm' }}>
      {/*<CodeMirror*/}
      {/*  value={defaultTheme}*/}
      {/*  options={{*/}
      {/*    mode: 'javascript',*/}
      {/*    theme: 'material',*/}
      {/*    lineNumbers: true,*/}
      {/*  }}*/}
      {/*  onChange={(_editor, _data, value) => (defaultThemeText = value)}*/}
      {/*/>*/}
      <Styled marginTop="sm">
        <Input
          type="text"
          label="Base Bootstrap CSS Url"
          placeholder={cssUrl}
          onChange={(e: any) => {
            cssUrl = e.target.value;
          }}
        />
      </Styled>
      <br />
      <div>
        <Button
          onClick={() => {
            // const newTheme = Function(`return ${defaultThemeText}`)();
            // setState({ ...currentTheme, ...newTheme });
            setBaseCssUrl(cssUrl);
          }}
        >
          Apply Theme
        </Button>
      </div>
    </Card>
  );
}
