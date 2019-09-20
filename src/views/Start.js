import React from 'react'
import Header from '../components/Header'
import CategoryFilter from '../components/CategoryFilter'
import FeaturedClipsList from '../components/FeaturedClipsList'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import { menuArray } from '../data/menuArray'
import Filter from '../components/Filter'
import ThumbnailMedia from '../components/ThumbnailMedia'

const Start = props => {
  return (
    <>
      <Header></Header>
      <Layout>
        <CategoryFilter array={menuArray} pathName={props.location.pathname} />
        <Filter location={props.location} />
        <ThumbnailMedia color="white"></ThumbnailMedia>
      </Layout>
      <Footer />
    </>
  )
}

export default Start
