import styled from 'styled-components'

export const StyledFeaturedClipList = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin-bottom: 20px;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }

  a {
    color: black;
    text-decoration: none;
  }
  div:first-of-type {
    margin-right: 5px;
    padding-left: 0px;
  }
  div {
    margin: 0 5px;
  }
`
