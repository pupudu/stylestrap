import React from 'react';
import styled from 'styled-components';
import { getStyleString } from './engine';

export const withStyles = (
  args,
  getStyleProps = () => ({}),
  transformProps = () => ({})
) => (Component = styled.div``) => {
  if (!Array.isArray(args)) {
    args = [args];
  }

  if (typeof Component === 'string') {
    Component = styled[Component]``;
  }
  const [displayName, baseClassNameConst = ''] = args;
  let baseClassName = baseClassNameConst;

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
    if (typeof baseClassName === 'function') {
      baseClassName = baseClassName(props);
    }
    const transformedProps = transformProps(props);
    const className = `${baseClassName} ${transformedProps.className ||
      props.className ||
      ''}`.trim();

    return (
      <StyledComponent
        {...{ ...props, ...transformedProps }}
        className={className}
      />
    );
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
