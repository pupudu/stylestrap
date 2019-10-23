import React from 'react';
import { DataTable } from './index';
import { Button, FormInput, Modal, ModalBody, Td, useToggle } from '../';
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
  return <DataTable color="white" columns={columns} data={data} {...props} />;
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

const ModalButton = props => {
  const [isOpen, toggle] = useToggle();
  return (
    <Td>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalBody>
          <FormInput value={props.data.firstName} label="First Name" />
          <FormInput value={props.data.lastName} label="Last Name" />
          <FormInput value={props.data.email} label="email" />
        </ModalBody>
      </Modal>
      <Button size="sm" color="info" onClick={toggle}>
        Show Data
      </Button>
    </Td>
  );
};

const columnsWithCustomCells = [
  { key: 'firstName', title: 'First Name' },
  { key: 'lastName', title: 'Last Name' },
  { key: 'email', title: 'email' },
  { key: 'email', title: 'Actions', Cell: ModalButton },
];

export function CustomCellsAndHeadings() {
  return (
    <BasicTable
      columns={columnsWithCustomCells}
      data={data}
      Heading={DataTable.DarkHeading}
      striped
    />
  );
}
