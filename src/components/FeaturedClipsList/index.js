import React from 'react'
import { StyledFeaturedClipList } from './style'
import FeaturedClip from '../FeaturedClip'

const ArrayOfClips = [
  {
    text: 'TV Drama vision 2019',
    image: './images/categories/drama_vision.png',
    link: '/video/1'
  },
  {
    text: 'Nominated writers',
    image: './images/categories/nominated_writers.png',
    link: '/video/2'
  },
  {
    text: 'Nominated writers',
    image: './images/categories/nominated_writers.png',
    link: '/video/3'
  },
  {
    text: 'Nominated writers',
    image: './images/categories/nominated_writers.png',
    link: '/video/3'
  },
  {
    text: 'Nominated writers',
    image: './images/categories/nominated_writers.png',
    link: '/video/3'
  }
]

const FeaturedClipList = props => {
  const { news } = props

  console.log(news)

  return (
    <StyledFeaturedClipList>
      {news.map((clip, index) => (
        <FeaturedClip
          image={clip.thumbnail}
          text={clip.title}
          link={`/media/${clip.id}`}
          key={index}
        />
      ))}
    </StyledFeaturedClipList>
  )
}

export default FeaturedClipList
