import React from 'react';
import { callOrReturn } from './utils';
import classnames from 'classnames';
import styled from 'styled-components';
import { getStyleString } from './engine';

class Builder {
  state = {
    name: '',
    initialClassNames: '',
    initialStyles: undefined,
    initialProps: {}
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
    this.state.initialProps = props;
    return this;
  }

  create(component = 'div') {
    const { name, initialProps, initialStyles, initialClassNames } = this.state;

    const styleMapper = props => ({
      ...callOrReturn(initialStyles, props, props.theme),
      ...callOrReturn(props.css, props, props.theme)
    });

    const StyledComponent = (styled[component] || styled(component))`
      &&& {
        ${propsWithTheme => getStyleString(propsWithTheme, styleMapper, name)};
      }
    `;

    return originalProps => {
      const mergedProps = {
        ...originalProps,
        ...callOrReturn(initialProps, originalProps)
      };

      const className = classnames(
        callOrReturn(initialClassNames, mergedProps),
        mergedProps.className
      );

      return <StyledComponent {...mergedProps} className={className} />;
    };
  }
}

export const makeComponent = name => new Builder(name);
