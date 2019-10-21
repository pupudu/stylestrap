import React from 'react';
import { Table, TableProps, TBody } from '../Table';
import { deriveTableWidth, injectProps, DarkHeading } from './helpers';
import { TableRow } from './TableRow';
import { TableRows } from './TableRows';
import { TableHeadings } from './TableHeadings';

const DataTable: DataTableType = ({
  data = [],
  columns,
  width,
  children,
  Cell,
  Heading,
  ...rest
}) => {
  return (
    <Table {...rest} width={(width as string) || deriveTableWidth(columns)}>
      <TableHeadings columns={columns} Heading={Heading} />
      <TBody>
        {injectProps(children, { columns })}
        {data.map((datum, index) => (
          <TableRow key={index} columns={columns} data={datum} Cell={Cell} />
        ))}
      </TBody>
    </Table>
  );
};

type DataTableType = React.FC<DataTableProps & TableProps> & {
  Row: typeof TableRow;
  Rows: typeof TableRows;
  DarkHeading: typeof DarkHeading;
};

DataTable.Row = TableRow;
DataTable.Rows = TableRows;
DataTable.DarkHeading = DarkHeading;

export interface Column {
  key: string;
  title?: string;
  width?: number | string;
  Cell?: React.FC;
  Heading?: React.FC;
  props?: object;
}

export interface DataTableProps {
  data?: any[];
  columns: Column[];
  Cell?: React.FC;
  Heading?: React.FC;
  width?: string | number;
}

export { DataTable };
