import themeBase from './base';

const theme = {
  ...themeBase,
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    warning: '#ffc107',
    info: '#17a2b8',
    danger: '#dc3545',
    blend: '#f8f9fa',
    flip: '#343a40',
  },
  breakpoints: {
    xs: 0,
    sm: 30,
    md: 48,
    lg: 64,
  },
  sizes: {
    xxxs: '0.125rem',
    xxs: '0.25rem',
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
  },
  headingSizes: {
    h1: '2.5rem',
    h2: '2rem',
    h3: '1.75rem',
    h4: '1.5rem',
    h5: '1.25rem',
    h6: '1rem',
  },
  defaultStyles: {
    Col: {
      padding: {
        left: 'xl',
      },
    },
    Container: {
      maxWidths: {
        xs: '100%',
        sm: '26.25rem',
        md: '45rem',
        lg: '60rem',
      },
    },
  },
};

export default theme;
