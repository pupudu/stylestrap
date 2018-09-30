import React from 'react';
import styled from 'styled-components';
import { withBrand } from '../core/ruleEngine';

const CardBody = styled.div`
  background: transparent;
  border-radius: 0.25rem;
  outline: 0;
  border: 0.0625rem solid transparent;
  padding: 1rem;
`;

export const CardHeading = styled.div`
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
`;

const CardContainer = withBrand('Card', false)(styled.div`
  background: #fff;
  width: 25%;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  border-radius: 0.25rem;
  outline: 0;
  border: 0.0625rem solid transparent;
`);

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

export default Card;
