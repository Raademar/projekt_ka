import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyledThumbnailMedia } from './style'
import ArrowBack from '../icons/ArrowBack'

const ThumbnailMedia = props => {
  const { content } = props
  console.log(props)
  return (
    <>
      {content &&
        content.map((info, i) => (
          <StyledThumbnailMedia color={props.color} key={i}>
            <NavLink to={`/media/${info.id}`}>
              <img src={info.thumbnail} />
              <h2>{info.title}</h2>
            </NavLink>
            <div>
              <div>
                <p>{info.length}</p>
                <p>{info.date}</p>
                <p>{info.type}</p>
              </div>
            </div>
          </StyledThumbnailMedia>
        ))}
    </>
  )
}

export default ThumbnailMedia
