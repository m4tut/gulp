const path = require('path');

module.exports = {
  entry: {
    main: './src/js/main.js',
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/',
  },

  resolve: {
    alias: {
      '%modules%': path.resolve(__dirname, 'src/blocks/modules'),
      '%components%': path.resolve(__dirname, 'src/blocks/components'),
      '@': path.resolve(__dirname, 'src'),
    },
  },

  mode: 'development',
};
