import React from 'react'
import { NavLink } from 'react-router-dom'
import { MenuStyle, CloseButton } from './style'
import Minus from '../../../icons/Minus'

const menuItems = [
  {
    title: 'Om K-play',
    url: 'om-k-play'
  },
  {
    title: 'Teater',
    url: 'teater',
    subcategory: [
      {
        title: 'Scenproduktion',
        image: './images/categories/teather.jpg'
      },
      {
        title: 'Gestaltning',
        image: './images/categories/teather.jpg'
      },
      {
        title: 'Manus & Storytell',
        image: './images/categories/teather.jpg'
      },
      {
        title: 'Teaterteknik',
        image: './images/categories/teather.jpg'
      }
    ]
  },
  {
    title: 'Film & TV',
    url: 'film-tv',
    subcategory: [
      {
        title: 'Produktion',
        image: './images/categories/teather.jpg'
      },
      {
        title: 'Plats- & scenteknik',
        image: './images/categories/teather.jpg'
      },
      {
        title: 'Manus & Storytell',
        image: './images/categories/teather.jpg'
      },
      {
        title: 'Digital teknik',
        image: './images/categories/teather.jpg'
      }
    ]
  },
  {
    title: 'Musik',
    url: 'musik',
    subcategory: [
      {
        title: 'Produktion',
        image: './images/categories/teather.jpg'
      },
      {
        title: 'Plats- & scenteknik',
        image: './images/categories/teather.jpg'
      },
      {
        title: 'Manus & Storytell',
        image: './images/categories/teather.jpg'
      },
      {
        title: 'Digital teknik',
        image: './images/categories/teather.jpg'
      }
    ]
  },
  {
    title: 'Arebetsliv',
    url: 'arbetsliv',
    subcategory: [
      {
        title: 'Produktion',
        image: './images/categories/teather.jpg'
      },
      {
        title: 'Plats- & scenteknik',
        image: './images/categories/teather.jpg'
      },
      {
        title: 'Manus & Storytell',
        image: './images/categories/teather.jpg'
      },
      {
        title: 'Digital teknik',
        image: './images/categories/teather.jpg'
      }
    ]
  },
  {
    title: 'Marknadsföring',
    url: 'marknadsforing',
    subcategory: [
      {
        title: 'Produktion',
        image: './images/categories/teather.jpg'
      },
      {
        title: 'Plats- & scenteknik',
        image: './images/categories/teather.jpg'
      },
      {
        title: 'Manus & Storytell',
        image: './images/categories/teather.jpg'
      },
      {
        title: 'Digital teknik',
        image: './images/categories/teather.jpg'
      }
    ]
  }
]

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
