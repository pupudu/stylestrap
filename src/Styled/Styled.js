import { withStyles } from '../core/ruleEngine/withStyles';

const Styled = withStyles('Styled', undefined, props => {
  const { className, as, children, css, style, ...rest } = props;

  return {
    className,
    as,
    children,
    style,
    css: {
      ...css,
      ...rest
    }
  };
})();

export { Styled };
