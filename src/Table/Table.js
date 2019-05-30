import T from 'prop-types';
import { withStyles } from '../core/ruleEngine';
import classNames from 'classnames';
import './table.css';

const Table = withStyles(
  [
    'Table',
    props =>
      classNames({
        table: true,
        'table-stripped': props.stripped,
        'table-hover': props.hover,
        'table-borderless': props.borders === false,
        'table-bordered': props.borders === 'all'
      })
  ],
  props => {
    return {}; // TODO: Change colors based on props
  }
)('table');

Table.propTypes = {
  stripped: T.bool,
  hover: T.bool,
  borders: T.oneOf([true, false, 'all'])
};

export { Table };
