import React from 'react'
import { StyledTitle } from './style'
const ResultPageTitle = props => {
  return (
    <StyledTitle>
      <h3>{props.title}</h3>
      <h4>{props.subtitle}</h4>
    </StyledTitle>
  )
}

export default ResultPageTitle
