import React from 'react';
import { TableRow } from './TableRow';
import { Column } from './DataTable';

export const TableRows: React.FC<TableRowsProps> = ({ data, ...rest }) => {
  if (!data) return null;

  return (
    <>
      {data.map((datum, index) => (
        <TableRow key={index} data={datum} {...rest} />
      ))}
    </>
  );
};

export interface TableRowsProps {
  data: any[];
  columns?: Column[];
  color?: string;
}
