import styled from 'styled-components'

export const StyledFeaturedClip = styled.div`
  flex: 0 0 auto;
  width: 125px;
  height: auto;
  background-image: url(${props => props.backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  img {
    width: 125px;
    height: 125px;
    object-fit: cover;
  }

  p {
    margin: 0;
  }
`
