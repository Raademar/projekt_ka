import React from 'react'
import { Input, SearchbarStyled } from './style'
import Search from '../icons/Search'
const Searchbar = () => {
  return (
    <SearchbarStyled>
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
