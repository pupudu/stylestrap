import PropTypes from 'prop-types';
import { makeComponent } from '../core/ruleEngine';

const Heading = makeComponent('Heading')
  .classNames('heading')
  .styles(({ size = 'h1' }, theme) => ({
    fontSize: theme.headingSizes[size]
  }))
  .props(({ size = 'h1', as: tag }) => ({
    as: tag || size
  }))
  .create('h1');

Heading.propTypes = {
  size: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};

export { Heading };
