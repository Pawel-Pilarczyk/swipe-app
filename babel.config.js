module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'babel-plugin-module-resolver',
      {
        extensions: ['.js', '.ios.js', '.android.js', '.json', 'ts', 'tsx'],
        alias: {
          src: './src',
        },
      },
    ],
    ['babel-plugin-inline-import'],
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv',
        path: '.env',
        safe: true,
        allowUndefined: false,
      },
    ],
  ],
};
