import React from 'react'
import { MenuStyle, CloseButton } from './style'
import Cross from '../../icons/Cross'

const Menu = ({ close }) => {
  return (
    <MenuStyle>
      <CloseButton onClick={close}>
        <Cross />
      </CloseButton>
      <h2>Om K-play</h2>
      <h2>Video</h2>
      <h2>Podcast</h2>
    </MenuStyle>
  )
}

export default Menu
