import React from 'react';
import { Modal, useToggle, ModalBody, ModalHeader, ModalFooter, Button, Card, Box } from '../../';
import { longText } from './longText';

const longModalContent = longText.split('\n').map(token => (
  <>
    {token} <br />
  </>
));

export function BasicModalLayout() {
  return (
    <Box p="sm" css={{ background: '#EEE' }}>
      <Card width="30rem">
        <ModalHeader toggle={true}>Modal Header</ModalHeader>
        <ModalBody>Modal body text goes here.</ModalBody>
        <ModalFooter>
          <Button color="secondary">Close</Button>
          <Button>Save Changes</Button>
        </ModalFooter>
      </Card>
    </Box>
  );
}

export function BasicModal(props) {
  const [isOpen, toggle] = useToggle(false);

  const {
    title = 'Modal Header',
    content = "Woohoo, you're reading this text in a modal!",
    buttonText = 'Launch Demo Modal',
    bodyProps,
    ...rest
  } = props;

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle} {...rest}>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody {...bodyProps}>{content}</ModalBody>
        <ModalFooter>
          <Button color="secondary">Close</Button>
          <Button>Save Changes</Button>
        </ModalFooter>
      </Modal>
      <Button onClick={toggle}>{buttonText}</Button>
    </div>
  );
}

export function ModalLongContent() {
  return <BasicModal content={longModalContent} />;
}

export function ModalLongContentScrollable() {
  return <BasicModal scrollable content={longModalContent} buttonText="Scroll full height" />;
}

export function ModalLongContentScrollableHeight() {
  return (
    <BasicModal
      content={longModalContent}
      bodyProps={{ maxHeight: '20rem', overflow: 'auto' }}
      buttonText="Scroll custom height"
    />
  );
}
