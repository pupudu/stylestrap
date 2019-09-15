import { makeComponent, transform } from '../../core';

const Grid = makeComponent('Grid')
  .styles(props => {
    const gridTemplateColumns = transform(
      columns => (isNaN(+columns) ? columns : `repeat(${+columns}, 1fr)`),
      props.columns
    );
    return {
      display: 'grid',
      position: 'relative',
      gridTemplateColumns,
      padding: props.padding,
      margin: props.margin,
      gridGap: props.gap,
      gridTemplateRows: props.rows,
    };
  })
  .create();

const Cell = makeComponent('Cell')
  .styles(({ align: alignSelf, position, ...props }) => {
    const [gridRowStart, gridRowEnd] = transform(
      row => (typeof row === 'number' ? [row, row + 1] : row),
      props.row
    );
    const [gridColumnStart, gridColumnEnd] = transform(
      col => (typeof col === 'number' ? [col, col + 1] : col),
      props.col
    );
    return { alignSelf, position, gridRowStart, gridRowEnd, gridColumnStart, gridColumnEnd };
  })
  .create();

export { Grid, Cell };
