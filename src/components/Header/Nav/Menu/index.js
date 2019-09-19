import React from 'react'
import { NavLink } from 'react-router-dom'
import { MenuStyle, CloseButton } from './style'
import Minus from '../../../icons/Minus'
import { menuItems } from './menuItems'
import ArrowBack from '../../../icons/ArrowBack'

const Menu = ({ close, active, filter }) => {
  console.log(filter)
  return (
    <MenuStyle>
      <CloseButton onClick={close} filter={filter}>
        {filter ? <ArrowBack /> : <Minus />}
      </CloseButton>

      {filter ? (
        <NavLink>hej</NavLink>
      ) : (
        menuItems.map((item, i) => (
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
        ))
      )}
    </MenuStyle>
  )
}

export default Menu
