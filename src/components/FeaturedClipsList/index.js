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

const FeaturedClipList = () => {
  return (
    <StyledFeaturedClipList>
      {ArrayOfClips.map((clip, index) => (
        <FeaturedClip
          image={clip.image}
          text={clip.text}
          link={clip.link}
          key={index}
        />
      ))}
    </StyledFeaturedClipList>
  )
}

export default FeaturedClipList
