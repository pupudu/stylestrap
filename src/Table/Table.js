import T from 'prop-types';
import { makeComponent } from '../core/ruleEngine';
import './table.css';

const Table = makeComponent('Table')
  .classNames(props => ({
    table: true,
    'table-stripped': props.stripped,
    'table-hover': props.hover,
    'table-borderless': props.borders === false,
    'table-bordered': props.borders === 'all'
  }))
  .styles(props => {
    return {}; // TODO: Change colors based on props
  })
  .create('table');

Table.propTypes = {
  stripped: T.bool,
  hover: T.bool,
  borders: T.oneOf([true, false, 'all'])
};

export { Table };
