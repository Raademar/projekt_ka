import React from 'react'
import { StyledCategoryCard } from './style'

const index = props => {
  return (
    <StyledCategoryCard backgroundImage={props.image}>
      <h5>{props.title}</h5>
    </StyledCategoryCard>
  )
}

export default index
