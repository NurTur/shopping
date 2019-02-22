const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;

const APP_DIR = path.resolve(__dirname, "../client"); // <===== new stuff added here

module.exports = env => {
  const { PLATFORM, VERSION } = env;
  return merge([
    {
      entry: ["@babel/polyfill", APP_DIR], // <===== new stuff added here
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.vue$/,
            use: 'vue-loader'
          },
          {
            test: /\.scss$/,
            use: [
              PLATFORM === "production"
                ? MiniCssExtractPlugin.loader
                : "vue-style-loader",
              "css-loader",
              "sass-loader"
            ]
          }
        ]
      },
      devServer: {
        historyApiFallback: true
      },
      plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
          template: "./client/index.html",
          filename: "./index.html"
        }),
        new webpack.DefinePlugin({
          "process.env.VERSION": JSON.stringify(env.VERSION),
          "process.env.PLATFORM": JSON.stringify(env.PLATFORM)
        }),
        new CopyWebpackPlugin([{ from: "client/static" }]),
        new ImageminPlugin({
          test: /\.jpg$/
        })
      ]
    }
  ]);
};
