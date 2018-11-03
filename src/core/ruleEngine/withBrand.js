import { withStyles } from './withStyles';

// TODO - extract ghost and accent helpers as HoCs to decorate plain colors, rather than making this a big HoC

function getGhostColors(theme, brand, effects) {
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

function getAccentColors(theme, brand, effects) {
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

function getPlainColors(theme, brand, effects) {
  return {
    color: theme.helpers.colorByLuminance(brand),
    background: {
      base: brand,
      hover: effects && '_auto',
      active: effects && '_auto'
    }
  };
}

export const withBrand = (
  displayName,
  effects = true,
  ...rest
) => Component => {
  return withStyles(
    displayName,
    props => {
      const shade = props.shade;
      const theme = props.theme;
      if (props.type === 'ghost') {
        return getGhostColors(theme, shade, effects);
      }
      if (props.type == 'accent') {
        return getAccentColors(theme, shade, effects);
      }
      return getPlainColors(theme, shade, effects);
    },
    ...rest
  )(Component);
};
