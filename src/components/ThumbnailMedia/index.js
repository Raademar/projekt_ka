import React from 'react'
import { StyledThumbnailMedia } from './style'
import ArrowBack from '../icons/ArrowBack'
const ThumbnailMedia = props => {
  const { content } = props
  console.log(content)

  return (
    <>
      {content &&
        content.map(info => (
          <StyledThumbnailMedia color={props.color}>
            <img src={info.thumbnail} />
            <h2>{info.title}</h2>
            <div>
              <div>
                <p>{info.length}</p>
                <p>{info.date}</p>
                <p>{info.type}</p>
              </div>
              <div>
                <ArrowBack color="darkgrey" flip />
              </div>
            </div>
          </StyledThumbnailMedia>
        ))}
    </>
  )
}

export default ThumbnailMedia
