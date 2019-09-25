import styled from 'styled-components'
export const Wrapper = styled.div`
  margin: 70px ${props => (props.noMargin ? '0' : '24px')} 0
    ${props => (props.noMargin ? '0' : '24px')};
  h3 {
    text-transform: capitalize;
  }
`
