import React from 'react'
import CategoryCard from '../CategoryCard'
import { StyledCategoryFilter } from './style'

const index = ({ array, backgroundColor }) => {
  return (
    <StyledCategoryFilter>
      {array.map((category, index) => (
        <CategoryCard
          backgroundColor={backgroundColor}
          image={category.image}
          title={category.title}
          key={index}
        />
      ))}
    </StyledCategoryFilter>
  )
}

export default index
