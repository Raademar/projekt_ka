import React from 'react'
import { StyledThumbnailMedia } from './style'
const ThumbnailMedia = props => {
  const { content } = props
  console.log(content)

  return (
    <>
      {content &&
        content.map(info => (
          <StyledThumbnailMedia color={props.color}>
            <img src="ttps://images.unsplash.com/photo-15cHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80" />
            <h2>{info.title}</h2>
            <p>{info.length}</p>
            <p>{info.date}</p>
            <p>{info.type}</p>
          </StyledThumbnailMedia>
        ))}
    </>
  )
}

export default ThumbnailMedia
