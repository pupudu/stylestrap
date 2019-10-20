import { makeComponent, SS } from '../../core';
import './table.css';

export interface TableProps extends SS.Table {
  striped?: boolean;
  hover?: boolean;
  borders?: boolean | 'all';
  width?: string;
  size?: 'sm';
}

const Table = makeComponent<TableProps>('Table')
  .classNames(props => ({
    table: true,
    'table-striped': props.striped,
    'table-hover': props.hover,
    'table-borderless': props.borders === false,
    'table-bordered': props.borders === 'all',
    'table-sm': props.size === 'sm',
  }))
  .styles((props, theme) => ({
    width: props.width,
    backgroundColor: props.color,
    color: theme.colorByLuminance(props.color),
  }))
  .forwardProps(props => ({
    color: props.color,
  }))
  .create('table');

export { Table };
