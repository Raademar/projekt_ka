import React from 'react'
import MenuStyle from './style'
import Cross from '../../icons/Cross'

const Menu = ({ close }) => {
  return (
    <MenuStyle>
      <button onClick={close}>
        <Cross />
      </button>
      <h2>Om K-play</h2>
      <h2>Video</h2>
      <h2>Podcast</h2>
    </MenuStyle>
  )
}

export default Menu
