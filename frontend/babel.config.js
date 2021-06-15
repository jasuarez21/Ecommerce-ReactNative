module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: ['URL_MOTOS', 'URL_LOGIN', 'URL_LOGOUT', 'URL_SIGNUP'],
        safe: false,
        allowUndefined: true,
      },
    ],
  ],
};

