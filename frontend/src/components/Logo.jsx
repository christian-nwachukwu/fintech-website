import React from 'react'
import './logo.css' // Assuming you have a CSS file for styling

const Logo = () => {

    const handleToggleSideBar = () => {
        document.body.classList.toggle('toggle-sidebar')
    }

  return (
    <div className="d-flex align-items-center justify-content-center">
        <a href="/" className="logo d-flex align-items-center">
            {/* Assuming you have a logo image */}

            {/* <img src="path/to/logo.png" alt="Logo" /> */}
            <span className="d-none d-lg-block">AdminDashBoard</span>
        </a>
        <i className="bi bi-list toggle-sidebar-btn"
              onClick={handleToggleSideBar} 
        ></i>
    </div>
  )
}

export default Logo