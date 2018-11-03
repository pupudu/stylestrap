import baseTheme from '../../Themes/stylestrap';

export const getRuleMap = ({ theme, ...props }) => {
  // TODO get rid of this check here. Theme should be merged with baseTheme at a higher level. Probably when calling setTheme()
  if (!theme || !Object.keys(theme).length) theme = {} || baseTheme;

  return {
    lineHeight: {
      __label__: 'line-height',
      derive: () => theme.lineHeight(props.fontSize)
    },
    padding: {
      __label__: 'padding',
      top: 'padding-top',
      bottom: 'padding-bottom',
      left: 'padding-left',
      right: 'padding-right'
    },
    margin: {
      __label__: 'margin',
      top: 'margin-top',
      bottom: 'margin-bottom',
      left: 'margin-left',
      right: 'margin-right'
    },
    border: {
      __label__: 'border',
      top: 'border-top',
      bottom: 'border-bottom',
      left: 'border-left',
      right: 'border-right'
    },
    color: {
      __label__: 'color',
      enums: theme.colors,
      derive: (selector, base) =>
        theme.colors[`${selector}`](theme.colors[base])
    },
    background: {
      __label__: 'background',
      enums: theme.colors,
      derive: (selector, base) =>
        theme.colors[`${selector}`](theme.colors[base])
    },
    borderColor: {
      __label__: 'border-color',
      enums: theme.colors,
      derive: (selector, base) =>
        theme.colors[`${selector}`](theme.colors[base])
    }
  };
};
