import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Feedback, HelpText } from './FormComponents';
import { Select } from './ReactSelect';
import { makeComponent } from '../core/ruleEngine';

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

const FormSelect = makeComponent('FormSelect').create(FormSelectBase);

FormSelect.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.any
  }),
  error: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  }),
  touched: PropTypes.shape({
    label: PropTypes.bool,
    value: PropTypes.bool
  }),
  helpText: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any
    })
  )
};

export { FormSelect };
