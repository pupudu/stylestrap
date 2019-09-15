import React, { useState } from 'react';
import { makeComponent } from '../../core';
import {
  Modal as ModalBase,
  ModalHeader as ModalHeaderBase,
  ModalFooter as ModalFooterBase,
  ModalBody as ModalBodyBase,
} from 'reactstrap';

const ModalComponent = makeComponent('Modal')
  .classNames('react-admin')
  .create(ModalBase);
const ModalHeader = makeComponent('ModalHeader').create(ModalHeaderBase);
const ModalFooter = makeComponent('ModalFooter').create(ModalFooterBase);
const ModalBody = makeComponent('ModalBody').create(ModalBodyBase);

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  return [state, () => setState(!state)];
};

type ModalProps = {
  initialState: boolean;
  toggle: Function;
};

const Modal: React.FC<ModalProps> = ({ children, toggle, ...rest }) => {
  return (
    <ModalComponent {...rest} toggle={toggle}>
      {React.Children.map(children, (child: any) => {
        if (child && child.type && child.type === ModalHeader) {
          return React.cloneElement(child, {
            toggle,
            ...child.props,
          });
        }
        return child;
      })}
    </ModalComponent>
  );
};

export { useToggle, Modal, ModalHeader, ModalFooter, ModalBody };
