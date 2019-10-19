import React from 'react';
import { DataTable } from './index';
import faker from 'faker';

const columns = [
  { key: 'firstName', title: 'First Name' },
  { key: 'lastName', title: 'Last Name' },
  { key: 'email', title: 'email' },
];

const data = Array(4)
  .fill(0)
  .map(() => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
  }));

export function BasicTable(props) {
  return <DataTable columns={columns} data={data} {...props} />;
}

export function DarkHeadingsTable() {
  return <BasicTable Heading={DataTable.DarkHeading} />;
}

export function ColumnWidthTable() {
  return (
    <BasicTable color="dark" columns={columns.map(column => ({ ...column, width: '250px' }))} />
  );
}

export function CustomRowsTable() {
  return (
    <BasicTable color="dark">
      <DataTable.Row
        data={{
          firstName: 'Barrack',
          lastName: 'Obama',
          email: 'barrack.obama@gmail.com',
        }}
        color="info"
      />
    </BasicTable>
  );
}
