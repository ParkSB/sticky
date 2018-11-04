const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/ts/App.tsx',
  output: {
    path: path.resolve(__dirname, './dist/src/'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, './dist/'),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      }, {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      }, {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ]
      }
    ],
  },
  devtool: 'source-map',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.webpack.js', '.web.js', '.js', '.json', 'jsx', 'css', '.ts', '.tsx'],
  },
  node: {
    console: false,
    global: true,
    process: true,
    Buffer: true,
    setImmediate: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: path.join(__dirname, './public/'),
      to: path.join(__dirname, './dist/'),
    }]),
  ],
};
