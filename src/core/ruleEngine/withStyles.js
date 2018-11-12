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
  const [displayName, baseClassName = ''] = args;

  const getStylePropsWithCss = props => {
    return {
      // Here props.theme comes from `getStyleString`.
      // Thus any modifications done there will be reflected here as well.
      ...getStyleProps(props, props.theme),
      ...props.css // Enable passing a function as css
    };
  };

  // Note: Two ampersands are here to make generated styles more specific than base classes
  // See: https://www.styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity
  // TODO merge with default theme as required
  const StyledComponent = styled(Component)`
    && {
      ${props =>
        getStyleString(props, props.theme, getStylePropsWithCss, displayName)};
    }
  `;

  const Wrapped = props => {
    const className = `${baseClassName} ${props.className || ''}`.trim();
    // TODO get rid of Fragment if suffix seems redundant
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
