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
import {
  SortContext,
  FilterContext,
  DataContext,
  FilteredDataContext,
  SearchResultContext
} from '../../../../App'
import { StoreContext } from '../../../../utils/store'
import pageData from '../../../../data/data.json'

const filterItems = ['Video', 'Podcast']
const sortItems = ['A-Ö', 'Populärt', 'Senast först', 'Tidigast först']

const Menu = props => {
  const { close, filter, menuOpen, filterOpen, searchResults } = props

  const { data, updatePageData } = useContext(StoreContext)
  const { sort, setSort } = useContext(StoreContext)
  const { filterType, updateFilter } = useContext(StoreContext)
  const { filteredData, updateFilteredData } = useContext(StoreContext)

  const [filterTypeString, setFilterType] = useState(filterType)
  const [addedFilter, setAddedFilter] = useState(null)
  const [addedSort, setAddedSort] = useState(sort)

  useEffect(() => {
    setSort(addedSort)
    updateFilter(filterTypeString)
    filterData(searchResult.length < 1 ? data : searchResult)
  }, [addedSort, filterTypeString, addedFilter])

  const filterData = data => {
    let filteredData = data
    let tempData
    if (filterTypeString !== '') {
      tempData = filteredData.filter(item => {
        if (item.type.toLowerCase() == filterTypeString.toLowerCase()) {
          return item
        }
      })
      updateFilteredData(tempData)
    }
    console.log(tempData)
  }
  console.log(filteredData)

  return (
    <MenuWrapper menuOpen={menuOpen} filterOpen={filterOpen}>
      <CloseButton onClick={close} filter={filter}>
        {filter ? <ArrowBack /> : <Minus />}
      </CloseButton>

      {filter ? (
        <FilterStyle>
          <h2>Filter</h2>
          {filterItems.map((item, i) => (
            <FilterButton
              key={i}
              onClick={() => {
                addedFilter !== null
                  ? setAddedFilter(null)
                  : setAddedFilter(item)
              }}
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
