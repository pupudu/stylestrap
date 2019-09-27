import React from 'react';
import {
  Grid,
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  CardHeader,
  CardLink,
  CardFooter,
  BlockquoteText,
  Blockquote,
  BlockquoteFooter,
} from '../../../';
import src from './cardImg.jpg';
import { ListGroup, ListGroupItem } from '../../ListGroup/ListGroup';

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

export function CardImagePreview() {
  return (
    <Grid columns="3">
      <Card width="15rem">
        <CardImg src={src} />
        <CardBody>
          <CardText>Some text description of the image below the image</CardText>
        </CardBody>
      </Card>
      <Card width="15rem">
        <CardBody>
          <CardText>Some text description of the image above the image</CardText>
        </CardBody>
        <CardImg src={src} />
      </Card>
      <Card width="15rem">
        <CardBody>
          <CardText>Some text above the image</CardText>
        </CardBody>
        <CardImg src={src} />
        <CardBody>
          <CardText>Some text below the image</CardText>
        </CardBody>
      </Card>
    </Grid>
  );
}

export function ListGroupPreset() {
  return (
    <Card width="18rem">
      <CardHeader>Optional Header</CardHeader>
      <ListGroup flush>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
    </Card>
  );
}

export function KitchenSink() {
  return (
    <Card width="18rem">
      <CardImg src={src} />
      <CardBody>
        <CardTitle>Card Title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </CardText>
      </CardBody>
      <ListGroup flush>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <CardBody>
        <CardLink>Card Link</CardLink>
        <CardLink>Another Link</CardLink>
      </CardBody>
    </Card>
  );
}

export function OptionalHeader() {
  return (
    <Card>
      <CardHeader>Optional Header</CardHeader>
      <CardBody>
        <CardTitle>Special title treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go Somewhere</Button>
      </CardBody>
      <CardFooter>Optional Footer</CardFooter>
    </Card>
  );
}

export function OptionalHeaderBold() {
  return (
    <Card>
      <CardHeader as="h5">Optional Header</CardHeader>
      <CardBody>
        <CardTitle>Special title treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go Somewhere</Button>
      </CardBody>
    </Card>
  );
}

export function TextAlign() {
  return (
    <Grid columns="3" gap="xs">
      <div>
        <Card textAlign="justify" width="16rem">
          <CardBody>
            <CardTitle>Title</CardTitle>
            <CardText>
              With some supporting text justified to make a solid sense of order and standard. like
              a newspaper column.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
      <div>
        <Card textAlign="center" width="16rem">
          <CardBody>
            <CardTitle>Title</CardTitle>
            <CardText>
              With supporting text aligned towards the center of the card component.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
      <div>
        <Card textAlign="right" width="16rem">
          <CardBody>
            <CardTitle>Title</CardTitle>
            <CardText>
              With supporting text aligned towards the right side of the card component.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    </Grid>
  );
}

export function BlockquoteCard() {
  return (
    <Card>
      <CardBody>
        <Blockquote css={{ marginBottom: 0 }}>
          <BlockquoteText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </BlockquoteText>
          <BlockquoteFooter>
            Someone famous in <cite title="Source Title">Source Title</cite>
          </BlockquoteFooter>
        </Blockquote>
      </CardBody>
    </Card>
  );
}
