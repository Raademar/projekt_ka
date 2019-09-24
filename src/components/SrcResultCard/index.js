import React from 'react'
import { StyledSrcResultCard } from './style'

const SrcResultCard = props => {
  const { image, title, length, date, type } = props
  return (
    <StyledSrcResultCard>
      <img loading="lazy" src={image} />
      <h5>{title}</h5>
      <div>
        <p>{length}</p>
        <p>{date}</p>
        <p>{type}</p>
      </div>
    </StyledSrcResultCard>
  )
}

export default SrcResultCard
