// eslint-disable: @typescript-eslint/no-var-requires
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const withTypescript = require('@zeit/next-typescript')
const withMDX = require('@zeit/next-mdx')()

const { ANALYZE } = process.env

module.exports = withMDX(
  withTypescript({
    webpack: (config, { isServer }) => {
      if (ANALYZE) {
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerPort: isServer ? 8888 : 8889,
            openAnalyzer: true,
          })
        )
      }

      return config
    },

    pageExtensions: ['js', 'mdx'],
    exportPathMap(defaultPathMap) {
      const pathMap = { ...defaultPathMap }
      delete pathMap['/index']
      return pathMap
    },
  })
)
