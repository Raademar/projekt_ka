import React from 'react'
import Header from '../components/Header'
import CategoryFilter from '../components/CategoryFilter'
import FeaturedClipsList from '../components/FeaturedClipsList'
import Layout from '../components/Layout'
const Start = () => {
  return (
    <>
      <Header></Header>
      {/* <Layout> */}
      <CategoryFilter />
      <FeaturedClipsList />
      {/* </Layout> */}
    </>
  )
}

export default Start
