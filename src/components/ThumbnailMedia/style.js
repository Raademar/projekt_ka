import styled from 'styled-components'

export const StyledThumbnailMedia = styled.div`
  display: flex;
  background: ${props =>
    props.color ? 'white' : props.theme.colors.lightgrey};
  /* background: ${props => props.theme.colors.lightgrey}; */
  padding: ${props => (props.color ? '0' : '20px')};
  flex-direction: column;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 170px;
  }

  h2 {
    font-size: 18px;
    margin-top: 10px;
  }

  p:first-of-type {
    margin-top: 20px;
  }
  p {
    margin: 0;
  }
`
