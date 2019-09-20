import React from 'react'

import Footer from '../components/Footer'
import SrcResultsFilter from '../components/SrcResultsFilter'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Filter from '../components/Filter'
const SearchResult = props => {
  return (
    <>
      <Header />
      <Layout>
        <Filter location={props.location}></Filter>
      </Layout>
      <SrcResultsFilter />
      <Footer />
    </>
  )
}

export default SearchResult
