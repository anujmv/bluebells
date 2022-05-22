const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
module.exports = {
  entry: ["./src/index.js"],
  watch: true,
  mode: "development",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "Home",
      template: "./src/index.html",
      filename: "index.html", //relative to root of the application
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: "About",
      template: "./src/about.html",
      filename: "about.html", //relative to root of the application
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: "About",
      template: "./src/our-spaces.html",
      filename: "our-spaces.html", //relative to root of the application
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: "About",
      template: "./src/contact.html",
      filename: "contact.html", //relative to root of the application
    }),
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: "[name].js",
    clean: true,
    publicPath: "/bluebells",
  },
  optimization: {
    runtimeChunk: "single",
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        // options: {
        //   // Disables attributes processing
        //   sources: false,
        // },
      },
    ],
  },
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        generator: [
          {
            // You can apply generator using `?as=webp-100-50`, you can use any name and provide more options
            preset: "webp",
            implementation: ImageMinimizerPlugin.squooshGenerate,
            options: {
              encodeOptions: {
                resize: {
                  enabled: true,
                  width: 100,
                  height: 50,
                },
                webp: {
                  quality: 90,
                },
              },
            },
          },
          {
            // You can apply generator using `?as=webp-100-50`, you can use any name and provide more options
            preset: "webp-400-300",
            implementation: ImageMinimizerPlugin.squooshGenerate,
            options: {
              encodeOptions: {
                resize: {
                  enabled: true,
                  width: 100,
                  height: 50,
                },
                webp: {
                  quality: 90,
                },
              },
            },
          },
        ],
      }),
    ],
  },
};
