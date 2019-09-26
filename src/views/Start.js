import React, { useContext } from 'react'
import Header from '../components/Header'
import CategoryFilter from '../components/CategoryFilter'
import FeaturedClipsList from '../components/FeaturedClipsList'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import { menuArray } from '../data/menuArray'
import Filter from '../components/Filter'
import ThumbnailMedia from '../components/ThumbnailMedia'

import { StoreContext } from '../utils/store'

const Start = props => {
  // const { data, setData } = useContext(DataContext)
  const { filteredData, updateFilteredData } = useContext(StoreContext)
  return (
    <>
      <Layout history={props.history}>
        <CategoryFilter array={menuArray} pathName={props.location.pathname} />
        <Filter location={props.location} />
        <ThumbnailMedia color="white" content={filteredData} />
      </Layout>
    </>
  )
}

export default Start
