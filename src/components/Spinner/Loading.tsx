import React, { useContext, useEffect, useState } from 'react';
import { Ripple, Ellipsis, Ring } from 'react-css-spinners';
import { makeComponent } from '../../core';
import { ThemeContext } from 'styled-components';

const ComponentMap = {
  ring: Ring,
  ripple: Ripple,
  dots: Ellipsis,
};

const LoadingBase = props => {
  const [state, setState] = useState(false);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    setTimeout(() => setState(true), props.wait);
  }, [props.wait, state]);

  const color = theme.colors[props.color] || props.color;

  const SpinnerComponent = ComponentMap[props.type];
  return (
    <SpinnerComponent {...props} style={{ display: state ? 'initial' : 'none' }} color={color} />
  );
};

export const Loading = makeComponent('Loading')
  .defaultProps({
    type: 'ripple',
    color: 'black',
    wait: 500,
  })
  .raw(
    `
    @keyframes fadein {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    animation: fadein 3s;`
  )
  .create(LoadingBase);
