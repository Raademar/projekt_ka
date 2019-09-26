import React, { useContext, useEffect, useState } from 'react'

import SrcResultsFilter from '../components/SrcResultsFilter'
import Layout from '../components/Layout'
import Filter from '../components/Filter'
import { StoreContext } from '../utils/store'

const SearchResult = props => {
  const { location } = props
  let searchWord = location.search.split('?')
  const { data, searchResult, setSearchResult, filteredData, updateFilteredData } = useContext(StoreContext)
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
    // setSearchResults(searchQuery(data))
    setSearchResult(searchQuery(data))
    updateFilteredData(searchResult)
  }, [])

  return (
    <>
      <Layout history={props.history} noMargin="true" placeholder={query}>
        <Filter location={props.location} addMargin="true"></Filter>
        <SrcResultsFilter
          searchResults={
            filteredData &&
            filteredData.length > 0 &&
            filteredData.length !== data.length
              ? filteredData
              : searchResult
          }
        />
      </Layout>
    </>
  )
}

export default SearchResult
