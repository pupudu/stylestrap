import React from 'react';
import { FormGroup, Feedback, HelpText, Input, Label } from './FormComponents';
import { makeComponent, StylestrapComponent } from '../../core';

const FormInputBase = props => {
  const { error, touched, label, id, helpText, className, children, ...rest } = props;

  const type = (props.type || '').toLowerCase();
  const readOnly = props.readOnly || type === 'plaintext';
  const as = type !== 'textarea' ? 'input' : 'textarea';

  return (
    <FormGroup className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input {...rest} readOnly={readOnly} invalid={touched && error} id={id} as={as} />
      {error && <Feedback invalid={error}>{error}</Feedback>}
      {helpText && <HelpText>{helpText}</HelpText>}
      {children}
    </FormGroup>
  );
};

interface FormInputProps extends StylestrapComponent<HTMLInputElement> {
  error?: string;
  touched?: boolean;
  label?: string;
  helpText?: string;
  readOnly?: boolean;
  type?: 'text' | 'textarea' | 'date' | 'datetime-local' | 'password' | 'number' | 'email' | string;
}

const FormInput = makeComponent<FormInputProps>('FormInput').create(FormInputBase);

export { FormInput };
