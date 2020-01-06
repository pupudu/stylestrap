import * as React from 'react';
import * as SS from '../../core/SS';
import { StyledBase, makeComponent } from '../../core';

export const Form = makeComponent('form').create('form');

export const Feedback = makeComponent('Feedback')
  .props(({ invalid, valid }) => ({
    color: invalid ? 'danger' : valid ? 'success' : 'initial',
  }))
  .classNames(({ invalid, valid }) => ({
    'invalid-feedback': invalid,
    'valid-feedback': valid,
  }))
  .create();

export const HelpText = makeComponent('HelpText')
  .props({ muted: true })
  .classNames(({ muted }) => ({
    'form-text': true,
    'text-muted': muted,
  }))
  .create('small');

export const FormGroup = makeComponent('FormGroup')
  .classNames(props => ({
    'form-group': props.type !== 'checkbox',
    'form-check': props.type === 'checkbox',
  }))
  .create();

interface InputPropsBase extends StyledBase {
  type?: 'text' | 'plaintext' | 'checkbox' | 'file' | 'textarea' | 'email' | 'password' | string;
  valid?: boolean;
  invalid?: boolean;
  scale?: 'sm' | 'lg';
}

interface TextAreaProps extends SS.TextArea, InputPropsBase {}
interface InputProps extends SS.Input, InputPropsBase {
  plaintext?: boolean;
}

export const Input: React.FC<InputProps | TextAreaProps> = makeComponent('Input')
  .props(props => ({
    as: props.type === 'textarea' && 'textarea',
  }))
  .classNames(props => ({
    'form-control': !['checkbox', 'file', 'plaintext'].includes(props.type) && !props.plaintext,
    'form-control-lg': props.scale === 'lg',
    'form-control-sm': props.scale === 'sm',
    'form-control-plaintext': props.type === 'plaintext',
    'form-check-input': props.type === 'checkbox',
    'form-control-file': props.type === 'file',
    'is-invalid': props.invalid,
    'is-valid': props.valid,
  }))
  .create('input');

export const Select = makeComponent('Select')
  .classNames(props => ({
    'form-control': true,
    'form-control-lg': props.scale === 'lg',
    'form-control-sm': props.scale === 'sm',
    'is-invalid': props.invalid,
    'is-valid': props.valid,
  }))
  .create('select');

export const Label = makeComponent('Label')
  .classNames(props => ({
    label: true,
    'form-check-label': props.type === 'checkbox',
  }))
  .create('label');
