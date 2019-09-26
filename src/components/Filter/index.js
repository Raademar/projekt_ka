import React, { useContext, useState, useEffect } from 'react'
import FilterButton from '../icons/FilterButton'
import { FilterWrapper } from './style'
import Menu from '../Header/Nav/Menu'
import pageData from '../../data/data.json'

import { SortContext, FilterContext, DataContext } from '../../App'

const Filter = props => {
  const { location } = props
  const [filterOpen, setFilterOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const { sort, setSort } = useContext(SortContext)
  const { data, updatePageData } = useContext(DataContext)
  const { filterType, updateFilter } = useContext(FilterContext)

  const search = location.search.split('=')

  useEffect(() => {
    if (typeof search[1] !== 'undefined') {
      setSort(search[1])
    }
  })

  return (
    <FilterWrapper addMargin={props.addMargin}>
      <div>
        <h3>{sort}</h3>
        <h5>{filterType}</h5>
      </div>
      <button
        onClick={() => {
          setFilterOpen(true)
        }}
      >
        <FilterButton />
      </button>
      <Menu
        filter="true"
        filterOpen={filterOpen}
        close={() => setFilterOpen(false)}
      />
    </FilterWrapper>
  )
}

export default Filter
