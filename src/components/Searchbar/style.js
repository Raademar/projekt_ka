import styled from 'styled-components'

export const SearchbarStyled = styled.div`
  width: 100vw;
  margin: 50px 0 30px 0;

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
  padding: 2px;

  font-size: 1.5em;

  &:focus {
    outline: none;
  }
`
