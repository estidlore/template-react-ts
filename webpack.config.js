const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const prod = process.env.NODE_ENV === "production";

function src(subdir) {
  return path.join(__dirname, "src", subdir);
}

module.exports = {
  resolve: {
    alias: {
      components: src("components"),
      styles: src("styles"),
      tests: src("tests"),
      utils: src("utils"),
      views: src("views"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  devtool: prod ? undefined : "source-map",
  entry: "./src/index.tsx",
  mode: prod ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".ts", ".tsx"],
        },
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ]
  },
  output: {
    path: __dirname + "/dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
