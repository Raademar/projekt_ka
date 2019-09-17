import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    box-sizing: border-box;
    font-family: Georgia, 'Times New Roman', Times, serif;

}
body {
    background: #fff;
}

h3 {
    margin: 20px 0;
    font-size: 24px;
    font-weight: normal;
}

p {
    margin: 20px 0;
    line-height: 124%;
}
`

export default GlobalStyle
