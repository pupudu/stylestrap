import { makeComponent } from '../../core';

const Tr = makeComponent('Tr')
  .forwardProps(props => ({
    color: props.color,
    textColor: props.textColor,
  }))
  .styles((props, theme) => ({
    backgroundColor: props.color,
    color: props.textColor || theme.colorByLuminance(props.color, '#FFF', '#000'),
  }))
  .create('tr');

const Th = makeComponent('Th')
  .styles((props, theme) => ({
    borderColor: theme.shadeByLuminance(props.color),
    backgroundColor: props.color,
    color: props.textColor || theme.colorByLuminance(props.color, '#FFF', '#000'),
  }))
  .create('th');

const Td = makeComponent('Td')
  .styles((props, theme) => ({
    borderColor: theme.shadeByLuminance(props.color),
    backgroundColor: props.color,
    color: props.textColor || theme.colorByLuminance(props.color, '#FFF', '#000'),
  }))
  .create('td');

export { Tr, Th, Td };
