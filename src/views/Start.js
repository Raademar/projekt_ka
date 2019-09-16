import React from 'react'
import Nav from '../components/Nav'
import Searchbar from '../components/Searchbar'
import CategoryFilter from '../components/CategoryFilter'
import FeaturedClipsList from '../components/FeaturedClipsList'
const Start = () => {
  return (
    <div>
      <Nav></Nav>
      <Searchbar></Searchbar>
      <CategoryFilter />
      <FeaturedClipsList />
    </div>
  )
}

export default Start
