const {
  override,
  addWebpackAlias,
  useEslintRc
} = require('customize-cra')
const path = require('path')

module.exports = override(
  // 注意，一定要用 path.resolve 引入eslint的配置文件，否则不生效
  useEslintRc(path.resolve(__dirname, './.eslintrc.json')),
  // 配置路径别名
  addWebpackAlias({
    '@': path.resolve(__dirname, './src'),
    '_c': path.resolve(__dirname, './src/components')
  })
)