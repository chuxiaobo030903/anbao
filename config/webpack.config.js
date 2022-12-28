const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const productionConfig = require('./webpack.config.prod')
const developmentConfig = require('./webpack.config.dev')
// TODO 用户自定义webapck配置

module.exports = (env) => {
  switch(true) {
    case env.development:
      return merge(baseConfig, developmentConfig)
    case env.production:
      return merge(baseConfig, productionConfig)
    defult:
      return new Error('No matching configuration was found')
  }
}
