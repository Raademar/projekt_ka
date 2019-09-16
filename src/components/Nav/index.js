import React, { useState } from 'react'
import ArrowBack from '../icons/ArrowBack'
import Logo from '../icons/Logo'
import Hamburger from '../icons/Hamburger'

import { NavWrapper, MenuButton } from './style'
import Menu from './Menu'
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  // add so if ther is a back the arrow will show, else nothing
  return (
    <>
      <NavWrapper>
        <ArrowBack />
        <Logo />
        <MenuButton onClick={() => setMenuOpen(true)}>
          <Hamburger />
        </MenuButton>
      </NavWrapper>
      {menuOpen && <Menu close={() => setMenuOpen(false)}></Menu>}
    </>
  )
}

export default Nav
