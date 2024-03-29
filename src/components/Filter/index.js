import React, { useContext, useState, useEffect } from 'react'
import FilterButton from '../icons/FilterButton'
import { FilterWrapper } from './style'
import Menu from '../Header/Nav/Menu'
import pageData from '../../data/data.json'

import { SortContext, FilterContext, DataContext } from '../../App'
import { StoreContext } from '../../utils/store'

const Filter = props => {
  const { location } = props
  const [filterOpen, setFilterOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const { sort, setSort } = useContext(StoreContext)
  const { data, updatePageData } = useContext(StoreContext)
  const { filterType, updateFilter } = useContext(StoreContext)

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
