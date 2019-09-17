import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    box-sizing: border-box;

}
body {
    background: #fff;
}

.is-active {
    font-weight: bold;
}
`

export default GlobalStyle
