import styled from 'styled-components'

const MenuStyle = styled.div`
  background-color: ${props => props.theme.colors.darkgrey};
  position: fixed;
  top: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  color: ${props => props.theme.colors.white[1]};
  padding: 20px;

  h2:first-of-type {
    font-weight: bold;
  }

  h2 {
    font-weight: normal;
    margin-bottom: 20px;
  }

  svg {
    align-self: flex-end;
  }
`

export default MenuStyle
