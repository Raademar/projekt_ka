import React from 'react'
import Header from '../components/Header'
import CategoryFilter from '../components/CategoryFilter'
import FeaturedClipsList from '../components/FeaturedClipsList'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

const arrayOfCategories = [
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

const Start = () => {
  return (
    <>
      <Header></Header>
      {/* <Layout> */}
      <CategoryFilter array={arrayOfCategories} />
      <FeaturedClipsList />
      <Footer />
      {/* </Layout> */}
    </>
  )
}

export default Start
