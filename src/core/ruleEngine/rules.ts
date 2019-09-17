export const getRuleMap = theme => {
  return {
    padding: {
      __label__: 'padding',
      top: 'padding-top',
      bottom: 'padding-bottom',
      left: 'padding-left',
      right: 'padding-right',
    },
    margin: {
      __label__: 'margin',
      top: 'margin-top',
      bottom: 'margin-bottom',
      left: 'margin-left',
      right: 'margin-right',
    },
    border: {
      __label__: 'border',
      top: 'border-top',
      bottom: 'border-bottom',
      left: 'border-left',
      right: 'border-right',
    },
    color: {
      __label__: 'color',
      enums: theme.colors,
    },
    background: {
      __label__: 'background',
      enums: theme.colors,
    },
    borderColor: {
      __label__: 'border-color',
      enums: theme.colors,
    },
  };
};
