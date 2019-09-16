import styled from 'styled-components'

export const StyledFeaturedClip = styled.div`
  display: flex;
  flex-direction: column;
  div {
    height: 125px;
    width: 125px;
    background-image: url(${props => props.backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`
