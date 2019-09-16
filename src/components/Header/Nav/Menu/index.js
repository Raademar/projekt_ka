import React from 'react'
import { Link } from 'react-router-dom'
import { MenuStyle, CloseButton } from './style'
import Minus from '../../../icons/Minus'

const menuItems = [
  {
    title: 'Om K-play',
    url: 'om-k-play'
  },
  {
    title: 'Teater',
    url: 'teater'
  },
  {
    title: 'Film & TV',
    url: 'film-tv'
  },
  {
    title: 'Musik',
    url: 'musik'
  },
  {
    title: 'Arebetsliv',
    url: 'arbetsliv'
  },
  {
    title: 'Marknadsföring',
    url: 'marknadsforing'
  }
]

const Menu = ({ close }) => {
  return (
    <MenuStyle>
      <CloseButton onClick={close}>
        <Minus />
      </CloseButton>

      {menuItems.map((item, i) => (
        <Link
          key={i}
          to={{ pathname: `/${item.url}`, title: item.title }}
          onClick={close}
        >
          {item.title}
        </Link>
      ))}
    </MenuStyle>
  )
}

export default Menu
