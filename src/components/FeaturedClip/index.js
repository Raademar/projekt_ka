import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyledFeaturedClip } from './style'

const FeaturedClip = props => {
  return (
    <StyledFeaturedClip>
      <NavLink to={props.link}>
        <img src={props.image} alt="thumbnail_from_video" />
        <p>{props.text}</p>
      </NavLink>
    </StyledFeaturedClip>
  )
}

export default FeaturedClip
