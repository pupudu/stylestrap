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

  create(component: any = 'div'): React.FC<T> {
    const {
      name,
      transformedProps,
      defaultProps,
      initialStyles,
      initialClassNames,
      raw,
    } = this.state;

    const styleMapper = props => ({
      ...callOrReturn(initialStyles, props, props.theme),
      ...callOrReturn(props.css, props, props.theme),
    });

    const getRawStyles = props => callOrReturn(raw, props, props.theme);

    // @ts-ignore
    const StyledComponent = (styled[component] || styled(component))`
      &&& {
        ${propsWithTheme => getStyleString(propsWithTheme, styleMapper, name)};
        ${propsWithTheme => getRawStyles(propsWithTheme)}
      }
    `;

    const Wrapped: React.FC = originalProps => {
      const mergedProps = {
        ...defaultProps,
        ...originalProps,
        ...callOrReturn(transformedProps, originalProps),
      };

      const className = classnames(
        callOrReturn(initialClassNames, mergedProps),
        mergedProps.className
      );

      return <StyledComponent {...mergedProps} className={className} />;
    };
    Wrapped.displayName = name;

    return Wrapped;
  }
}

type StyledProps = {
  css: any;
};

export const makeComponent = function<T = any>(name) {
  return new Builder<T | React.HTMLAttributes<HTMLDivElement> | StyledProps>(name);
};
