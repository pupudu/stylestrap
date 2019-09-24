import { makeComponent, transform } from '../../core';

const Grid = makeComponent('Grid')
  .styles(props => {
    const gridTemplateColumns = transform(
      columns => (isNaN(+columns) ? columns : `repeat(${+columns}, 1fr)`),
      props.columns
    );
    const gridTemplateRows = transform(
      rows => (isNaN(+rows) ? rows : `repeat(${+rows}, 1fr)`),
      props.rows
    );
    return {
      display: 'grid',
      position: 'relative',
      gridTemplateColumns,
      gridTemplateRows,
      padding: props.padding,
      margin: props.margin,
      gridGap: props.gap,
      gridTemplateAreas: props.areas,
      height: props.height,
      width: props.width,
    };
  })
  .create();

const Cell = makeComponent('Cell')
  .styles(({ align: alignSelf, position, ...props }) => {
    return {
      alignSelf,
      position,
      gridRowStart: props.top,
      gridRowEnd: props.bottom,
      gridColumnStart: props.left,
      gridColumnEnd: props.right,
      gridArea: props.area,
    };
  })
  .create();

export { Grid, Cell };
