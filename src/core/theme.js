import { lighten } from 'polished';

export default {
  colors: {
    primary: 'blue',
    warning: 'orange',
    danger: 'red',
    success: 'green',
    muted: 'grey',
    hover: color => lighten(0.2, color)
  }
};
