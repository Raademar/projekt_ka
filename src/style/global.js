import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    box-sizing: border-box;

}
body {
    background: #fff;
    font-family: ${props => props.theme.fonts[1]};
}

button {
    background-color: transparent;
    border: 0;
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
    display: none;
    font-weight: bold;
    background: red;
}
}
`
export default GlobalStyle
