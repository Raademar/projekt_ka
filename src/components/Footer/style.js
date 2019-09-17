import styled from 'styled-components'

export const StyledFooter = styled.div`
  width: 100vw;
  height: 172px;
  background: #323332;
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  div:first-of-type {
    width: 40vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div:last-of-type {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 60vw;
    justify-content: center;
    align-content: center;
    svg {
      margin: 12px;
    }
  }
`
