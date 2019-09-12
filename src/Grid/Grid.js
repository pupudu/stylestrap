import { makeComponent, transform } from '../core/ruleEngine';

const Grid = makeComponent('Grid')
  .styles(props => {
    const columns = transform(columns => {
      return isNaN(+columns) ? columns : `repeat(${+columns}, 1fr)`;
    }, props.columns);

    return {
      padding: props.padding,
      margin: props.margin,
      gridTemplateColumns: columns,
      gridTemplateRows: props.rows,
      gridGap: props.gap,
      display: 'grid',
      position: 'relative'
    };
  })
  .create();

const Cell = makeComponent('Cell')
  .styles(props => {
    const { align, position } = props;

    const { gridRowStart, gridRowEnd } = transform((row = []) => {
      const [gridRowStart, gridRowEnd] =
        typeof row === 'number' ? [row, row + 1] : row;
      return {
        gridRowStart,
        gridRowEnd
      };
    }, props.row);

    const { gridColumnStart, gridColumnEnd } = transform((col = []) => {
      const [gridColumnStart, gridColumnEnd] =
        typeof col === 'number' ? [col, col + 1] : col;
      return {
        gridColumnStart,
        gridColumnEnd
      };
    }, props.col);

    return {
      alignSelf: align,
      position: position,
      gridRowStart,
      gridRowEnd,
      gridColumnStart,
      gridColumnEnd
    };
  })
  .create();

export { Grid, Cell };
