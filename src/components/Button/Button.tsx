import { makeComponent } from '../../core';
import { transparentize } from '../../core/safePolished';
import { ButtonProps } from './Types';

function getStatus(active, hover, disabled) {
  if (disabled) return 'disabled';
  if (active) return 'active';
  if (hover) return 'hover';
  return 'none';
}

function getButtonStyle(props, theme) {
  const { flavor, color, active, disabled } = props;
  if (!color) return;

  const dark = theme.getColorShade(color, -1);
  const darker = theme.getColorShade(color, -2);
  const lighter = theme.getColorShade(color, 2);
  const transparent = 'rgba(0,0,0,0)';
  const semiTransparent = transparentize(0.5, theme.getColor(color));
  const white = theme.colorByLuminance(color);

  const backgroundColor = {
    disabled: flavor ? transparent : lighter,
    active: darker,
    hover: flavor ? color : dark,
    none: flavor ? transparent : color,
  };

  const textColor = {
    disabled: flavor ? lighter : white,
    active: white,
    hover: white,
    none: flavor ? color : white,
  };

  const borderColor = {
    disabled: lighter,
    active: darker,
    hover: dark,
    none: color,
  };

  return {
    color: {
      base: textColor[getStatus(active, false, disabled)],
      '&:hover': textColor[getStatus(active, true, disabled)],
      '&:active': textColor[getStatus(true, false, disabled)],
    },
    backgroundColor: {
      base: backgroundColor[getStatus(active, false, disabled)],
      '&:hover': backgroundColor[getStatus(active, true, disabled)],
      '&:active': backgroundColor[getStatus(true, false, disabled)],
    },
    borderColor: {
      base: borderColor[getStatus(active, false, disabled)],
      '&:hover': borderColor[getStatus(active, true, disabled)],
      '&:active': borderColor[getStatus(true, false, disabled)],
    },
    borderWidth: flavor === 'ghost' ? 0 : '1px',
    borderLeftWidth: flavor === 'accent' ? '4px' : flavor === 'ghost' ? 0 : '1px',
    boxShadow: {
      '&:focus': `0 0 0 0.2rem ${semiTransparent}`,
    },
  };
}

export const Button = makeComponent<ButtonProps>('Button')
  .raw(
    `
      &.btn-xs {
        padding: 0.125rem 0.25rem;
        font-size: 0.75rem;
        line-height: 1.25;
        border-radius: 0.15rem;
      }
    `
  )
  .classNames(props => ({
    btn: true,
    'btn-block': props.block,
    [`btn-${props.size}`]: !!props.size,
    active: props.active,
    disabled: props.disabled,
  }))
  .defaultProps({ color: 'primary', type: 'button' })
  .props(props => ({
    'aria-pressed': props.active,
    'aria-disabled': props.disabled,
    role: props.as === 'a' ? 'button' : undefined,
    tabIndex: props.as === 'a' && props.disabled ? '-1' : props.tabindex || 0,
  }))
  .styles(getButtonStyle)
  .filter('color')
  .create('button');
