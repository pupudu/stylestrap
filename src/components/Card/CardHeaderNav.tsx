import { makeComponent } from '../../core';
import { Nav } from '../Navs';

export const CardHeaderTabs = makeComponent('CardHeaderTabs')
  .classNames('card-header-tabs')
  .props({
    tabs: true,
  })
  .create(Nav);
