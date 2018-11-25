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
  const { row = [], col = [], align, position } = props;
  const [gridRowStart, gridRowEnd] =
    typeof row === 'number' ? [row, row + 1] : row;
  const [gridColumnStart, gridColumnEnd] =
    typeof col === 'number' ? [col, col + 1] : col;
  return {
    alignSelf: align,
    position: position,
    gridRowStart,
    gridRowEnd,
    gridColumnStart,
    gridColumnEnd
  };
})();

export { Grid, Cell };
