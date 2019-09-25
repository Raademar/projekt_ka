import styled from 'styled-components'

export const StyledSrcResultCard = styled.div`
  display: flex;
  background: ${props => props.theme.colors.darkgrey};
  color: white;
  padding: 10px;
  margin-bottom: 10px;

  img {
    width: 77px;
    height: 77px;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h5 {
    align-self: center;
    width: 50%;
    margin: 0 15px 0 12px;
    font-size: 12px;
  }

  p {
    text-align: right;
    margin: 0;
    font-size: 12px;
  }
`
