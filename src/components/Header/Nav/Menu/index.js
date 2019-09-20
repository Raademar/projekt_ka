import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MenuStyle, CloseButton, FilterStyle, FilterButton } from './style'
import Minus from '../../../icons/Minus'
import { menuItems } from './menuItems'
import ArrowBack from '../../../icons/ArrowBack'
// import FilterButton from '../../../icons/FilterButton'

const filterItems = ['Video', 'Podd']

const sortItems = ['A-Ö', 'Populära', 'senast först', 'tidigast först']

const Menu = ({ close, active, filter }) => {
  const [activeFilter, setActiveFilter] = useState([])
  const [addedFilter, setAddedFilter] = useState(null)
  const [add, setAdd] = useState('bold')
  console.log(addedFilter)
  return (
    <MenuStyle>
      <CloseButton onClick={close} filter={filter}>
        {filter ? <ArrowBack /> : <Minus />}
      </CloseButton>

      {filter ? (
        <FilterStyle>
          <h2>Filter</h2>
          {filterItems.map((item, i) => (
            <FilterButton
              key={i}
              onClick={() =>
                addedFilter !== null
                  ? setAddedFilter(null)
                  : setAddedFilter(item)
              }
              added={addedFilter === item ? 'bold' : 'normal'}
            >
              <h2>{item}</h2>
            </FilterButton>
          ))}
          <h2>Sortera</h2>
          {sortItems.map((item, i) => (
            <FilterButton
              key={i}
              onClick={() =>
                addedFilter !== null
                  ? setAddedFilter(null)
                  : setAddedFilter(item)
              }
              added={addedFilter === item ? 'bold' : 'normal'}
            >
              <h2>{item}</h2>
            </FilterButton>
          ))}
        </FilterStyle>
      ) : (
        menuItems.map((item, i) => (
          <NavLink
            activeClassName="is-active"
            key={i}
            to={{
              pathname: `/${item.url}`,
              title: item.title,
              subcategory: item.subcategory
            }}
            onClick={close}
          >
            {item.title}
          </NavLink>
        ))
      )}
    </MenuStyle>
  )
}

export default Menu
