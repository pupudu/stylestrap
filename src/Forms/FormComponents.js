import { withStyles } from '../core/ruleEngine';
import classNames from 'classnames';

const Feedback = withStyles(
  [
    'Feedback',
    ({ invalid, valid }) =>
      classNames({
        'invalid-feedback': invalid,
        'valid-feedback': valid
      })
  ],
  ({ invalid, valid }) => ({
    color: invalid ? 'danger' : valid ? 'success' : 'initial'
  })
)();

const HelpText = withStyles([
  'HelpText',
  ({ muted }) =>
    classNames({
      'form-text': true,
      'text-muted': muted
    })
])('small');

HelpText.defaultProps = {
  muted: true
};

const FormGroup = withStyles(['FormGroup', 'form-group'])();

const Input = withStyles([
  'Input',
  ({ invalid, valid, type = '' }) =>
    classNames({
      'form-control': type !== 'plaintext',
      'is-invalid': invalid,
      'is-valid': valid,
      'form-control-plaintext': type === 'plaintext'
    })
])('input');

const Label = withStyles(['Label', 'label'])();

export { Feedback, HelpText, FormGroup, Input, Label };
