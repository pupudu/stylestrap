function getOutlineStyles(theme, color, effects) {
  return {
    color: {
      base: color,
      '&:hover': effects && theme.colorByLuminance(color),
      '&:active': effects && theme.colorByLuminance(color),
    },
    background: {
      base: 'rgba(0,0,0,0)',
      '&:hover': effects && color,
      '&:active': effects && theme.getColorShade(color, 2),
    },
    borderColor: color,
  };
}

function getAccentStyles(theme, color, effects) {
  return {
    border: {
      top: `1px solid ${theme.borderColorByLuminance(color)}`,
      right: `1px solid ${theme.borderColorByLuminance(color)}`,
      bottom: `1px solid ${theme.borderColorByLuminance(color)}`,
      left: `3px solid ${theme.colors[color]}`,
    },
    color: {
      base: color,
      '&:hover': effects && theme.colorByLuminance(color),
      '&:active': effects && theme.colorByLuminance(color),
    },
    background: {
      base: 'rgba(0,0,0,0)', // TODO
      '&:hover': effects && color,
      '&:active': effects && theme.getColorShade(color, 2),
    },
  };
}

function getPlainStyles(theme, color, effects) {
  return {
    color: color && theme.colorByLuminance(color),
    background: {
      base: color,
      '&:hover': effects && color && theme.getColorShade(color, 1),
      '&:active': effects && color && theme.getColorShade(color, 2),
    },
  };
}

export function getStylesByFlavor(props, theme, effects) {
  const { flavor, color, disabled } = props;

  effects = effects && !disabled;

  switch (flavor) {
    case 'outline':
      return getOutlineStyles(theme, color, effects);
    case 'accent':
      return getAccentStyles(theme, color, effects);
    default:
      return getPlainStyles(theme, color, effects);
  }
}
