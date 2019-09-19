import React from 'react'
import CategoryCard from '../CategoryCard'
import { StyledCategoryFilter } from './style'

const index = props => {
  const { array, backgroundColor, path, pathName } = props

  return (
    <StyledCategoryFilter>
      {array.map((category, index) => (
        <CategoryCard
          backgroundColor={backgroundColor}
          image={category.image}
          subcategory={category.subcategory}
          title={category.title}
          url={category.url}
          pathName={pathName}
          path={path}
          key={index}
        />
      ))}
    </StyledCategoryFilter>
  )
}

export default index
