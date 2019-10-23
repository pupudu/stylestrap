import { makeComponent } from '../../core';
import { Span } from '../../core/SS';

interface SpinnerProps extends Span {
  duration?: number;
  size?: string;
}

export const Spinner = makeComponent<SpinnerProps>('Spinner')
  .defaultProps({
    type: 'border',
    duration: 0.75,
  })
  .props({
    role: 'img',
    'aria-label': 'spinner',
  })
  .classNames(props => ({
    spinner: true,
    'spinner-border': props.type === 'border',
    'spinner-grow': props.type === 'grow',
  }))
  .styles(props => ({
    animation: `spinner-${props.type} ${props.duration}s linear infinite`,
    height: props.size,
    width: props.size,
  }))
  .create('span');
