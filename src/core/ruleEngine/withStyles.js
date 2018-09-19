import React from 'react';
import styled from 'styled-components';
import { getStyleString, filterProps } from './engine';
import theme from '../theme';

export const withStyles = (
  displayName,
  getDefaultProps = () => ({}),
  accepts
) => Component => {
  const StyledComponent = styled(Component)`
    ${props => getStyleString({ ...props, ...getDefaultProps(props) })};
    ${props => getStyleString(props, accepts)};
  `;
  const Wrapped = props => {
    return <StyledComponent {...filterProps(theme, props)} />;
  };
  Wrapped.displayName = displayName;

  return Wrapped;
};
