import React from 'react';
import { makeComponent } from '../../core';

export function getStylesByFlavor(props, theme) {
  const { flavor = 'plain', color } = props;

  if (!color || !theme.colors[color]) return;

  const styleMap = {
    outline: {
      color: color,
      background: 'rgba(0,0,0,0)',
      borderColor: color,
    },
    accent: {
      border: {
        top: `1px solid #AAA`,
        right: `1px solid #AAA`,
        bottom: `1px solid #AAA`,
        left: `4px solid ${theme.colors[color]}`,
      },
      color: color,
      background: 'rgba(0,0,0,0)',
    },
    ghost: {
      color: color,
      background: 'rgba(0,0,0,0)',
    },
    plain: {
      color: theme.colorByLuminance(color),
      background: color,
    },
  };

  return styleMap[flavor];
}

const CardBody = makeComponent('CardBody')
  .classNames('card-body')
  .styles(props => ({
    padding: props.padding,
  }))
  .create();

const CardHeader = makeComponent('CardHeader')
  .classNames('card-header')
  .create();
const CardFooter = makeComponent('CardFooter')
  .classNames('card-footer')
  .create();

const CardContainer = makeComponent('Card')
  .classNames('card')
  .styles(getStylesByFlavor)
  .create();

const Card = ({ children, ...rest }) => {
  return (
    <CardContainer {...rest}>
      {React.Children.map(children, child => {
        if (child.type === undefined) {
          return <CardBody>{child}</CardBody>;
        }
        return child;
      })}
    </CardContainer>
  );
};

export { Card, CardHeader, CardBody, CardFooter };
