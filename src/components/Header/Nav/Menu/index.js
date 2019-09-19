import React from 'react'
import { NavLink } from 'react-router-dom'
import { MenuStyle, CloseButton } from './style'
import Minus from '../../../icons/Minus'
import { menuItems } from './menuItems'

const Menu = ({ close, active }) => {
  return (
    <MenuStyle>
      <CloseButton onClick={close}>
        <Minus />
      </CloseButton>

      {menuItems.map((item, i) => (
        <NavLink
          activeClassName="is-active"
          key={i}
          to={{
            pathname: `/${item.url}`,
            title: item.title,
            subcategory: item.subcategory
          }}
          onClick={close}
        >
          {item.title}
        </NavLink>
      ))}
    </MenuStyle>
  )
}

export default Menu
