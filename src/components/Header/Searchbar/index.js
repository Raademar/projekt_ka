import React, { useState, useEffect } from 'react'
import { Input, SearchbarStyled } from './style'
import Search from '../../icons/Search'
const Searchbar = () => {
  const [position, setPosition] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      let prevPos = window.pageYOffset
      setVisible(position > prevPos)
      setPosition(prevPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
  // console.log(window.pageYOffset)
  return (
    <SearchbarStyled scroll={visible}>
      <form>
        <Input />
        <button>
          <Search />
        </button>
      </form>
    </SearchbarStyled>
  )
}

export default Searchbar
