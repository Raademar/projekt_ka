import React from 'react'
import { StyledFeaturedClip } from './style'

const FeaturedClip = props => {
  return (
    <StyledFeaturedClip>
      <a href={props.link}>
        <img src={props.image} alt='thumbnail_from_video' />
        <p>{props.text}</p>
      </a>
    </StyledFeaturedClip>
  )
}

export default FeaturedClip
