const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  devtool: isDev && 'inline-source-map',
  devServer: {
    contentBase: isDev ? 'public' : 'build',
    hot: isDev && true
  },
  stats: 'minimal',
  entry: './src/index.tsx',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, isDev ? 'public' : 'build')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        enforce: 'pre',
        use: [
          {
            loader: 'tslint-loader'
          }
        ]
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
      inject: true
    })
  ]
};

if (isDev) {
  module.exports.plugins.push(new webpack.HotModuleReplacementPlugin());
} else {
  module.exports.plugins.push(
    new CopyWebpackPlugin([
      {
        from: 'public',
        to: ''
      }
    ])
  );
}
