import React from 'react'
import Header from '../components/Header'
import CategoryFilter from '../components/CategoryFilter'
import FeaturedClipsList from '../components/FeaturedClipsList'
const Start = () => {
  return (
    <div>
      <Header></Header>
      <CategoryFilter />
      <FeaturedClipsList />
    </div>
  )
}

export default Start
