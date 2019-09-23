import React, { useContext, useState, useEffect } from 'react'
import FilterButton from '../icons/FilterButton'
import { FilterWrapper } from './style'
import Menu from '../Header/Nav/Menu'

import { SortContext } from '../../App'

const Filter = props => {
  const { location } = props
  const [filterOpen, setFilterOpen] = useState(false)
  const { sort, setSort } = useContext(SortContext)
  const search = location.search.split('=')

  useEffect(() => {
    if (typeof search[1] !== 'undefined') {
      setSort(search[1])
    }
  })

  console.log(props)
  return (
    <FilterWrapper addMargin={props.addMargin}>
      <h3>{sort}</h3>
      <button onClick={() => setFilterOpen(true)}>
        <FilterButton />
      </button>

      {filterOpen && <Menu filter="true" close={() => setFilterOpen(false)} />}
    </FilterWrapper>
  )
}

export default Filter
