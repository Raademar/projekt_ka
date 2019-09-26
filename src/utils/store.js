import React, { createContext, useState } from 'react'
import pageData from '../data/data.json'

export const StoreContext = createContext()

export default ({ children }) => {
  const [sort, setSort] = useState('Populärt')
  const [data, updatePageData] = useState(pageData)
  const [filteredData, updateFilteredData] = useState(data)
  const [filterType, updateFilter] = useState('')

  const store = {
    sort,
    setSort,
    data,
    updatePageData,
    filteredData,
    updateFilteredData,
    filterType,
    updateFilter
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
