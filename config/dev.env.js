'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_1: '"https://api.douban.com"',
  API_2: '"https://www.apiopen.top"', 
})
