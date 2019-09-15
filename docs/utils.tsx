import React from 'react';
import { Playground as PlaygroundBase, Props } from 'docz';
import { Styled } from './';

export function Playground(props) {
  return <PlaygroundBase {...props} />;
}

export function PropsTable(props) {
  return <Props {...props} />;
}

export function Preview(props) {
  return <Styled css={{ background: props.bg, padding: 'md', borderRadius: 'md' }} {...props} />;
}
