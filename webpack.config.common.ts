import path from 'path';
import webpack from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@/hooks': path.resolve(__dirname, 'src', 'hooks'),
      '@/components': path.resolve(__dirname, 'src', 'components')
    },
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    //@ts-ignore
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: path.join(__dirname, 'src', 'index.html')
    }),
    new webpack.EnvironmentPlugin({
      SOCKET_SERVER_HOST: process.env.SOCKET_SERVER_HOST,
      GIPHY_API_KEY: process.env.GIPHY_API_KEY
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          }
        }
      }
    ]
  }
};

export default config;
