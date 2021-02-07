import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { merge } from 'webpack-merge';

import common from "./webpack.common.config";

const config: webpack.Configuration = merge(common(false), {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
      template: "src/index.html",
      favicon: "src/favicon.ico"
    }),
    new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
  ],
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "build"),
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true,
  },
});

export default config;
