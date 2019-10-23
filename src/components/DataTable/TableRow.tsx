import React from 'react';
import { Column } from './DataTable';
import { Td, Tr } from '../Table';

export const TableRow: React.FC<TableRowProps> = ({ columns, data, Cell, ...rest }) => {
  if (!data || typeof data !== 'object' || !columns) return null;
  return (
    <Tr {...rest}>
      {columns.map((column, index) => {
        const Component = (column.Cell || Cell || Td) as any;
        return (
          <Component
            data={data}
            key={index}
            {...column.props}
            style={{ minWidth: column.width, maxWidth: column.width }}
          >
            {data[column.key]}
          </Component>
        );
      })}
    </Tr>
  );
};

export interface TableRowProps {
  columns?: Column[];
  Cell?: React.FC;
  data: any;
  color?: string;
}
