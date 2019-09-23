import React from 'react'
import { StyledRecMedia } from './style'
import ThumbnailMedia from '../ThumbnailMedia'

const RecMedia = () => {
  return (
    <StyledRecMedia>
      <h3>Du kanske också gillar...</h3>
      <ThumbnailMedia />
      <ThumbnailMedia />
      <ThumbnailMedia />
      <ThumbnailMedia />
    </StyledRecMedia>
  )
}

export default RecMedia
