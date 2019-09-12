import ReactSelect from 'react-select';
import { makeComponent } from '../core/ruleEngine';

const Select = makeComponent('Select')
  .props(({ id, name, onChange = () => {}, onBlur = () => {} }) => ({
    styles: {
      control: existingStyles => ({
        ...existingStyles,
        border: 'none'
      })
    },
    instanceId: id,
    onChange: data => {
      onChange({
        target: {
          name: name || id,
          value: data
        }
      });
    },
    onBlur: data => {
      onBlur({
        target: {
          name: name || id,
          value: data
        }
      });
    }
  }))
  .classNames(props => ({
    'form-control': true,
    'is-invalid': props.invalid,
    'is-valid': props.valid
  }))
  .styles({
    padding: 0,
    height: 'auto'
  })
  .create(ReactSelect);

export { Select };
