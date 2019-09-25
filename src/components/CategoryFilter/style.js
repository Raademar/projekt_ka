import styled from 'styled-components'

export const StyledCategoryFilter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
  div {
    margin-bottom: 12px;
    /* margin: 5px;
    padding: 13px; */
    h5 {
      margin: 0;
      text-transform: uppercase;
      font-size: 14;
    }
  }

  div:nth-child(2),
  div:nth-child(4),
  div:nth-child(6),
  div:nth-child(8) {
    margin-right: 0;
    margin-left: 12px;
  }
`
