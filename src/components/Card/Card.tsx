import { makeComponent } from '../../core';
import { Heading, Text } from '../Typography';
import { Anchor } from '../Link';

export function getStylesByFlavor(props, theme) {
  const { flavor = 'plain', color } = props;

  const baseCss = {
    overflow: props.overflow || 'hidden',
    width: props.width,
    textAlign: props.textAlign,
  };

  if (!color || !theme.colors[color]) return baseCss;

  const styleMap = {
    outline: {
      ...baseCss,
      color: color,
      background: 'rgba(0,0,0,0)',
      borderColor: color,
    },
    accent: {
      ...baseCss,
      border: {
        top: `1px solid #eee`,
        right: `1px solid #eee`,
        bottom: `1px solid #eee`,
        left: `4px solid ${theme.colors[color]}`,
      },
      background: 'rgba(0,0,0,0)',
    },
    ghost: {
      ...baseCss,
      color: color,
      background: 'rgba(0,0,0,0)',
    },
    plain: {
      ...baseCss,
      color: theme.colorByLuminance(color),
      background: color,
    },
  };

  return styleMap[flavor];
}

export const CardBody = makeComponent('CardBody')
  .classNames('card-body')
  .styles(props => ({
    padding: props.padding,
  }))
  .create();

export const CardHeader = makeComponent('CardHeader')
  .classNames('card-header')
  .create();

export const CardFooter = makeComponent('CardFooter')
  .classNames('card-footer')
  .create();

export const Card = makeComponent('Card')
  .classNames('card')
  .styles(getStylesByFlavor)
  .create();

export const CardTitle = makeComponent('CardTitle')
  .classNames('card-title')
  .defaultProps({
    size: 'h5',
  })
  .create(Heading);

export const CardSubTitle = makeComponent('CardTitle')
  .classNames('card-sub-title')
  .defaultProps({
    size: 'h6',
  })
  .create(Heading);

export const CardText = makeComponent('Text')
  .classNames('card-text')
  .create(Text);

export const CardLink = makeComponent('CardLink')
  .classNames('card-link')
  .create(Anchor);
