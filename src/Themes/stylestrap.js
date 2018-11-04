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
    hover: color => shade(0.2, color),
    active: color => shade(0.3, color)
  },
  helpers: {
    colorByLuminance: color =>
      getLuminance(theme.colors[color]) < 0.7 ? '#FFF' : '#666',
    borderColorByLuminance: color =>
      getLuminance(theme.colors[color]) < 0.7 ? '#AAA' : '#FFF'
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
  }
};

export default theme;
