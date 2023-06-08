import React from 'react'

const SearchBar = ({placeholder, onChange}) => {
  return (
    <input type="text" placeholder={placeholder} className="search_bar pl-4 pr-4" onChange={onChange} />
  )
}

export default SearchBar