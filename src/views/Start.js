import React from 'react'
import Header from '../components/Header'
import CategoryFilter from '../components/CategoryFilter'
import FeaturedClipsList from '../components/FeaturedClipsList'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
const Start = () => {
  return (
    <>
      <Header></Header>
      {/* <Layout> */}
      <CategoryFilter />
      <FeaturedClipsList />
      <Footer />
      {/* </Layout> */}
    </>
  )
}

export default Start
