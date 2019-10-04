import { useState } from 'react';
import { makeComponent } from '../../core';
import { Box } from '../Box';
import { Modal as ModalBase, ModalHeader as ModalHeaderBase } from 'reactstrap';

const Modal = makeComponent('Modal')
  .forwardProps(props => ({ toggle: props.toggle }))
  .classNames('react-admin')
  .create(ModalBase);

const ModalHeader = makeComponent('ModalHeader').create(ModalHeaderBase);

const ModalFooter = makeComponent('ModalFooter')
  .classNames('modal-footer')
  .create(Box);

const ModalBody = makeComponent('ModalBody')
  .classNames('modal-body')
  .create(Box);

const useToggle = (initialState = false): [boolean, () => any] => {
  const [state, setState] = useState(initialState);
  return [state, () => setState(!state)];
};

export { useToggle, Modal, ModalHeader, ModalFooter, ModalBody };
