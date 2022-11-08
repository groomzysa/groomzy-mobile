const path = require('path');

const appDirectory = path.resolve(__dirname, '../')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(jsx|js|tsx|ts)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
            plugins: ["react-native-web",  "react-native-reanimated/plugin"]
          },
        },
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(ttf)$/,
        loader: 'url-loader',
        include: path.resolve(appDirectory, "node_modules/react-native-vector-icons"),
      },
    ],
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
  },
};
