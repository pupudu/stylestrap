import React, { useContext, useEffect, useState } from 'react';
import { Ripple, Ellipsis, Ring } from 'react-css-spinners';
import { makeComponent } from '../../core';
import { ThemeContext } from 'styled-components';

const ComponentMap = {
  ring: makeComponent('LoadingBaseComponent').create(Ring),
  ripple: makeComponent('LoadingBaseComponent').create(Ripple),
  dots: makeComponent('LoadingBaseComponent').create(Ellipsis),
};

const LoadingBase = props => {
  const [state, setState] = useState(false);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    setTimeout(() => setState(true), props.wait);
  }, [props.wait, state]);

  const color = theme.colors[props.color] || props.color;

  const Component = ComponentMap[props.type];
  return <Component {...props} $css={{ ...props.$css, display: !state && 'none' }} color={color} />;
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
