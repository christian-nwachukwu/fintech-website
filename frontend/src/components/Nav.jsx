import React from 'react'
import './nav.css'
import NavNotice from './NavNotice'
import NavMessage from './NavMessage'
import NavAvatar from './NavAvatar'

const Nav = () => {
  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        {/* {notification} */}
        <NavNotice />
        {/* {message} */}
        <NavMessage />
        {/* {avatar} */}
        <NavAvatar />
      </ul>
    </nav>
  )
}

export default Nav