module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        'paths': [
          {
            'rootPathSuffix': './src/navigation',
            'rootPathPrefix': '_navigation'
          },
          {
            'rootPathSuffix': './src/screens',
            'rootPathPrefix': '_screens'
          },
          {
            'rootPathSuffix': './src/components',
            'rootPathPrefix': '_components'
          },
          {
            'rootPathSuffix': './src/store',
            'rootPathPrefix': '_store'
          },
          {
            'rootPathSuffix': './src/services',
            'rootPathPrefix': '_services'
          },
          {
            'rootPathSuffix': './src/colors',
            'rootPathPrefix': '_colors'
          }
        ]
      }
    ]
  ]
};
