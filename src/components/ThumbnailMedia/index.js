import React from 'react'
import { StyledThumbnailMedia } from './style'
const ThumbnailMedia = props => {
  const { content } = props

  return (
    <>
      {content &&
        content.map(info => (
          <StyledThumbnailMedia color={props.color}>
            <img src={info.thumbnail} />
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
