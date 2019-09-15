import React, { useState } from 'react';
import T from 'prop-types';
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

const Modal = ({ children, toggle, ...rest }) => {
  return (
    <ModalComponent {...rest} toggle={toggle}>
      {React.Children.map(children, child => {
        if (child && child.type === ModalHeader) {
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

Modal.propTypes = {
  initialState: T.bool,
};

export { useToggle, Modal, ModalHeader, ModalFooter, ModalBody };
