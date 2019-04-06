import React from 'react'
import NextDocument from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { TypographyStyle, GoogleFont } from 'react-typography'
import Head from '../components/head'
import { GlobalStyle } from '../styles/global'
import typography from '../styles/typography'

export default class MyDocument extends NextDocument {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await NextDocument.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            <Head />
            {initialProps.styles}
            {sheet.getStyleElement()}
            <TypographyStyle typography={typography} />
            <GoogleFont typography={typography} />
            <GlobalStyle />
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
