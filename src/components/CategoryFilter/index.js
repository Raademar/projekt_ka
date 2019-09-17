import React from 'react'
import CategoryCard from '../CategoryCard'
import { StyledCategoryFilter } from './style'

const index = ({ array }) => {
  return (
    <StyledCategoryFilter>
      {array.map((category, index) => (
        <CategoryCard
          image={category.image}
          title={category.title}
          key={index}
        />
      ))}
    </StyledCategoryFilter>
  )
}

export default index
