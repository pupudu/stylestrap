import { makeComponent } from '../../core';
import { Div } from '../../core/SS';
import { Text } from './Text';

interface HeadingProps extends Div {
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  muted?: boolean;
  color?: string;
}

const Heading = makeComponent<HeadingProps>('Heading')
  .classNames(props => ({
    heading: true,
    'text-muted': props.muted,
  }))
  .defaultProps({
    size: 'h1',
  })
  .styles((props, theme) => ({
    fontSize: theme.headingSizes[props.size],
    color: props.color,
  }))
  .props(({ size, as }) => ({
    as: as || size,
  }))
  .create(Text);

export { Heading };
