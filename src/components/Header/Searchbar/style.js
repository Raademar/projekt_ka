import styled from 'styled-components'

export const SearchbarStyled = styled.div`
  position: relative;
  top: ${props => (props.scroll ? '81px' : '-200px')};
  transition: top 0.6s;
  width: 100vw;
  margin-bottom: 40px;
  padding: 40px 0 20px 0;
  background: #fff;
  z-index: 1;
  /* padding-bottom: 20px; */

  form {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 6vh;
  }
  button {
    position: relative;
    right: 1px;
    background-color: #d0843c;
    border: 0;

    &:focus {
      outline: none;
    }
  }
`
export const Input = styled.input`
  width: 80%;
  background-color: #d0843c;
  border: 0;
  border-radius: 0;
  padding: 2px;

  font-size: 1.5em;

  &:focus {
    outline: none;
  }
`
