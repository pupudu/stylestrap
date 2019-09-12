import React from 'react';
import styled from 'styled-components';
import { getStyleString } from './engine';
import classnames from 'classnames';
import { callOrReturn } from './utils';

export const withStyles = (
  args,
  getStyleProps = () => ({}),
  transformProps = () => ({})
) => (Component = 'div') => {
  if (!Array.isArray(args)) {
    args = [args];
  }

  const [displayName, baseClassNames = ''] = args;

  const getStylePropsWithCss = props => {
    return {
      // Here props.theme comes from `getStyleString`.
      // Thus any modifications done there will be reflected here as well.
      ...callOrReturn(getStyleProps, props, props.theme),
      ...props.css // Enable passing a function as css
    };
  };

  // Note: Three ampersands are here to make generated styles more specific than base classes
  // See: https://www.styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity
  // TODO merge with default theme as required
  const StyledComponent = (styled[Component] || styled(Component))`
    &&& {
      ${props =>
        getStyleString(props, props.theme, getStylePropsWithCss, displayName)};
    }
  `;

  const Wrapped = originalProps => {
    const props = {
      ...originalProps,
      ...callOrReturn(transformProps, originalProps)
    };

    const className = classnames(
      callOrReturn(baseClassNames, props),
      props.className
    );

    return <StyledComponent {...props} className={className} />;
  };
  Wrapped.displayName = displayName;

  return Wrapped;
};

export const transform = (transform, nestedValue) => {
  const finalReturn = {};

  if (typeof nestedValue !== 'object' || Array.isArray(nestedValue)) {
    return transform(nestedValue);
  }

  Object.keys(nestedValue).forEach(mediaKey => {
    const value = nestedValue[mediaKey];
    const transformed = transform(value);
    if (typeof transformed === 'object') {
      return Object.keys(transformed).forEach(propKey => {
        finalReturn[propKey] = {
          ...finalReturn[propKey],
          [mediaKey]: transformed[propKey]
        };
      });
    }
    finalReturn[mediaKey] = transformed;
  });
  return finalReturn;
};
