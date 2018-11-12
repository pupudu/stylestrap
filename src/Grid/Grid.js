import { withStyles } from '../core/ruleEngine/withStyles';

const Grid = withStyles('Grid', props => {
  const columns = isNaN(+props.columns)
    ? props.columns
    : `repeat(${+props.columns}, 1fr)`;
  return {
    padding: props.padding,
    margin: props.margin,
    gridTemplateColumns: columns,
    gridTemplateRows: props.rows,
    gridGap: props.gap,
    display: 'grid',
    position: 'relative'
  };
})();

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

export { Grid, Cell };
