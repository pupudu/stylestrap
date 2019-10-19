import { makeComponent } from '../../core';

const Tr = makeComponent('Tr')
  .forwardProps(props => ({
    color: props.color,
  }))
  .styles((props, theme) => ({
    backgroundColor: props.color,
    color: theme.colorByLuminance(props.color),
  }))
  .create('tr');

const Th = makeComponent('Th')
  .styles((props, theme) => ({
    borderColor: theme.shadeByLuminance(props.color),
    backgroundColor: props.color,
    color: theme.colorByLuminance(props.color),
  }))
  .create('th');

const Td = makeComponent('Td')
  .styles((props, theme) => ({
    borderColor: theme.shadeByLuminance(props.color),
    backgroundColor: props.color,
    color: theme.colorByLuminance(props.color),
  }))
  .create('td');

export { Tr, Th, Td };
