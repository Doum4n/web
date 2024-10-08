const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './frontend/src/index.js'), // Cập nhật đường dẫn đến entry
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './frontend/dist'), // Cập nhật đường dẫn đến output
    clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, './frontend/dist'), // Cập nhật đường dẫn đến thư mục tĩnh
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './frontend/public/index.html'), // Cập nhật đường dẫn đến template
    }),
  ],
};
