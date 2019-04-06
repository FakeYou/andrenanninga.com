import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
  }

  #__next {
    padding: 30px;
    max-width: 700px
  }
`

export { GlobalStyle }
