import React from 'react';
import styled from 'styled-components';
import { getStyleString, filterProps } from './engine';

export const withStyles = (defaults, displayName) => expects => Component => {
  const StyledComponent = styled(Component)`
    ${props => getStyleString({ ...props, ...defaults }, expects)};
  `;
  const Wrapped = props => {
    return <StyledComponent {...filterProps(props)} />;
  };
  Wrapped.displayName = displayName;

  return Wrapped;
};
