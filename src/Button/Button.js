import styled from 'styled-components';
import { withBrand } from '../core/ruleEngine';

const Button = withBrand('Button')(styled.button`
  text-decoration: none;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  appearance: none;
  outline: 0;
  &:disabled {
    cursor: not-allowed;
  }
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  margin-right: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`);

export default Button;
