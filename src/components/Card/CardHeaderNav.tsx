import { makeComponent } from '../../core';
import { Nav } from '../Navs';

export const CardHeaderNav = makeComponent('CardHeaderNav')
  .classNames(props => ({
    'card-header-tabs': props.tabs,
    'card-header-pills': props.pills,
  }))
  .create(Nav);
