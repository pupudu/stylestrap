import React, { useState } from 'react';
import { makeComponent } from '../../core';
import './rangeSlider.css';

const Container = makeComponent('RangeContainer')
  .classNames('range-slider')
  .styles(props => ({
    position: 'relative',
    width: props.width || '100%',
    height: '35px',
    textAlign: 'center',
  }))
  .create('section');

const RangeInput = makeComponent('RangeInput')
  .classNames('custom-range')
  .styles({
    position: 'absolute',
    left: 0,
    top: '15px',
    width: '100%',
    height: '18px',
  })
  .create('input');

const BaseRangeSlider = props => {
  const { width, className, overlap, min = 0, max = 10, step = 1, onChange = () => {} } = props;

  const u = props.value[0] || min;
  const v = props.value[1] || max;

  const [low, setLow] = useState(Math.min(u, v));
  const [high, setHigh] = useState(Math.max(u, v));

  const baseProps = {
    min,
    max,
    step: step,
    type: 'range',
    onMouseUp: () => {
      onChange([low, high]);
    },
  };

  return (
    <Container width={width} className={className}>
      <RangeInput
        {...baseProps}
        value={low}
        onChange={e => {
          setLow(Math.min(Number(e.target.value), overlap ? high : high - 1));
        }}
      />
      <RangeInput
        {...baseProps}
        value={high}
        onChange={e => {
          setHigh(Math.max(Number(e.target.value), overlap ? low : low + 1));
        }}
      />
    </Container>
  );
};

const RangeSlider = makeComponent('RangeSlider')
  .classNames('range-slider')
  .create(BaseRangeSlider);

export { RangeSlider };
