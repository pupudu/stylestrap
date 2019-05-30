import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Feedback, HelpText, Input, Label } from './FormComponents';
import { withStyles } from '../core/ruleEngine';

const FormInputBase = props => {
  const {
    error,
    touched,
    label,
    id,
    helpText,
    className,
    children,
    ...rest
  } = props;

  const type = (props.type || '').toLowerCase();
  const readOnly = props.readOnly || type === 'plaintext';

  return (
    <FormGroup className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input {...rest} readOnly={readOnly} invalid={touched && error} id={id} />
      {error && <Feedback invalid={error}>{error}</Feedback>}
      {helpText && <HelpText>{helpText}</HelpText>}
      {children}
    </FormGroup>
  );
};

const FormInput = withStyles('FormInput')(FormInputBase);

FormInput.propTypes = {
  error: PropTypes.string,
  touched: PropTypes.bool,
  label: PropTypes.string,
  helpText: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export { FormInput };
