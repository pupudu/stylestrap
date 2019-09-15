import { css } from 'docz-plugin-css';

export default {
  onCreateWebpackChain: (config) => {
    // Allow SCSS imports
    config.module
      .rule('scss')
      .test(/\.css|scss|sass$/)
      .use('style')
      .loader('style-loader')
      .end()
      .use('css')
      .loader('css-loader')
      .end()
      .use('sass')
      .loader('sass-loader')
      .end();
  },
  wrapper: 'docs/Provider',
  menu: ['Introduction', 'Layout', 'Components', 'Themes'],
  typescript: true,
};
