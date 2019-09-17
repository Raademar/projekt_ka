import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    box-sizing: border-box;

}
body {
    background: #fff;
}

h2, h3, h4 {
    padding-left: 20px;
    padding-bottom: 20px;
}

h3 {
    font-size: 24px;
}
.is-active {
    font-weight: bold;
}
`

export default GlobalStyle
