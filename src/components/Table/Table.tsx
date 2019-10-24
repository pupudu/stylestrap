import { makeComponent } from '../../core';
import { transparentize } from '../../core/safePolished';
import { Table as TableType } from '../../core/SS';
import './table.css';

export interface TableProps extends TableType {
  striped?: boolean;
  hover?: boolean;
  borders?: boolean | 'all';
  width?: string;
  size?: 'sm';
  stripeColor: string;
  stripeTextColor: string;
  hoverColor: string;
  hoverTextColor: string;
}

const Table = makeComponent<TableProps>('Table')
  .defaultProps({
    stripeColor: '#000',
    stripeTextColor: '#212529',
    hoverColor: '#000',
    hoverTextColor: '#212529',
  })
  .raw(
    (props, theme) => `
      &.table-striped-custom tr:nth-of-type(odd) {
        color: ${theme.getColor(props.stripeTextColor)};
        background-color: ${transparentize(0.95, theme.getColor(props.stripeColor))};
      }
      &.table-hover-custom tbody tr:hover {
        color: ${theme.getColor(props.hoverTextColor)};
        background-color: ${transparentize(0.925, theme.getColor(props.hoverColor))};
      }
      `
  )
  .classNames(props => ({
    table: true,
    'table-striped-custom': props.striped,
    'table-hover-custom': props.hover,
    'table-borderless': props.borders === false,
    'table-bordered': props.borders === 'all',
    'table-sm': props.size === 'sm',
  }))
  .styles((props, theme) => ({
    width: props.width,
    backgroundColor: props.color,
    color: props.textColor || theme.colorByLuminance(props.color, '#FFF', '#212529'),
  }))
  .forwardProps(props => ({
    color: props.color,
    textColor: props.textColor,
  }))
  .create('table');

export { Table };
