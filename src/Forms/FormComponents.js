import { makeComponent } from '../core/ruleEngine';

const Feedback = makeComponent('Feedback')
  .props(({ invalid, valid }) => ({
    color: invalid ? 'danger' : valid ? 'success' : 'initial'
  }))
  .classNames(({ invalid, valid }) => ({
    'invalid-feedback': invalid,
    'valid-feedback': valid
  }))
  .create();

const HelpText = makeComponent('HelpText')
  .props({ muted: true })
  .classNames(({ muted }) => ({
    'form-text': true,
    'text-muted': muted
  }))
  .create('small');

const FormGroup = makeComponent('FormGroup')
  .classNames('form-group')
  .create();

const Input = makeComponent('Input')
  .classNames(props => ({
    'form-control': props.type !== 'plaintext',
    'is-invalid': props.invalid,
    'is-valid': props.valid,
    'form-control-plaintext': props.type === 'plaintext'
  }))
  .create('input');

const Label = makeComponent('Label')
  .classNames('label')
  .create();

export { Feedback, HelpText, FormGroup, Input, Label };
