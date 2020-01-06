import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Input,
  HelpText,
  Label,
  Button,
  Select,
  FormInput,
  Card,
  CardBody,
  CardFooter,
  Grid,
} from '../../';

export const Overview = () => {
  return (
    <Form>
      <FormGroup>
        <Label htmlFor="email-eg">Email address</Label>
        <Input type="email" name="email-eg" placeholder="Enter email" />
        <HelpText>We'll never share your email with anyone else.</HelpText>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password-eg">Password</Label>
        <Input type="password" name="password-eg" placeholder="Password" />
      </FormGroup>
      <FormGroup type="checkbox">
        <Input type="checkbox" name="check-eg" />
        <Label type="checkbox" htmlFor="check-eg">
          Check me out
        </Label>
      </FormGroup>
      <Button type="submit" color="primary">
        Submit
      </Button>
    </Form>
  );
};

export const FormControls = () => {
  return (
    <Form>
      <FormGroup>
        <Label htmlFor="email-eg">Email address</Label>
        <Input type="email" name="email-eg" placeholder="name@example.com" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="exampleFormControlSelect1">Example select</Label>
        <Select name="select-eg">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="select-eg-2">Example multiple select</Label>
        <Select multiple name="select-eg-2">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <label htmlFor="text-area-eg">Example textarea</label>
        <Input type="textarea" name="text-area-eg" rows={3} placeholder="Some long description" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="file-eg">Example File Input</label>
        <Input type="file" name="file-eg" placeholder="Upload file from computer" />
      </FormGroup>
    </Form>
  );
};

export const FormInputPreset = () => {
  return (
    <FormInput
      type="email"
      placeholder="name@example.com"
      label="Email address"
      helpText="We'll never share your email with anyone else."
    />
  );
};

export const FormInputWithValidation = () => {
  const [invalid, setInvalid] = useState(false);
  const [valid, setValid] = useState(false);
  const [email, setEmail] = useState('');
  return (
    <Card textColor="#000" width="32rem">
      <CardBody>
        <FormInput
          type="email"
          placeholder="name@example.com"
          label="Email address"
          helpText="We'll never share your email with anyone else."
          error={invalid && 'Invalid email address'}
          validInfo={valid && 'Email address is correct'}
          touched={invalid || valid}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </CardBody>
      <CardFooter>
        <Button
          size="sm"
          color="info"
          onClick={() => {
            setInvalid(!email.includes('@'));
            setValid(false);
          }}
        >
          Validate (Errors Only)
        </Button>{' '}
        <Button
          size="sm"
          color="info"
          onClick={() => {
            setInvalid(!email.includes('@'));
            setValid(email.includes('@'));
          }}
        >
          Validate verbosely
        </Button>
      </CardFooter>
    </Card>
  );
};

export const Sizing = () => {
  return (
    <Grid gap="sm">
      <Input placeholder="scale lg" scale="lg" />
      <Input placeholder="normal size" />
      <Input placeholder="scale sm" scale="sm" />
    </Grid>
  );
};

export const SizingSelect = () => {
  return (
    <Grid gap="sm">
      <Select scale="lg">
        <option>Large Select</option>
      </Select>
      <Select>
        <option>Normal Select</option>
      </Select>
      <Select scale="sm">
        <option>Small Select</option>
      </Select>
    </Grid>
  );
};

export const Readonly = () => {
  return (
    <Grid gap="sm">
      <Input value="readonly text input" readOnly />
      <Input value="readonly text input" type="plaintext" readOnly />
    </Grid>
  );
};
