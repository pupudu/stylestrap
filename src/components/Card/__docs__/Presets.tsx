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
  ListGroup,
  ListGroupItem,
  CardImgOverlay,
  BgImg,
} from '../../../';
import src from './cardImg.jpg';

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

export function CardImageTop() {
  return (
    <Card width="15rem">
      <CardImg src={src} />
      <CardBody>
        <CardText>Some text description of the image below the image</CardText>
      </CardBody>
    </Card>
  );
}

export function CardImageOverlay() {
  return (
    <Card width="20rem" textColor="#FFF">
      <CardImg src={src} />
      <CardImgOverlay>
        <CardTitle>Card title</CardTitle>
        <CardText>
          This is a card with supporting text below as a natural lead-in to additional content. This
          content is a little bit longer.
        </CardText>
        <CardText>Last updated 3 minutes ago</CardText>
      </CardImgOverlay>
    </Card>
  );
}

export function CardImageHorizontal() {
  return (
    <Card width="40rem">
      <Grid columns="2">
        <CardImg src={src} />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            This is a card with supporting text below as a natural lead-in to additional content.
            This content is a little bit longer.
          </CardText>
          <CardText muted>Last updated 3 minutes ago</CardText>
        </CardBody>
      </Grid>
    </Card>
  );
}

export function CardBgImg() {
  return (
    <Grid columns="2" gap="sm">
      <div>
        <Card width="25rem">
          <Grid columns="2">
            <BgImg src={src} />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>
                Image fits perfectly on the space available, by cropping the image horizontally.
              </CardText>
              <CardText muted>Last updated 3 minutes ago</CardText>
            </CardBody>
          </Grid>
        </Card>
      </div>
      <div>
        <Card width="25rem">
          <Grid columns="2">
            <CardImg src={src} />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>
                Image is not cropped and some white space is added on bottom to match the content
                height.
              </CardText>
              <CardText muted>Last updated 3 minutes ago</CardText>
            </CardBody>
          </Grid>
        </Card>
      </div>
    </Grid>
  );
}

export function CardBgImgOverlay() {
  return (
    <Grid columns="18rem 18rem" gap="sm">
      <div>
        <Card width="18rem" textColor="white">
          <BgImg src={src}>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>
                This content is a little bit longer. This image is cropped to fit both the content
                and image without any unintended white spaces
              </CardText>
              <CardText>Last updated 3 minutes ago</CardText>
            </CardBody>
          </BgImg>
        </Card>
      </div>
      <div>
        <Card width="18rem" textColor="#FFF">
          <CardImg src={src} />
          <CardImgOverlay>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This content is a little bit longer. The image is not cropped in this case. Therefore
              if the content is too long, some of the content will be cropped from the bottom side
              of the card.
            </CardText>
            <CardText>Last updated 3 minutes ago</CardText>
          </CardImgOverlay>
        </Card>
      </div>
    </Grid>
  );
}

export function CardImagePreview() {
  return (
    <Grid columns="3">
      <CardImageTop />
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

export function PlainCard(props) {
  return (
    <Card {...props}>
      <CardHeader>Heading</CardHeader>
      <CardBody>
        <CardTitle>Card Title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </CardText>
      </CardBody>
    </Card>
  );
}

export function HeaderLessPlainCard(props) {
  return (
    <Card {...props}>
      <CardBody>
        <CardTitle>Card Title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </CardText>
      </CardBody>
    </Card>
  );
}

export function CardStylePlain() {
  return (
    <Grid columns="2" gap="md">
      <PlainCard color="primary" />
      <PlainCard color="secondary" />
      <PlainCard color="success" />
      <PlainCard color="warning" />
      <PlainCard color="danger" />
      <PlainCard color="info" />
      <PlainCard color="light" />
      <PlainCard color="dark" />
    </Grid>
  );
}

export function CardStyleAccent() {
  return (
    <Grid columns="2" gap="md">
      <HeaderLessPlainCard color="primary" flavor="accent" />
      <HeaderLessPlainCard color="secondary" flavor="accent" />
      <HeaderLessPlainCard color="success" flavor="accent" />
      <HeaderLessPlainCard color="warning" flavor="accent" />
      <HeaderLessPlainCard color="danger" flavor="accent" />
      <HeaderLessPlainCard color="info" flavor="accent" />
      <HeaderLessPlainCard color="light" flavor="accent" />
      <HeaderLessPlainCard color="dark" flavor="accent" />
    </Grid>
  );
}
