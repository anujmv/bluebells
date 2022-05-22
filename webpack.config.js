const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: ["./src/index.js"],
  // watch: true,
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
    new MiniCssExtractPlugin(),
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: "js/[name].js",
    clean: true,
    publicPath: "/bluebells/",
  },
  optimization: {
    runtimeChunk: "single",
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "img/[hash][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext]",
        },
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
        // options: {
        //   // Disables attributes processing
        //   sources: false,
        // },
      },
    ],
  },
  // optimization: {
  //   minimizer: [
  //     new ImageMinimizerPlugin({
  //       generator: [
  //         {
  //           // You can apply generator using `?as=webp-100-50`, you can use any name and provide more options
  //           preset: "jpg400",
  //           implementation: ImageMinimizerPlugin.squooshGenerate,
  //           options: {
  //             encodeOptions: {
  //               resize: {
  //                 enabled: true,
  //                 width: 100,
  //               },
  //               webp: {
  //                 quality: 90,
  //               },
  //             },
  //           },
  //         },
  //       ],
  //     }),
  //   ],
  // },
};
