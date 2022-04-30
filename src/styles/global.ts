import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Radio Canada', sans-serif;
  }
  body {
    background-color: #858585;
  }
`

export default GlobalStyle
