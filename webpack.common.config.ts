/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import webpack from "webpack";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import svgToMiniDataURI from "mini-svg-data-uri";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config = (isEnvProduction: boolean): webpack.Configuration => {
  const getStyleLoaders = (preProcessor?: string) => {
    // never change order push loader
    const loaders = [];
    if (!isEnvProduction) {
      loaders.push('style-loader');
    }
    if (isEnvProduction) {
      loaders.push({
        loader: MiniCssExtractPlugin.loader,
        // css is located in `static/css`, use '../../' to locate index.html folder
        options: { publicPath: '../../' },
      })
    }
    loaders.push('css-loader')
    if (preProcessor) {
      loaders.push(preProcessor)
    }
    return loaders;
  }
  return {
    entry: "./src/index.tsx",
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/i,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        },
        {
          test: /\.css$/i,
          use: getStyleLoaders(),
        },
        {
          test: /\.s[ac]ss$/i,
          use: getStyleLoaders('sass-loader'),
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: "asset",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.svg/,
          type: 'asset/inline',
          generator: {
            dataUrl: (content: any): string => {
              content = content.toString();
              return svgToMiniDataURI(content);
            }
          }
        }
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        async: false,
      }),
      new ESLintPlugin({
        extensions: ["js", "jsx", "ts", "tsx"],
      }),
    ],
  }
};

export default config;
