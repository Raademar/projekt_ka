import styled from 'styled-components'

export const StyledThumbnailMedia = styled.div`
  display: flex;
  background: ${props => props.theme.colors.lightgrey};
  padding: 20px;
  flex-direction: column;

  img {
    width: 100%;
    height: 170px;
  }

  h2 {
    margin-top: 10px;
  }

  p:first-of-type {
    margin-top: 20px;
  }
  p {
    margin: 0;
  }
`
