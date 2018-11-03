function getOutlineStyles(theme, brand, effects) {
  return {
    color: {
      base: brand,
      hover: effects && theme.helpers.colorByLuminance(brand),
      active: effects && theme.helpers.colorByLuminance(brand)
    },
    background: {
      base: 'rgba(0,0,0,0)',
      hover: effects && brand,
      active: effects && theme.colors.active(theme.colors[brand])
    },
    borderColor: brand
  };
}

function getAccentStyles(theme, brand, effects) {
  return {
    border: {
      top: `1px solid ${theme.helpers.borderColorByLuminance(brand)}`,
      right: `1px solid ${theme.helpers.borderColorByLuminance(brand)}`,
      bottom: `1px solid ${theme.helpers.borderColorByLuminance(brand)}`,
      left: `3px solid ${theme.colors[brand]}`
    },
    color: {
      base: brand,
      hover: effects && theme.helpers.colorByLuminance(brand),
      active: effects && theme.helpers.colorByLuminance(brand)
    },
    background: {
      base: 'rgba(0,0,0,0)',
      hover: effects && brand,
      active: effects && theme.colors.active(theme.colors[brand])
    }
  };
}

function getPlainStyles(theme, brand, effects) {
  return {
    color: theme.helpers.colorByLuminance(brand),
    background: {
      base: brand,
      hover: effects && '_auto',
      active: effects && '_auto'
    }
  };
}

export function getStylesByFlavor(props, theme, effects) {
  const { flavor, color } = props;
  switch (flavor) {
    case 'outline':
      return getOutlineStyles(theme, color, effects);
    case 'accent':
      return getAccentStyles(theme, color, effects);
    default:
      return getPlainStyles(theme, color, effects);
  }
}
