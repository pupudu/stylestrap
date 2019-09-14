import React from 'react';
import { makeComponent, getStylesByFlavor } from '../../core/ruleEngine';

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
  .styles((props, theme) => {
    return getStylesByFlavor(props, theme, false);
  })
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
