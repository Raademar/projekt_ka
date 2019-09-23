import React, { useContext } from 'react'
import Header from '../components/Header'
import CategoryFilter from '../components/CategoryFilter'
import FeaturedClipsList from '../components/FeaturedClipsList'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import { menuArray } from '../data/menuArray'
import Filter from '../components/Filter'
import ThumbnailMedia from '../components/ThumbnailMedia'

import { DataContext } from '../App'

const Start = props => {
  const { data, setData } = useContext(DataContext)
  return (
    <>
      <Layout history={props.history}>
        <CategoryFilter array={menuArray} pathName={props.location.pathname} />
        <Filter location={props.location} />
        <ThumbnailMedia color="white" content={data} />
      </Layout>
    </>
  )
}

export default Start
