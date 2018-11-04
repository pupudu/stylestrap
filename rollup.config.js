import pkg from './package.json';
import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';

// eslint-disable-next-line
const babelConfig = require('./babel.config');

const getRollupConfig = ({ pkg, pwd, buildName }) => {
  const SOURCE_DIR = path.resolve(pwd, 'src');
  const DIST_DIR = path.resolve(pwd, 'dist');

  const baseConfig = {
    input: `${SOURCE_DIR}/index.js`,
    plugins: [
      babel({ exclude: '**/node_modules/**', ...babelConfig }),
      resolve({ browser: true }),
      commonjs(),
      postcss()
    ]
  };

  const esConfig = Object.assign({}, baseConfig, {
    output: {
      file: `${DIST_DIR}/${buildName}.es.js`,
      format: 'esm'
    },
    external: [
      ...Object.keys(pkg.peerDependencies),
      ...Object.keys(pkg.dependencies),
      'react-transition-group/Transition'
    ]
  });

  const cjsConfig = Object.assign({}, esConfig, {
    output: {
      file: `${DIST_DIR}/${buildName}.cjs.js`,
      format: 'cjs'
    }
  });

  const globals = {
    classnames: 'classNames',
    polished: 'polished',
    'prop-types': 'PropTypes',
    'emotion-theming': 'emotionTheming',
    emotion: 'emotion',
    react: 'React',
    'react-dom': 'ReactDom',
    'react-emotion': 'reactEmotion',
    'styled-components': 'styled'
  };

  const umdConfig = Object.assign({}, baseConfig, {
    output: {
      name: 'smoothUI',
      file: `${DIST_DIR}/${buildName}.js`,
      format: 'umd',
      globals,
      exports: 'named',
      sourcemap: false
    },
    external: Object.keys(globals),
    plugins: [...baseConfig.plugins]
  });

  const minConfig = Object.assign({}, umdConfig, {
    output: {
      ...umdConfig.output,
      file: `${DIST_DIR}/${buildName}.js`
    },
    plugins: [
      ...umdConfig.plugins,
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      uglify({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false
        }
      })
    ]
  });

  if (process.env.WATCH_MODE) {
    return [esConfig];
  }

  return [umdConfig, esConfig, cjsConfig];
};

export default getRollupConfig({
  pwd: __dirname,
  buildName: 'index',
  pkg
});
