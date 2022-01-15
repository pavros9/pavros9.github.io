const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { extendDefaultPlugins } = require("svgo");
const Webpack = require("webpack");

let mode = "development";
if (process.env.NODE_ENV === "production") {
  mode = "production";
}

console.log(mode + " mode");
module.exports = {
  target: mode === "development" ? "web" : "browserslist",
  mode: mode,
  output: {
    filename: "js/[name].[contenthash].js",
    clean: true,
  },
  devtool: "source-map",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  entry: {
    app: "./src/index.js",
  },
  target: "web",
  devServer: {
    hot: true,
    open: true,
    watchFiles: ["src/**/*"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `css/[name].[contenthash].css`,
    }),
    new HTMLWebpackPlugin({
      template: "./src/pages/index.pug",
      inject: "body",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          mode === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // options
                    },
                  ],
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: mode === "development" ? "images/[name][ext]" : "images/[hash][ext][query]",
        },
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: mode === "development" ? "fonts/[name][ext]" : "fonts/[hash][ext][query]",
        },
      },
      {
        test: /\.pug$/i,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "pug-html-loader",
            options: {
              exports: false,
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      // We recommend using only for the "production" mode
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: ["imagemin-gifsicle", "imagemin-mozjpeg", "imagemin-pngquant", "imagemin-svgo"],
          },
        },
        // Disable `loader`
        loader: false,
      }),
    ],
  },
};
