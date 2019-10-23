import { makeComponent, filterEmptyKeys, callOrReturn } from '../../core';
import { Heading, Text } from '../Typography';
import { Anchor } from '../Link';

const getCardPreset = (props, theme) => {
  const { color, flavor = 'plain' } = props;
  if (!color) return;
  if (theme.flavors.Card && theme.flavors.Card[flavor]) {
    return callOrReturn(theme.flavors.Card[flavor], props, theme);
  }

  const styleMap = {
    plain: {
      color: theme.colorByLuminance(color, '#FFF', '#000'),
      background: color,
    },
  };

  return styleMap[flavor];
};

export function getStylesByFlavor(props, theme) {
  const overrideCss = filterEmptyKeys({
    overflow: props.overflow,
    width: props.width,
    textAlign: props.textAlign,
    color: props.textColor,
  });

  return {
    overflow: 'hidden',
    ...getCardPreset(props, theme),
    ...overrideCss,
  };
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
