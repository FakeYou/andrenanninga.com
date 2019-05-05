import React from 'react'
import NextHead from 'next/head'

type Props = {
  title?: string
  description?: string
}

const Head: React.FunctionComponent<Props> = ({
  title = 'André Nanninga',
  description = '',
}) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/static/favicon.ico" />

    <link
      href="https://fonts.googleapis.com/css?family=Asap:400,600"
      rel="stylesheet"
    />
  </NextHead>
)

export default Head
