import React from 'react'
import { StyledCategoryCard } from './style'

const index = props => {
  console.log(props)
  return (
    <StyledCategoryCard
      backgroundImage={props.image}
      backgroundColor={props.backgroundColor}
    >
      <h5>{props.title}</h5>
    </StyledCategoryCard>
  )
}

export default index
