import styled from 'styled-components'

export const FilterWrapper = styled.div`
  margin: 0 ${props => (props.addMargin ? '20px' : 0)};
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  div {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
`
