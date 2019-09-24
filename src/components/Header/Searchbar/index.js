import React, { useState, useEffect } from 'react'
import { Input, SearchbarStyled } from './style'
import { NavLink } from 'react-router-dom'
import Search from '../../icons/Search'
const Searchbar = props => {
  const [position, setPosition] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(true)
  const [inputValue, setInputValue] = useState('')

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

  const handleInputValue = e => {
    setInputValue(e.target.value)
    console.log(e.target.value)
  }

  console.log(inputValue)
  return (
    <SearchbarStyled scroll={visible}>
      <NavLink to={`/search?${inputValue}`}>
        <form onSubmit={() => setInputValue(inputValue)}>
          <Input onChange={handleInputValue} value={inputValue} />
          <button>
            <Search />
          </button>
        </form>
      </NavLink>
    </SearchbarStyled>
  )
}

export default Searchbar
