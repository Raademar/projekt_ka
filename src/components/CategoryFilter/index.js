import React from 'react'
import CategoryCard from '../CategoryCard'
import { StyledCategoryFilter } from './style'

const index = props => {
  const { array, backgroundColor, path } = props

  return (
    <StyledCategoryFilter>
      {array.map((category, index) => (
        <CategoryCard
          path={path}
          backgroundColor={backgroundColor}
          image={category.image}
          title={category.title}
          url={category.url}
          key={index}
        />
      ))}
    </StyledCategoryFilter>
  )
}

export default index
