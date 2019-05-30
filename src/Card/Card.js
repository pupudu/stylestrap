import React from 'react';
import { withStyles, getStylesByFlavor } from '../core/ruleEngine';

const CardBody = withStyles(['CardBody', 'card-body'], props => {
  return {
    padding: props.padding
  };
})();

const CardHeader = withStyles(['CardHeader', 'card-header'])();
const CardFooter = withStyles(['CardFooter', 'card-footer'])();

const CardContainer = withStyles(['Card', 'card'], (props, theme) => {
  return getStylesByFlavor(props, theme, false);
})();

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
