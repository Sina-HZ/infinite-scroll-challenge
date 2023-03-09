const path = require("path");
const paths = require("./webpack/paths");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
  devServer: {
    port: 3033,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[path]__[name]__[local]",
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: [paths.stylesEntry],
              },
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        use: [
          "@svgr/webpack",
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: paths.imagesOutPut,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "@api": path.join(paths.appEntry, "api"),
      "@imgAssets": path.join(paths.appEntry, "assets/img"),
      "@fontsAssets": path.join(paths.appEntry, "assets/fonts"),
      "@views": path.join(paths.appEntry, "views"),
      "@sharedComponents": path.join(paths.appEntry, "shared-components"),
      "@utils": path.join(paths.appEntry, "utils"),
      "@constants": path.join(paths.appEntry, "constants"),
      "@styles": path.join(paths.appEntry, "styles"),
      "@store": path.join(paths.appEntry, "store"),
      "@routes": path.join(paths.appEntry, "routes"),
    },
    extensions: ["", ".js", ".jsx"],
  },
};
