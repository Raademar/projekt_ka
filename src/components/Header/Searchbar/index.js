import React, { useState, useEffect } from 'react'
import { Input, SearchbarStyled } from './style'
import { NavLink } from 'react-router-dom'
import Search from '../../icons/Search'
const Searchbar = props => {
  const [position, setPosition] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(true)
  const [inputValue, setInputValue] = useState('')
  console.log(props)
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
  }

  return (
    <SearchbarStyled scroll={visible}>
      <form onSubmit={() => setInputValue(inputValue)}>
        <Input
          onChange={handleInputValue}
          value={inputValue}
          placeholder={props.placeholder}
        />
        <NavLink to={`/search?${inputValue}`}>
          <button>
            <Search />
          </button>
        </NavLink>
      </form>
    </SearchbarStyled>
  )
}

export default Searchbar
