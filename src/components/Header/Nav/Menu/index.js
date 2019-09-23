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
import { SortContext, FilterContext, DataContext } from '../../../../App'
import pageData from '../../../../data/data.json'

const filterItems = ['Video', 'Podcast']
const sortItems = ['A-Ö', 'Populärt', 'Senast först', 'Tidigast först']

const Menu = props => {
  const { close, filter } = props

  const { data, updatePageData } = useContext(DataContext)
  const { sort, setSort } = useContext(SortContext)
  const { filterType, updateFilter } = useContext(FilterContext)
  const [filterTypeString, setFilterType] = useState(filterType)
  const [addedFilter, setAddedFilter] = useState(null)
  const [addedSort, setAddedSort] = useState(sort)
  let tempData = []

  useEffect(() => {
    setSort(addedSort)
    updateFilter(filterTypeString)
    if (filterTypeString !== '') {
      tempData = data.filter(item => {
        if (item.type.toLowerCase() == filterTypeString.toLowerCase()) {
          return item
        }
      })
      updatePageData(tempData)
    }
  }, [addedSort, filterTypeString])

  if (filterTypeString !== '') {
    updatePageData(pageData)
    setFilterType('')
  }

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
              <h2
                onClick={() => {
                  setFilterType(item)
                }}
              >
                {item}
              </h2>
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
