import React from 'react';
import styled from 'styled-components';
import { getStyleString } from './engine';

export const withStyles = (args, getStyleProps = () => ({})) => (
  Component = styled.div``,
  suffix
) => {
  if (!Array.isArray(args)) {
    args = [args];
  }
  const [displayName, className] = args;

  const getStylePropsWithCss = props => {
    return {
      ...getStyleProps(props, props.theme), // TODO merge with default theme as required
      ...props.css // Enable passing a function as css
    };
  };
  const StyledComponent = styled(Component)`
    ${props => getStyleString(props, getStylePropsWithCss)};
  `;

  const Wrapped = props => {
    return (
      <React.Fragment>
        <StyledComponent {...props} className={className} />
        {suffix}
      </React.Fragment>
    );
  };
  Wrapped.displayName = displayName;

  return Wrapped;
};
