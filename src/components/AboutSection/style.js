import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 20px;
  color: white;
  background: ${props => props.theme.colors.lightgrey};

  div {
    padding: 40px 40px;
    background: ${props => props.theme.colors.darkgrey};
  }

  h2:first-of-type {
    font-family: ${props => props.theme.fonts[0]};
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  h2 {
    font-family: ${props => props.theme.fonts[1]};
    font-weight: normal;
    margin-bottom: 40px;
  }

  span {
    font-weight: bold;
  }
`
