import React from 'react'

import Footer from '../components/Footer'
import SrcResultsFilter from '../components/SrcResultsFilter'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Filter from '../components/Filter'
const SearchResult = props => {
  console.log(props)
  return (
    <>
      <Layout history={props.history} noMargin="true">
        <Filter location={props.location} addMargin="true"></Filter>
        <SrcResultsFilter />
      </Layout>
    </>
  )
}

export default SearchResult
