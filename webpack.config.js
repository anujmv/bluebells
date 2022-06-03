const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Critters = require("critters-webpack-plugin");

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
      inject: "body",
      filename: "index.html", //relative to root of the application
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: "About",
      template: "./src/about.html",
      inject: "body",
      filename: "about.html", //relative to root of the application
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: "About",
      template: "./src/our-spaces.html",
      inject: "body",
      filename: "our-spaces.html", //relative to root of the application
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: "About",
      template: "./src/contact.html",
      inject: "body",
      filename: "contact.html", //relative to root of the application
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: "Our Policy",
      template: "./src/our-policy.html",
      inject: "body",
      filename: "our-policy.html", //relative to root of the application
    }),
    new MiniCssExtractPlugin(),
    new Critters({
      // Outputs: <link rel="preload" onload="this.rel='stylesheet'">
      preload: "js-lazy",

      // Don't inline critical font-face rules, but preload the font URLs:
      preloadFonts: true,
    }),
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
