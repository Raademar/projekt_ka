import styled from 'styled-components'
export const Wrapper = styled.div`
  /* margin: 0 20px; */
  margin: 0 ${props => (props.noMargin ? '0' : '20px')};
  h3 {
    text-transform: capitalize;
  }
`
