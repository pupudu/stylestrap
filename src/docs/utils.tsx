import React from 'react';
import { Playground as PlaygroundBase, Props } from 'docz';
import { Box, Card, CardBody, Heading } from './index';

export function Playground(props) {
  return (
    <div>
      Use this playground to play around. Edit the markup with custom props and see the changes live
      on the component.
      <br />
      Use the {'"<>"'} controller on the bottom-right to toggle the editor.
      <br />
      <PlaygroundBase {...props} />
    </div>
  );
}

export function PropsTable(props) {
  return <Props {...props} />;
}

export function Preview({ children, bg, css, ...props }) {
  return (
    <Card
      css={{
        background: bg,
        overflow: 'auto',
        boxShadow: '2px 2px 5px #F8F8F8',
        borderWidth: '2px',
        borderColor: '#EEE',
        ...css,
      }}
      {...props}
    >
      <CardBody>{children}</CardBody>
    </Card>
  );
}

export function InfoCard(props) {
  return (
    <Card flavor="accent" color="info">
      <CardBody>
        <Heading size="h5">{props.title}</Heading>
        {props.children}
      </CardBody>
    </Card>
  );
}

export function WarnCard(props) {
  return (
    <Card flavor="accent" color="warning">
      <CardBody>
        <Heading size="h5">{props.title}</Heading>
        {props.children}
      </CardBody>
    </Card>
  );
}

export function Spaced(props) {
  return React.Children.map(props.children, (child: any) => {
    return (
      <>
        <Box css={{ display: 'inline-block' }}>{child}</Box>{' '}
      </>
    );
  });
}
