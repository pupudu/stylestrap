import { withStyles } from '../core/ruleEngine/withStyles';

const Cell = withStyles('Cell', props => {
  const [gridRowStart, gridRowEnd] =
    typeof props.row === 'number' ? [props.row, props.row + 1] : props.row;
  const [gridColumnStart, gridColumnEnd] =
    typeof props.col === 'number' ? [props.col, props.col + 1] : props.col;
  return {
    alignSelf: props.align,
    position: props.position,
    gridRowStart,
    gridRowEnd,
    gridColumnStart,
    gridColumnEnd
  };
})();

export default Cell;
