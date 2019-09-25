import React, { useContext } from 'react'
import { StyledRecMedia } from './style'
import ThumbnailMedia from '../ThumbnailMedia'

import { DataContext, FilteredDataContext } from '../../App'

const RecMedia = ({ content }) => {
  const { filteredData, updateFilteredData } = useContext(FilteredDataContext)

  const recMediaToDisplay = filteredData.filter(item => {
    return (
      item.subcategory.some(i => content[0].subcategory.indexOf(i) >= 0) &&
      item.id !== content[0].id
    )
  })

  return (
    <StyledRecMedia>
      <h3>Du kanske också gillar...</h3>
      <ThumbnailMedia content={recMediaToDisplay} color={'white'} />
    </StyledRecMedia>
  )
}

export default RecMedia
