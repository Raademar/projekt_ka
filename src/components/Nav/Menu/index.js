import React from 'react'
import { MenuStyle, CloseButton } from './style'
import Minus from '../../icons/Minus'

const Menu = ({ close }) => {
  return (
    <MenuStyle>
      <CloseButton onClick={close}>
        <Minus />
      </CloseButton>
      <h2>Om K-play</h2>
      <h2>Teater</h2>
      <h2>Film & Tv</h2>
      <h2>Musik</h2>
      <h2>Dans</h2>
      <h2>Arbetsliv</h2>
      <h2>Marknadsföring</h2>
    </MenuStyle>
  )
}

export default Menu
