import React from 'react'
import CategoryCard from '../CategoryCard'
import { StyledCategoryFilter } from './style'

const ArrayOfCategories = [
  {
    title: 'Teater',
    image: './images/categories/teather.jpg'
  },
  {
    title: 'Film & TV',
    image: './images/categories/movie_tv.jpg'
  },
  {
    title: 'Musik',
    image: './images/categories/music.jpg'
  },
  {
    title: 'Dans',
    image: './images/categories/dance.jpg'
  },
  {
    title: 'Arbetsliv',
    image: './images/categories/work_life.jpg'
  },
  {
    title: 'Marknadsföring',
    image: './images/categories/marketing.jpg'
  }
]

const index = () => {
  return (
    <StyledCategoryFilter>
      {ArrayOfCategories.map((category, index) => (
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
