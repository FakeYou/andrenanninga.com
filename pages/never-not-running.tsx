import React from 'react'
import dynamic from 'next/dynamic'

const NeverNotRunning = dynamic(() => import('../projects/never-not-running'), {
  ssr: false,
})

const NeverNotRunningPage = () => <NeverNotRunning />

export default NeverNotRunningPage
