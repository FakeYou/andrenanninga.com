import React from 'react'
import Marathon from './Marathon'
import pragueMarathon from './data/prague-marathon.json'
import kosiceMarathon from './data/kosice-marathon.json'

const Running = () => (
  <>
    <h1>Running</h1>
    <Marathon run={pragueMarathon} />
    <Marathon run={kosiceMarathon} />
  </>
)

export default Running
