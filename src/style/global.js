import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    box-sizing: border-box;

}
body {
    background: #fff;
}



p {
    margin: 20px 0;
    line-height: 124%;

h2, h4 {
    padding-left: 20px;
    padding-bottom: 20px;
}
h3 {
    margin: 20px 0;
    font-size: 24px;
    font-weight: normal;
}
.is-active {
    font-weight: bold;
}
}
`
export default GlobalStyle
