import React from 'react';
import { FormGroup, Feedback, HelpText, Input, Label } from './FormComponents';
import { makeComponent } from '../../core';
import { Input as InputType } from '../../core/SS';

const FormInputBase = props => {
  const { error, validInfo, touched, label, id, helpText, className, children, ...rest } = props;

  const type = (props.type || '').toLowerCase();
  const readOnly = props.readOnly || type === 'plaintext';

  return (
    <FormGroup className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        {...rest}
        readOnly={readOnly}
        invalid={touched && error}
        valid={touched && validInfo}
        id={id}
      />
      {error && <Feedback invalid={error}>{error}</Feedback>}
      {validInfo && <Feedback valid={validInfo}>{validInfo}</Feedback>}
      {helpText && <HelpText>{helpText}</HelpText>}
      {children}
    </FormGroup>
  );
};

interface FormInputProps extends InputType {
  error?: string | false;
  validInfo?: string | false;
  touched?: boolean;
  label?: string;
  helpText?: string;
  readOnly?: boolean;
  type?: 'text' | 'textarea' | 'date' | 'datetime-local' | 'password' | 'number' | 'email' | string;
}

const FormInput = makeComponent<FormInputProps>('FormInput').create(FormInputBase);

export { FormInput };
