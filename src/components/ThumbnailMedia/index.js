import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyledThumbnailMedia } from './style'
import ArrowBack from '../icons/ArrowBack'

const ThumbnailMedia = props => {
  const { content } = props

  return (
    <>
      {content &&
        content.map((info, i) => (
          <StyledThumbnailMedia color={props.color} key={i}>
            <img loading="lazy" src={info.thumbnail} />
            <h2>{info.title}</h2>
            <div>
              <div>
                <p>{info.length}</p>
                <p>{info.date}</p>
                <p>{info.type}</p>
              </div>
              <NavLink to={`/media/${info.id}`}>
                <ArrowBack color="darkgrey" flip />
              </NavLink>
            </div>
          </StyledThumbnailMedia>
        ))}
    </>
  )
}

export default ThumbnailMedia
