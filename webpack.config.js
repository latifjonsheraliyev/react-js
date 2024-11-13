const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  // mode
  mode: "development", //production
  // entry
  entry: {
    app: path.resolve(__dirname, "./src/app.js"),
    about: path.resolve(__dirname, "./src/about.js"),
    styles: path.resolve(__dirname, "./src/css/style.css"),
  }, //asosiy bundle qilinadigan fileni tanlash.
  // output
  output: {
    //bundle js qaysi papkaga yaratilishi kerakligini belgilash
    path: path.resolve(__dirname, "public"), // bundle qaysi papka ichiga ochilishi kerakligini belgilaydi
    filename: "[name].js", //birlashgan js filelar  joylashadigan file nomini yozish
  },
  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      // title
      title: "webpack 5 ",
      // filename
      filename: "index.html",
      // template
      template: "./src/temp.html",
      // chunks
      chunks: ["app", "styles"],
    }),
    new HtmlWebpackPlugin({
      // title
      title: "About",
      // filename
      filename: "about.html",
      // template
      template: "./src/tempAbout.html",
      // chunks
      chunks: ["about"]
    }),
  ],

  // loaders
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, "public"),
    port: 3000, // serverning portini belgilash, 3000 yoki boshqa portdan foydalanishingiz mumkin
    open: true, // brauzerda avtomatik ochadi
    hot: true, // hot-reloading yoqiladi
    watchFiles: ["src/**/*", "public/**/*"], // kuzatiladigan fayllarni ko'rsatish
  },
};
