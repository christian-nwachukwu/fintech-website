import React from 'react'
import profileImg from '../images/user.jpeg'
import profileImg1 from '../images/user1.jpeg'
import profileImg2 from '../images/user2.jpeg'
import profileImg3 from '../images/user3.jpeg'


const NavMessage = () => {
  return (
    <li className="nav-item dropdown">
        <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-chat-left-text"></i>
            <span className="badge bg-success badge-number">3</span>
        </a>

        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
            <li className="dropdown-header">
            You have 3 new messages
                <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
            </li>


            <li>
                <hr className="dropdown-divider" />
            </li>


            <li className="message-item">
                <a href="#">
                <img src={profileImg3} alt="" className="rounded-circle" />
                  <div>
                      <h4>Peter Gregory</h4>
                      <p>Your account has been updated.</p>
                      <p>20 min. ago</p>
                  </div>
                </a>
            </li>

            <li>
               <hr className="dropdown-divider" /> 
            </li>

            <li className="message-item">
                <a href="#">
                <img src={profileImg1} alt="" className="rounded-circle" />
                  <div>
                      <h4>Julia Snow</h4>
                      <p>Your account has been updated.</p>
                      <p>40 min. ago</p>
                  </div>
                </a>
            </li>
            
            <li>
                <hr className="dropdown-divider" />
            </li>

            <li className="message-item">
                <a href="#">
                <img src={profileImg2} alt="" className="rounded-circle" />
                  <div>
                      <h4>Alexander Nwachukwu</h4>
                      <p>Your account has been updated.</p>
                      <p>2 hours ago</p>
                  </div>
                </a>
            </li>

            <li>
                <hr className="dropdown-divider" />
            </li>

            <li className="dropdown-footer">
                <a href="#">Show all messages</a>
            </li>
        </ul>
    </li>
  )
}

export default NavMessage