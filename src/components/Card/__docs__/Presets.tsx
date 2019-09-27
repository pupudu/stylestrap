import React from 'react';
import { Button, Card, CardBody, CardImg, CardTitle, CardText } from '../../docs';
import src from '../../docs/Presets/cardImg.jpg';

export function BasicCard() {
  return (
    <Card width="18rem">
      <CardImg src={src} alt="swiss-landscape" />
      <CardBody>
        <CardTitle>Card Title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </CardText>
        <Button>Go Somewhere</Button>
      </CardBody>
    </Card>
  );
}
