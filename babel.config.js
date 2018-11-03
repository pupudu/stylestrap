const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        esmodules: true
      }
    }
  ],
  '@babel/preset-react'
];

const plugins = ['@babel/plugin-proposal-object-rest-spread'];

module.exports = { presets, plugins };
