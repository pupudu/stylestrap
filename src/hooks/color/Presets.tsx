import React from 'react';
import { lighten } from 'polished';
import { Button, FlexBox, Grid } from '../../';
import { ColoredDiv } from '../../docs/Presets';
import { useColor } from './useColor';

export function ButtonColor() {
  const color = useColor('danger');
  const lightenedColor = lighten(0.3, color);

  return <Button color={lightenedColor}>Light Button</Button>;
}

const ColorBox = ({ children, ...props }) => (
  <Grid columns="1fr 7fr">
    <span>{children}</span>
    <ColoredDiv {...props} height="30px" />
  </Grid>
);

export function ButtonColorVariant(props) {
  const getColor = useColor;
  const colors = {};

  [7, 6, 5, 4, 3, 2, 1].forEach(num => {
    colors[`${-1 * num}`] = getColor(props.color, -1 * num);
  });
  [1, 2, 3, 4, 5, 6, 7].forEach(num => {
    colors[`${num}`] = getColor(props.color, num);
  });
  const defaultColor = useColor(props.color, 0);

  return (
    <div>
      <FlexBox justifyContent="center" as="strong">
        {props.color}
      </FlexBox>
      {[7, 6, 5, 4, 3, 2, 1].map(num => (
        <ColorBox color={colors[-1 * num]}>-{num}</ColorBox>
      ))}
      <ColorBox color={defaultColor}>0</ColorBox>
      {[1, 2, 3, 4, 5, 6, 7].map(num => (
        <ColorBox color={colors[num]}>{num}</ColorBox>
      ))}
    </div>
  );
}

export function ButtonColorVariants() {
  return (
    <Grid columns="5" gap="sm">
      <ButtonColorVariant color="primary" />
      <ButtonColorVariant color="secondary" />
      <ButtonColorVariant color="success" />
      <ButtonColorVariant color="warning" />
      <ButtonColorVariant color="danger" />
      <ButtonColorVariant color="info" />
      <ButtonColorVariant color="dark" />
      <ButtonColorVariant color="light" />
      <ButtonColorVariant color="gray" />
    </Grid>
  );
}
