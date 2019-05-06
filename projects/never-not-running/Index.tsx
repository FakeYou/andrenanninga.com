import React from 'react'

import { H1 } from '../../components/Typography'
import Marathon from './components/Marathon'
import DistanceVTime from './components/DistanceVTime'

import pragueMarathon from './data/marathons/prague.json'

const activities = require('./data/runs.json') as Activity[]

const NeverNotRunning = () => (
  <>
    <H1>Running</H1>
    {/* <Marathon run={pragueMarathon} /> */}
    <DistanceVTime activities={activities} />
  </>
)

export default NeverNotRunning
