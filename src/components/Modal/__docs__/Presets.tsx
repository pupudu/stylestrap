import React from 'react';
import { Modal, useToggle, ModalBody, ModalHeader, ModalFooter, Button } from '../../';

export function BasicModal() {
  const [isOpen, toggle] = useToggle(false);
  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader>Header</ModalHeader>
        <ModalBody>Blah Blah</ModalBody>
        <ModalFooter>Some Footer Text</ModalFooter>
      </Modal>
      <Button onClick={toggle}>Toggle</Button>
    </div>
  );
}
