import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Wrapper } from './style'
import SrcResultCard from '../SrcResultCard'
import Filter from '../Filter'

const SrcResultFilter = props => {
  const { searchResults } = props

  const renderSearchResult = () => {
    return (
      <Wrapper>
        {searchResults.map((result, i) => (
          <NavLink to={`/media/${result.id}`} key={i}>
            <SrcResultCard
              image={result.thumbnail}
              title={result.title}
              date={result.date}
              length={result.length}
              type={result.type}
            />
          </NavLink>
        ))}
      </Wrapper>
    )
  }

  useEffect(() => {
    renderSearchResult()
    console.log(searchResults)
  }, [searchResults])

  return renderSearchResult()
}

export default SrcResultFilter
