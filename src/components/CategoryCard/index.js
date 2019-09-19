import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyledCategoryCard } from './style'

const index = props => {
  const {
    title,
    url,
    pathName,
    path,
    subcategory,
    image,
    backgroundColor
  } = props

  return (
    <StyledCategoryCard
      backgroundImage={image}
      backgroundColor={backgroundColor}
    >
      <NavLink
        to={{
          pathname:
            typeof pathName !== 'undefined' ? `/${url}` : `${path}/${url}`,
          title: title,
          subcategory: subcategory
        }}
      >
        <h5>{title}</h5>
      </NavLink>
    </StyledCategoryCard>
  )
}

export default index
