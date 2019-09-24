import React from 'react'
import { Wrapper } from './style'
import SrcResultCard from '../SrcResultCard'
import Filter from '../Filter'
const SrcResultFilter = props => {
  const { searchResults } = props

  console.log(searchResults)
  return (
    <Wrapper>
      {searchResults.map((result, i) => (
        <SrcResultCard
          key={i}
          image={result.thumbnail}
          title={result.title}
          date={result.date}
          length={result.length}
          type={result.type}
        />
      ))}
    </Wrapper>
  )
}

export default SrcResultFilter
