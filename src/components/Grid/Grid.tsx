import { makeComponent, transform } from '../../core';

const Grid = makeComponent('Grid')
  .styles(props => {
    const gridTemplateColumns = transform(
      columns => (isNaN(+columns) ? columns : `repeat(${+columns}, 1fr)`),
      props.columns
    );
    const gridTemplateRows = transform(
      rows => (isNaN(+rows) ? rows : `repeat(${+rows}, 1fr)`),
      props.columns
    );
    return {
      display: 'grid',
      position: 'relative',
      gridTemplateColumns,
      gridTemplateRows,
      padding: props.padding,
      margin: props.margin,
      gridGap: props.gap,
    };
  })
  .create();

const Cell = makeComponent('Cell')
  .styles(({ align: alignSelf, position, ...props }) => {
    const [gridRowStart, gridRowEnd] = transform(
      (row = []) => (typeof row !== 'number' ? row : row > 0 ? [row, row + 1] : [row, row - 1]),
      Array.isArray(props.row) ? props.row : Number(props.row) || undefined
    );
    const [gridColumnStart, gridColumnEnd] = transform(
      (col = []) => (typeof col !== 'number' ? col : col > 0 ? [col, col + 1] : [col, col - 1]),
      Array.isArray(props.col) ? props.col : Number(props.col) || undefined
    );
    return { alignSelf, position, gridRowStart, gridRowEnd, gridColumnStart, gridColumnEnd };
  })
  .create();

export { Grid, Cell };
