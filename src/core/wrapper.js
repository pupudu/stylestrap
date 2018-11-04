import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from '../Themes/stylestrap';
import '../Stylestrap';

const state = {
  setState: null,
  state
};

export function setState(theme) {
  state.setState(theme);
}

export function getState() {
  return state.state;
}

class Wrapper extends React.Component {
  state = theme;

  componentDidMount() {
    state.setState = this.setState.bind(this);
    state.state = this.state;
  }

  render() {
    console.log(this.state);
    return (
      <ThemeProvider theme={this.state}>{this.props.children}</ThemeProvider>
    );
  }
}

Wrapper.propTypes = {
  children: PropTypes.any
};

export default Wrapper;
