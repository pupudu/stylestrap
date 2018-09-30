import React from 'react';
import styled from 'styled-components';
import { getStyleString } from './engine';

export const withStyles = (
  displayName,
  getDefaultProps = () => ({}),
  options = {}
) => (Component = styled.div``) => {
  const StyledComponent = styled(Component)`
    ${props => getStyleString(props, getDefaultProps)};
  `;

  const Wrapped = props => {
    return (
      <React.Fragment>
        {options.prefix}
        <StyledComponent {...props} />
        {options.suffix}
      </React.Fragment>
    );
  };
  Wrapped.displayName = displayName;

  return Wrapped;
};

export const withBrand = (
  displayName,
  effects = true,
  ...rest
) => Component => {
  return withStyles(
    displayName,
    props => {
      const brand = props.shade;
      if (props.type === 'ghost') {
        return {
          color: {
            base: brand,
            hover: effects && 'white',
            active: effects && 'white'
          },
          background: {
            base: 'rgba(0,0,0,0)',
            hover: effects && brand,
            active:
              effects && props.theme.colors.active(props.theme.colors[brand])
          },
          borderColor: brand
        };
      }
      if (props.type == 'accent') {
        return {
          border: {
            top: '1px solid #AAA',
            right: '1px solid #AAA',
            bottom: '1px solid #AAA',
            left: `3px solid ${props.theme.colors[brand]}`
          },
          color: {
            base: brand,
            hover: effects && 'white',
            active: effects && 'white'
          },
          background: {
            base: 'rgba(0,0,0,0)',
            hover: effects && brand,
            active:
              effects && props.theme.colors.active(props.theme.colors[brand])
          }
        };
      }
      return {
        color: 'white',
        background: {
          base: brand,
          hover: effects && 'auto',
          active: effects && 'auto'
        }
      };
    },
    ...rest
  )(Component);
};
