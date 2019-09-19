import React, { useState } from 'react'
import FilterButton from '../icons/FilterButton'
import { FilterWrapper } from './style'
import Menu from '../Header/Nav/Menu'

const Filter = () => {
  const [filterOpen, setFilterOpen] = useState(false)

  return (
    <FilterWrapper>
      <h3>Populärt</h3>
      <button onClick={() => setFilterOpen(true)}>
        <FilterButton />
      </button>

      {filterOpen && <Menu filter="true" close={() => setFilterOpen(false)} />}
    </FilterWrapper>
  )
}

export default Filter
