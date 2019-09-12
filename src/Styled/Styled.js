import { makeComponent } from '../core/ruleEngine';

const Styled = makeComponent('Styled')
  .props(({ className, as, children, css, style, ...rest }) => ({
    className,
    as,
    children,
    style,
    css: { ...css, ...rest }
  }))
  .create();

export { Styled };
