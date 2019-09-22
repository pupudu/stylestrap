import React from 'react';
import { Heading, Badge, Styled } from '../index';

function StyledH() {
  return (
    <span>
      <Badge color="primary">S</Badge>
      <Badge color="secondary">T</Badge>
      <Badge color="success">Y</Badge>
      <Badge color="warning">L</Badge>
      <Badge color="danger">E</Badge>
      <Badge color="info">D</Badge>
    </span>
  );
}

function Components() {
  return (
    <span>
      <Badge color="dark">C</Badge>
      <Badge color="primary">O</Badge>
      <Badge color="secondary">M</Badge>
      <Badge color="success">P</Badge>
      <Badge color="warning">O</Badge>
      <Badge color="danger">N</Badge>
      <Badge color="info">E</Badge>
      <Badge color="dark">N</Badge>
      <Badge color="primary">T</Badge>
      <Badge color="secondary">S</Badge>
    </span>
  );
}

export function Subtitle() {
  return (
    <div>
      <Heading size="h5">
        The{' '}
        <Styled as="span" css={{ color: '#7952b3', fontSize: '24px' }}>
          Bootstrap
        </Styled>{' '}
        you know; reimagined with
      </Heading>
      <Heading size="h4">
        <StyledH /> <Components />
      </Heading>
    </div>
  );
}
