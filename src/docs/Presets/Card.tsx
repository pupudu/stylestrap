import React from 'react';
import { Button, Card, CardBody, Heading } from '../';
import src from './cardImg.jpg';

export function BasicCard() {
  return (
    <Card css={{ width: '18rem' }}>
      <img src={src} alt="card-top" className="card-img-top" />
      <CardBody>
        <Heading size="h5">Card Title</Heading>
        <p>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </p>
        <Button>Go Somewhere</Button>
      </CardBody>
    </Card>
  );
}
