import React from 'react'
import { NavLink } from 'react-router-dom'
import { Wrapper } from './style'
import SrcResultCard from '../SrcResultCard'
import Filter from '../Filter'
const SrcResultFilter = props => {
  const { searchResults } = props

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

export default SrcResultFilter
