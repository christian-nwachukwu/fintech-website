import React from 'react'
import './searchBar.css'

const SearchBar = () => {
  return (
    <div className="search-bar">
        <form className="search-form d-flex align-items-center"
        method='POST'
        action="#"
        >
            <input 
                type="text" 
                title="search-input" 
                placeholder="Search" 
                name="query"
            />
            <button type="submit" title="Search">
                <i className="bi bi-search"></i>
            </button>
        </form>
    </div>
  )
}

export default SearchBar