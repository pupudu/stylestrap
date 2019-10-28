import React from 'react';
import { Playground as PlaygroundBase, Props } from 'docz';
import { Box, Card, CardBody, Heading, makeComponent } from './index';
import { useColorMode } from 'theme-ui';

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

export const Helpers = {} as any;

const Subtitle = props => {
  return (
    <Heading size="h5" muted={true} css={{ marginBottom: '2rem' }}>
      {props.children}
    </Heading>
  );
};

Helpers.Subtitle = Subtitle;

export function PropsTable(props) {
  return <Props {...props} />;
}

export function Preview({ children, bg, $css, color = 'transparent', ...props }) {
  return (
    <Card
      {...props}
      $css={{
        ...$css,
        overflow: 'auto',
        marginBottom: '2rem',
      }}
      color={color}
    >
      <CardBody>{children}</CardBody>
    </Card>
  );
}

const Adaptive = props => {
  const [mode] = useColorMode();
  return <Preview {...props} textColor={mode === 'dark' ? '#FFF' : '#000'} />;
};

Preview.Adaptive = Adaptive;

export function InfoCard(props) {
  return (
    <Card
      flavor="accent"
      color="info"
      $css={{ marginBottom: '2rem', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
    >
      <CardBody>
        <Heading size="h5">{props.title}</Heading>
        {props.children}
      </CardBody>
    </Card>
  );
}

const Code = makeComponent('InfoCard.code')
  .styles({
    color: '#e83e8c',
    fontFamily: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    fontSize: '75%',
    background: 'rgba(0,0,0,0.05)',
    padding: ' 2px 5px',
  })
  .create('span');

InfoCard.code = Code;

export function WarnCard(props) {
  return (
    <Card
      flavor="accent"
      color="warning"
      $css={{ marginBottom: '2rem', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
    >
      <CardBody>
        <Heading size="h5">{props.title}</Heading>
        {props.children}
      </CardBody>
    </Card>
  );
}

WarnCard.code = Code;

export function Spaced({ children, ...props }) {
  return (
    <Box display="flex" {...props}>
      {React.Children.map(children, (child: any) => {
        return <Box $css={{ display: 'inline-block', marginRight: '0.5rem' }}>{child}</Box>;
      })}
    </Box>
  );
}
