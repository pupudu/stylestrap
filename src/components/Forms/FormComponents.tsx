import { makeComponent } from '../../core';

const Feedback = makeComponent('Feedback')
  .props(({ invalid, valid }) => ({
    color: invalid ? 'danger' : valid ? 'success' : 'initial',
  }))
  .classNames(({ invalid, valid }) => ({
    'invalid-feedback': invalid,
    'valid-feedback': valid,
  }))
  .create();

const HelpText = makeComponent('HelpText')
  .props({ muted: true })
  .classNames(({ muted }) => ({
    'form-text': true,
    'text-muted': muted,
  }))
  .create('small');

const FormGroup = makeComponent('FormGroup')
  .classNames('form-group')
  .create();

const Input = makeComponent('Input')
  .classNames(props => ({
    'form-control': props.type !== 'plaintext',
    'form-control-plaintext': props.type === 'plaintext',
    'is-invalid': props.invalid,
    'is-valid': props.valid,
  }))
  .create('input');

const Select = makeComponent('Select')
  .classNames(props => ({
    'form-control': true,
    'is-invalid': props.invalid,
    'is-valid': props.valid,
  }))
  .create('select');

const Label = makeComponent('Label')
  .classNames('label')
  .create();

export { Feedback, HelpText, FormGroup, Input, Label, Select };
