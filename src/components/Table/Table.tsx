import React from 'react';
import { makeComponent } from '../../core';
import './table.css';

type Table = {
  stripped: boolean;
  hover: boolean;
  borders: boolean | 'all';
};

const Table: React.FC<Table> = makeComponent('Table')
  .classNames(props => ({
    table: true,
    'table-stripped': props.stripped,
    'table-hover': props.hover,
    'table-borderless': props.borders === false,
    'table-bordered': props.borders === 'all',
  }))
  .styles(() => {
    return {}; // TODO: Change colors based on props
  })
  .create('table');

export { Table };
