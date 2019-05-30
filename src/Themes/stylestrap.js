import { shade, getLuminance } from 'polished';

const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    warning: '#ffc107',
    info: '#17a2b8',
    danger: '#dc3545',
    blend: '#f8f9fa',
    flip: '#343a40',
    getShade: getColorShade
  },
  helpers: {
    // TODO need a better approach for this
    colorByLuminance: (color, extendedTheme = theme) => {
      return getLuminance(extendedTheme.colors[color] || color) < 0.7
        ? '#FFF'
        : '#666';
    },
    borderColorByLuminance: (color, extendedTheme = theme) =>
      getLuminance(extendedTheme.colors[color] || color) < 0.7 ? '#AAA' : '#FFF'
  },
  breakpoints: {
    xs: 0,
    sm: 30,
    md: 48,
    lg: 64
  },
  sizes: {
    xxxs: '0.125rem',
    xxs: '0.25rem',
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem'
  },
  headingSizes: {
    h1: '2.5rem',
    h2: '2rem',
    h3: '1.75rem',
    h4: '1.5rem',
    h5: '1.25rem',
    h6: '1rem'
  },
  defaultStyles: {
    Col: {
      padding: {
        left: 'xl'
      }
    },
    Container: {
      maxWidths: {
        xs: '100%',
        sm: '26.25rem',
        md: '45rem',
        lg: '60rem'
      }
    }
  }
};

function getColorShade(colorEnum, type) {
  const color = theme.colors[colorEnum];
  const colorMap = {
    '-2': shade(0.3, color), // TODO replace shade with some other helper to make them brighter
    '-1': shade(0.2, color), // TODO replace shade with some other helper to make them brighter
    0: color,
    1: shade(0.2, color),
    2: shade(0.3, color)
  };

  return colorMap[type];
}

export default theme;
