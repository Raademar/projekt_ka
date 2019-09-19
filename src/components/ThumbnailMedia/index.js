import React from 'react'
import { StyledThumbnailMedia } from './style'

const ThumbnailMedia = () => {
  return (
    <StyledThumbnailMedia>
      <img
        src="./images/recommended_videos/thumbnail_rec_video.png"
        alt="thumbnail_image_recommended_videos"
      />
      <h3>
        Masterclass med Pia Olby - textgestaltning och sånggestaltning (del 2 av
        4)
      </h3>
      <span>Längd: 2:40</span>
      <span>Datum: 2019-06-10</span>
      <span>Video</span>
    </StyledThumbnailMedia>
  )
}

export default ThumbnailMedia
