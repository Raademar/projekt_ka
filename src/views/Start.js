import React, { useContext, useEffect } from 'react'
import CategoryFilter from '../components/CategoryFilter'
import Layout from '../components/Layout'
import { menuArray } from '../data/menuArray'
import Filter from '../components/Filter'
import ThumbnailMedia from '../components/ThumbnailMedia'

import { StoreContext } from '../utils/store'

const Start = props => {
  const {
    data,
    setData,
    filteredData,
    updateFilteredData,
    searchResult,
    setSearchResult
  } = useContext(StoreContext)
  const renderThumbNailData = () => {
    return <ThumbnailMedia color="white" content={filteredData} />
  }

  useEffect(() => {
    updateFilteredData(data)
    setSearchResult([])
  }, [])

  useEffect(() => {
    renderThumbNailData()
  }, [filteredData])

  return (
    <>
      <Layout history={props.history}>
        <CategoryFilter array={menuArray} pathName={props.location.pathname} />
        <Filter location={props.location} />
        {renderThumbNailData()}
      </Layout>
    </>
  )
}

export default Start
