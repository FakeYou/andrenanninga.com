import App, { Container as NextContainer, NextAppContext } from 'next/app'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { themeGet } from 'styled-system'
import { theme } from '../theme'
import Container from '../components/Container'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 2rem;
    font-family: ${themeGet('fonts.asap')};
  }
`

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <NextContainer>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <Container>
              <Component {...pageProps} />
            </Container>
          </>
        </ThemeProvider>
      </NextContainer>
    )
  }
}
