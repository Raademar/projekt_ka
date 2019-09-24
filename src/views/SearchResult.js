import React, { useContext, useEffect, useState } from 'react'

import Footer from '../components/Footer'
import SrcResultsFilter from '../components/SrcResultsFilter'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Filter from '../components/Filter'
import { DataContext } from '../App'

const SearchResult = props => {
  const { location } = props
  let searchWord = location.search.split('?')
  const { data, setData } = useContext(DataContext)
  const [searchResults, setSearchResults] = useState([])
  const [query, setQuery] = useState(searchWord[1])

  useEffect(() => {
    searchWord = location.search.split('?')
    setQuery(searchWord[1])
  })

  const searchQuery = data => {
    let resultTitle = data.filter(
      m => m.title.toLowerCase().indexOf(query.toLowerCase()) >= 0
    )

    let resultDescription = data.filter(
      m => m.description.toLowerCase().indexOf(query.toLowerCase()) >= 0
    )

    let resutlts = resultTitle.concat(resultDescription)
    resutlts = [...new Set(resutlts)]

    return resutlts
  }
  useEffect(() => {
    setSearchResults(searchQuery(data))
  }, [query])

  if (searchResults.length == 0) {
    console.log('nothing')
  }

  return (
    <>
      <Layout history={props.history} noMargin="true">
        <Filter location={props.location} addMargin="true"></Filter>
        <SrcResultsFilter searchResults={searchResults} />
      </Layout>
    </>
  )
}

export default SearchResult
