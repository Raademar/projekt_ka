import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyledCategoryCard } from './style'

const index = props => {
  console.log(props)

  return (
    <StyledCategoryCard
      backgroundImage={props.image}
      backgroundColor={props.backgroundColor}
    >
      <NavLink
        to={{
          pathname: `${props.path}/${props.url}`,
          title: props.title
        }}
      >
        <h5>{props.title}</h5>
      </NavLink>
    </StyledCategoryCard>
  )
}

export default index
