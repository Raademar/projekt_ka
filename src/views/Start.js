import React, { useContext, useEffect } from 'react'
import CategoryFilter from '../components/CategoryFilter'
import Layout from '../components/Layout'
import { menuArray } from '../data/menuArray'
import Filter from '../components/Filter'
import ThumbnailMedia from '../components/ThumbnailMedia'

import { DataContext, FilteredDataContext } from '../App'

const Start = props => {
  const { data, setData } = useContext(DataContext)
  const { filteredData, updateFilteredData } = useContext(FilteredDataContext)

  const renderThumbNailData = () => {
    return <ThumbnailMedia color="white" content={filteredData} />
  }

  useEffect(() => {
    updateFilteredData(data)
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
