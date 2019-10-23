import { makeComponent } from '../../core';
import { Table as TableType } from '../../core/SS';
import './table.css';

export interface TableProps extends TableType {
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
    color: props.textColor || theme.colorByLuminance(props.color, '#FFF', '#000'),
  }))
  .forwardProps(props => ({
    color: props.color,
    textColor: props.textColor,
  }))
  .create('table');

export { Table };
