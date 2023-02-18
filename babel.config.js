const tsconfig = require('./tsconfig.json')
let rawAlias = tsconfig.compilerOptions.paths
let alias = {}

for (let x in rawAlias) {
  alias[x.replace('/*', '')] = rawAlias[x].map((p) => p.replace('/*', ''))
}

module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      require.resolve('expo-router/babel'),
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs', '.json'],
          alias
        }
      ]
    ]
  }
}
