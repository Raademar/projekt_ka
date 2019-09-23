import React from 'react'
import { StyledThumbnailMedia } from './style'

const ThumbnailMedia = props => {
  const { content } = props
  console.log(content)

  return (
    <StyledThumbnailMedia color={props.color}>
      <img src="https://images.unsplash.com/photo-1562185022-c0a7889d7fbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80" />
      <h2>Rubrik</h2>
      <p>Längd:</p>
      <p>Datum:</p>
      <p>Format</p>
    </StyledThumbnailMedia>
  )
}

export default ThumbnailMedia
