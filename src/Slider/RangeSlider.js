import React, { useState } from 'react';
import { withStyles } from '../core/ruleEngine';
import './rangeSlider.css';

const Container = withStyles(['RangeContainer', 'range-slider'], props => {
  return {
    position: 'relative',
    width: props.width || '100%',
    height: '35px',
    textAlign: 'center'
  };
})('section');

const RangeInput = withStyles('RangeInput', () => {
  return {
    position: 'absolute',
    left: 0,
    top: '15px',
    width: '100%',
    height: '18px'
  };
})('input');

const BaseRangeSlider = props => {
  const {
    value = [],
    min = 0,
    max = 10,
    step = 1,
    width,
    onChange = () => undefined,
    className
  } = props;

  const [apparentMax, apparentMin] = [max + 1, min - 1];
  const [start, end] = value;

  const [low, setLow] = useState(start === null ? apparentMin : start);
  const [high, setHigh] = useState(end === null ? apparentMax : end);

  const apparentHigh = high >= apparentMax ? null : high;
  const apparentLow = low <= apparentMin ? null : low;

  const baseProps = {
    min: apparentMin,
    max: apparentMax,
    step: step,
    type: 'range',
    onMouseUp: () => {
      onChange([apparentLow, apparentHigh]);
    }
  };

  return (
    <Container width={width} className={className}>
      <span>
        {low <= apparentMin ? `<${min}` : low} →{' '}
        {high >= apparentMax ? `>${max}` : high}
      </span>
      <RangeInput
        {...baseProps}
        value={low}
        onChange={e => {
          const valueNext = Number(e.target.value);
          if (valueNext < high) {
            setLow(valueNext);
          }
        }}
      />
      <RangeInput
        {...baseProps}
        value={high}
        onChange={e => {
          const valueNext = Number(e.target.value);
          if (valueNext > low) {
            setHigh(valueNext);
          }
        }}
      />
    </Container>
  );
};

const RangeSlider = withStyles(['RangeSlider', 'range-slider'])(
  BaseRangeSlider
);

RangeSlider.propTypes = {};

export { RangeSlider };
