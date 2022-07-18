const { defaults } = require('jest-config');

module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['./jest-setup.js'],
  moduleFileExtensions: [...defaults.moduleFileExtensions],
  transform: {
    '\\.(jpg|jpeg|png|PNG|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      './jest/transform/fileTransformer.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|react-native-reanimated|rollbar-react-native|@fortawesome|@react-native|@react-navigation|@react-native-gesture-handler|react-native-gesture-handler)',
  ],
  preset: 'react-native',
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
};
