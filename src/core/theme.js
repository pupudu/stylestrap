import { lighten, shade as tint } from 'polished';

export default {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    warning: '#ffc107',
    info: '#17a2b8',
    danger: '#dc3545',
    hover: color => tint(0.9, color),
    active: color => tint(0.8, color)
  }
};
