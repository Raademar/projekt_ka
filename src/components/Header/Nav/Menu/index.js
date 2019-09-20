import React, { useContext, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import {
  MenuWrapper,
  CloseButton,
  FilterStyle,
  FilterButton,
  MenuStyle
} from './style'
import Minus from '../../../icons/Minus'
import { menuArray } from '../../../../data/menuArray'
import ArrowBack from '../../../icons/ArrowBack'

import { SortContext } from '../../../../App'
const filterItems = ['Video', 'Podd']

const sortItems = ['A-Ö', 'Populärt', 'Senast först', 'Tidigast först']

const Menu = props => {
  const { close, filter } = props

  const { sort, setSort } = useContext(SortContext)
  const [addedFilter, setAddedFilter] = useState(null)
  const [addedSort, setAddedSort] = useState(sort)

  useEffect(() => {
    setSort(addedSort)
  }, [addedSort])

  return (
    <MenuWrapper>
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
              activeFilter={item}
              added={addedFilter === item ? 'bold' : 'normal'}
            >
              <NavLink to={addedFilter === item ? '' : `?filter=${item}`}>
                <h2>{item}</h2>
              </NavLink>
            </FilterButton>
          ))}
          <h2>Sortera</h2>
          {sortItems.map((item, i) => (
            <FilterButton
              key={i}
              onClick={() =>
                addedSort !== null ? setAddedSort(null) : setAddedSort(item)
              }
              added={addedSort === item ? 'bold' : 'normal'}
            >
              <NavLink to={addedSort === item ? '' : `?sort=${item}`}>
                <h2>{item}</h2>
              </NavLink>
            </FilterButton>
          ))}
        </FilterStyle>
      ) : (
        <MenuStyle>
          <NavLink to={'/about'} onClick={close}>
            <h2>Om k-play</h2>
          </NavLink>
          {menuArray.map((item, i) => (
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
          ))}
        </MenuStyle>
      )}
    </MenuWrapper>
  )
}

export default Menu
