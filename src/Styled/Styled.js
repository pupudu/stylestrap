import { withStyles } from '../core/ruleEngine/withStyles';

const Styled = withStyles('Styled', undefined, props => {
  // Clone props and remove the extracted properties from the clone,
  // to make it usable as the css prop
  const propsClone = { ...props };
  function extract(propKey) {
    const prop = propsClone[propKey];
    delete propsClone[propKey];
    return prop;
  }

  const children = extract('children');
  const as = extract('as');
  const className = extract('className');

  return {
    className,
    as,
    children,
    css: propsClone
  };
})();

export { Styled };
