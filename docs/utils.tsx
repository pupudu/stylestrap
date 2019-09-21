import React from 'react';
import { Playground as PlaygroundBase, Props } from 'docz';
import { Card, CardBody } from './';

export function Playground(props) {
  return <PlaygroundBase {...props} />;
}

export function PropsTable(props) {
  return <Props {...props} />;
}

export function Preview({ children, bg, ...props }) {
  return (
    <Card css={{ background: bg }} {...props}>
      <CardBody>{children}</CardBody>
    </Card>
  );
}

export function Spaced(props) {
  return React.Children.map(props.children, (child: any) => {
    return <>{child} </>;
  });
}
