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
  stripeTransparency: number;
}

const Table = makeComponent<TableProps>('Table')
  .defaultProps({
    stripeColor: '#000',
    stripeTransparency: 0.05,
  })
  .raw(
    (props, theme) => `
      &.table-striped-custom tr:nth-of-type(odd) {
        background-color: ${transparentize(
          1 - props.stripeTransparency,
          theme.getColor(props.stripeColor)
        )};
      }`
  )
  .classNames(props => ({
    table: true,
    'table-striped-custom': props.striped,
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
