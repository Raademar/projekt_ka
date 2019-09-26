import styled from 'styled-components'

export const StyledFooter = styled.div`
  width: 100vw;
  height: 172px;
  background: #323332;
  display: flex;
  flex-direction: row;
  margin-top: 80px;
  padding: 0 30px;

  div:first-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 67px;
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
    svg:nth-child(4),
    svg:nth-child(8) {
      margin-right: 0;
    }
  }
`
