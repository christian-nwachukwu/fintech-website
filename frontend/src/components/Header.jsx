import React from 'react'
import Logo from './Logo'
import './header.css' // Assuming you have a CSS file for styling
import SearchBar from './SearchBar'
import Nav from './Nav'

const Header = () => {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
        {/* {logo} */}
        <Logo />
        {/* {search bar} */}
        <SearchBar />
        {/* {nav} */}
        <Nav />
    </header> 
)
}

export default Header 