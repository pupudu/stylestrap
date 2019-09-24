import React from 'react';
import { Playground as PlaygroundBase, Props } from 'docz';
import { Card, CardBody } from './index';

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
    <Card css={{ background: bg, ...css }} {...props}>
      <CardBody>{children}</CardBody>
    </Card>
  );
}

export function Spaced(props) {
  return React.Children.map(props.children, (child: any) => {
    return <>{child} </>;
  });
}
