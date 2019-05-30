import classNames from 'classnames';
import ReactSelect from 'react-select';
import { withStyles } from '../core/ruleEngine';

const Select = withStyles(
  [
    'Select',
    ({ invalid, valid }) =>
      classNames({
        'form-control': true,
        'is-invalid': invalid,
        'is-valid': valid
      })
  ],
  () => ({
    padding: 0,
    height: 'auto'
  }),
  ({
    id,
    onChange = () => undefined,
    onBlur = () => undefined,
    name,
    ...rest
  }) => ({
    styles: {
      control: provided => ({
        ...provided,
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
    },
    name,
    id,
    ...rest
  })
)(ReactSelect);

export { Select };
