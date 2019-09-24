import React, { useContext } from 'react'

import Footer from '../components/Footer'
import SrcResultsFilter from '../components/SrcResultsFilter'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Filter from '../components/Filter'
import { DataContext } from '../App'

const SearchResult = props => {
  const { location } = props
  const { data, setData } = useContext(DataContext)
  const searchWord = location.search.split('?')

  // const searchQuery = data => {
  //   return data.filter(
  //     m => m.title.toLowerCase().indexOf(searchWord[0].toLowerCase()) >= 0
  //   )
  // }
  const searchQuery = data => {
    return data.filter(m =>
      console.log(
        m.title.toLowerCase().indexOf(searchWord[1].toLowerCase()) >= 0
      )
    )
  }

  console.log(searchQuery(data))
  // const filter = data.map(item => item.title.search(searchWord[1]))
  // const filterSearch = data.find(item => item.title === searchWord[1])
  // console.log(filterSearch)

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
