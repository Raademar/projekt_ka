import styled from 'styled-components'
export const Wrapper = styled.div`
  /* margin: 70px 20px 0 20px; */
  margin: 70px ${props => (props.noMargin ? '0' : '20px')} 0
    ${props => (props.noMargin ? '0' : '20px')};
  h3 {
    text-transform: capitalize;
  }
`
