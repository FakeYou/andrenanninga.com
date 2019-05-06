import React from 'react'
import Marathon from './components/Marathon'
import pragueMarathon from './data/prague-marathon.json'
// import kosiceMarathon from './data/kosice-marathon.json'

import { H1 } from '../../components/Typography'

const NeverNotRunning = () => (
  <>
    <H1>Running</H1>
    <Marathon run={pragueMarathon} />
  </>
)

export default NeverNotRunning
