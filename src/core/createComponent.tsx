import React from 'react';
import { callOrReturn } from './utils';
import classnames from 'classnames';
import styled from 'styled-components';
import { getStyleString } from './ruleEngine';

class Builder {
  state = {
    name: '',
    initialClassNames: '',
    initialStyles: undefined,
    transformedProps: {},
    defaultProps: {},
  };

  constructor(name) {
    this.state.name = name;
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

  create(component: any = 'div') {
    const { name, transformedProps, defaultProps, initialStyles, initialClassNames } = this.state;

    const styleMapper = props => ({
      ...callOrReturn(initialStyles, props, props.theme),
      ...callOrReturn(props.css, props, props.theme),
    });

    // @ts-ignore
    const StyledComponent = (styled[component] || styled(component))`
      &&& {
        ${propsWithTheme => getStyleString(propsWithTheme, styleMapper, name)};
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

export const makeComponent = name => new Builder(name);
