import { makeComponent, SS } from '../../core';

const iconMap = {
  arrow: '↻',
  star: '★',
  yinyang: '☯',
  flower: '✾',
  flake: '❄',
  svastik: '࿗',
  ball: '⚽',
};

interface SpinnerProps extends SS.Span {
  speed?: number;
  icon?: keyof typeof iconMap;
  size?: string | number;
}

export const Spinner = makeComponent<SpinnerProps>('Spinner')
  .raw(
    `
    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }`
  )
  .defaultProps({
    icon: 'arrow',
    speed: 2,
    size: '2rem',
  })
  .props(props => ({
    role: 'img',
    'aria-label': 'spinner',
    children: iconMap[props.icon],
  }))
  .classNames('spinner')
  .styles(props => ({
    animation: `spin ${props.speed || 0.8}s linear infinite`,
    display: 'inline-block',
    fontSize: props.size || '1.5rem',
  }))
  .create('span');
