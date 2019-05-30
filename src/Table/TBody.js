import T from 'prop-types';
import { withStyles } from '../core/ruleEngine';

const TBody = withStyles(['TBody', ''], props => {
  return {}; // TODO change colors based on props
})('tbody');

TBody.propTypes = {};

export { TBody };
