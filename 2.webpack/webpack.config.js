const path = require('path')
const webpack = require('webpack')
const base = require('./webpack.base')
const merge = require('webpack-merge')
const NODE_ENV = process.env.NODE_ENV
let other
if (NODE_ENV === 'development') {
  other = require('./webpack.dev.config')
} else {
  other= require('./webpack.prod.config')
}
module.exports = merge(base, other)