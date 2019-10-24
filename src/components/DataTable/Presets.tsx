import React from 'react';
import { DataTable } from './index';
import { Button, FormInput, Modal, ModalBody, Td, useToggle } from '../';
import faker from 'faker';
import { useColorMode } from 'theme-ui';

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
  const [mode] = useColorMode();
  return (
    <DataTable
      columns={columns}
      data={data}
      textColor={mode === 'dark' ? '#FFF' : undefined}
      {...props}
    />
  );
}

export function DarkHeadingsTable() {
  return <BasicTable Heading={DataTable.DarkHeading} />;
}

function Striped(props) {
  const [mode] = useColorMode();
  return (
    <BasicTable
      Heading={DataTable.DarkHeading}
      striped
      stripeColor={mode === 'dark' ? '#FFF' : '#000'}
      {...props}
    />
  );
}

function Hover(props) {
  const [mode] = useColorMode();
  return (
    <BasicTable
      Heading={DataTable.DarkHeading}
      hover
      hoverColor={mode === 'dark' ? '#FFF' : '#000'}
      {...props}
    />
  );
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
  return <Striped columns={columnsWithCustomCells} data={data} Heading={DataTable.DarkHeading} />;
}

export const Presets = {} as any;
Presets.Striped = Striped;
Presets.Hover = Hover;
