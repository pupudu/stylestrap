import React from 'react';
import { FormGroup, Label, Feedback, HelpText } from './FormComponents';
import { Select } from './ReactSelect';
import { makeComponent } from '../../core/ruleEngine';

const FormSelectBase = props => {
  const { id, label, helpText, className, ...rest } = props;
  const error = (props.error || {}).value;
  const touched = (props.touched || {}).value;

  return (
    <FormGroup className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Select id={id} invalid={touched && error} {...rest} />
      {error && <Feedback invalid={error}>{error}</Feedback>}
      {helpText && <HelpText>{helpText}</HelpText>}
    </FormGroup>
  );
};

type FormSelect = {
  id: string;
  label: string;
  onChange: Function;
  onBlur: Function;
  value: {
    label: string;
    value: any;
  };
  error: {
    label: string;
    value: string;
  };
  touched: {
    label: boolean;
    value: boolean;
  };
  helpText: string;
  options: {
    label: string;
    value: any;
  }[];
};

const FormSelect: React.FC<FormSelect> = makeComponent('FormSelect').create(FormSelectBase);

export { FormSelect };
