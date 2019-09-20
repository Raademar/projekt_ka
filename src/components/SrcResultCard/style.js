import styled from 'styled-components'

export const StyledSrcResultCard = styled.div`
  display: flex;
  background: ${props => props.theme.colors.darkgrey};
  color: white;
  padding: 10px;
  font-size: 12px;

  img {
    width: 77px;
    height: 77px;
    object-fit: cover;
  }

  h5 {
    width: 50%;
    margin: 0 15px 0 12px;
  }

  p {
    text-align: right;
    margin: 0;
  }
`
