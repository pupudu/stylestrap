import React, { useContext } from 'react';
import { callOrReturn } from './utils';
import classnames from 'classnames';
import styled, { ThemeContext } from 'styled-components';
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
    return originalProps => {
      const theme = useContext(ThemeContext);
      const {
        name,
        initialProps,
        initialStyles,
        initialClassNames
      } = this.state;
      const { css, ...filteredProps } = originalProps;

      const mergedProps = {
        ...filteredProps,
        ...callOrReturn(initialProps, originalProps)
      };

      const className = classnames(
        callOrReturn(initialClassNames, mergedProps),
        mergedProps.className
      );

      const styleMapper = propsWithTheme => ({
        ...callOrReturn(initialStyles, propsWithTheme, propsWithTheme.theme),
        ...callOrReturn(css, propsWithTheme, propsWithTheme.theme)
      });

      const StyledComponent = (styled[component] || styled(component))`
        &&& {
          ${propsWithTheme =>
            getStyleString(propsWithTheme, styleMapper, name)};
        }
      `;

      return <StyledComponent {...mergedProps} className={className} />;
    };
  }
}

export const makeComponent = name => new Builder(name);
