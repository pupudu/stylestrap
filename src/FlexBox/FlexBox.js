import { makeComponent } from '../core/ruleEngine';

function getFlexProps(props) {
  const breakpoints = Object.keys(props.theme.breakpoints || {});
  const state = {
    flex: {},
    maxWidth: {}
  };

  for (const key of breakpoints) {
    if (props[key]) {
      const width = (props[key] * 100) / 12; // TODO get column count from theme
      state.flex[key] = `0 0 ${width}%`;
      state.maxWidth[key] = `${width}%`;
    }
  }

  return Object.keys(state.flex).length
    ? state
    : {
        flexBasis: props.flexBasis || 0,
        flexGrow: props.flexGrow || 1,
        flexShrink: props.flexShrink || 1
      };
}

const Container = makeComponent('Container')
  .classNames('container')
  .styles(props => ({
    padding: props.padding || {
      left: 'sm',
      right: 'sm'
    },
    width: props.fluid,
    margin: props.margin,
    maxWidth: !props.fluid && props.maxWidth
  }))
  .create();

const Col = makeComponent('Col')
  .classNames('col')
  .styles(props => {
    return {
      padding: props.padding,
      margin: props.margin,
      ...getFlexProps(props)
    };
  })
  .create();

const Row = makeComponent('Row')
  .classNames('row')
  .styles(props => ({
    padding: props.padding,
    margin: props.margin,
    flexBasis: props.basis,
    flexGrow: props.grow,
    justifyContent: props.justifyContent,
    flexShrink: props.shrink,
    alignItems: props.alignItems
  }))
  .create();

export { Container, Col, Row };
