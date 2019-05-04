/* eslint-disable @typescript-eslint/no-var-requires */

function getServerPhase() {
  if (process.env.NODE_ENV === 'development') {
    return null
  }

  if (process.env.NOW_REGION) {
    return require('next/constants').PHASE_PRODUCTION_SERVER
  }

  return require('next-server/constants').PHASE_PRODUCTION_SERVER
}

module.exports = phase => {
  if (phase === getServerPhase()) {
    return {}
  }

  const withTypescript = require('@zeit/next-typescript')

  return withTypescript({
    target: 'serverless',
  })
}
