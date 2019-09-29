import React from 'react';
import { callOrReturn } from './utils';
import classnames from 'classnames';
import styled from 'styled-components';
import { getStyleString } from './ruleEngine';

class Builder<T> {
  state = {
    name: '',
    initialClassNames: '',
    initialStyles: undefined,
    transformedProps: {},
    defaultProps: {},
    raw: '',
  };

  constructor(name) {
    this.state.name = name;
  }

  raw(raw) {
    this.state.raw = raw;
    return this;
  }

  classNames(classNames) {
    this.state.initialClassNames = classNames;
    return this;
  }

  styles(styles) {
    this.state.initialStyles = styles;
    return this;
  }

  props(props) {
    this.state.transformedProps = props;
    return this;
  }

  defaultProps(props) {
    this.state.defaultProps = props;
    return this;
  }

  /**
   * Create the Styled Component to apply stylestrap styles
   * @private
   */
  __getStyledComponent__(Component) {
    const { name, initialStyles, raw } = this.state;

    const styleMapper = props => ({
      ...callOrReturn(initialStyles, props, props.theme),
      ...callOrReturn(props.css, props, props.theme),
    });

    const getRawStyles = props => callOrReturn(raw, props, props.theme);

    return (styled[Component] || styled(Component))`
      &&& {
        ${propsWithTheme => getStyleString(propsWithTheme, styleMapper, name)};
        ${propsWithTheme => getRawStyles(propsWithTheme)}
      }
    `;
  }

  create(Component: any = 'div'): React.FC<T> {
    const { name, transformedProps, defaultProps, initialClassNames } = this.state;

    const StyledComponent = this.__getStyledComponent__(Component);

    const Wrapped: React.FC = (originalProps: any) => {
      /**
       * as prop should be passed to `transformedProps` and `initialClassNames` calls.
       * So we create a props object with the as prop,
       * either from the original as prop, or the renamed __as__ prop.
       */
      const propsWithAs = {
        ...originalProps,
        as: originalProps.as || originalProps.__as__,
      };

      /**
       * Merge default props, original props(with as) and transformed props
       */
      const mergedProps = {
        ...defaultProps,
        ...propsWithAs,
        ...callOrReturn(transformedProps, propsWithAs),
      };

      /**
       * Generate classnames based on merged props
       */
      const className = classnames(
        callOrReturn(initialClassNames, mergedProps),
        mergedProps.className
      );

      /**
       * If the component is not a string, we delete the as prop
       * Otherwise, the HoC component will be replaced.
       * By renaming it to __as__, we can instead pass the as prop down,
       * to be consumed by the last non HoC component
       */
      if (typeof Component !== 'string') {
        mergedProps.__as__ = mergedProps.as;
        delete mergedProps.as;
      }

      return <StyledComponent {...mergedProps} className={className} />;
    };
    Wrapped.displayName = name;

    return Wrapped;
  }
}

export const makeComponent = function<T = any>(name) {
  return new Builder<T>(name);
};
