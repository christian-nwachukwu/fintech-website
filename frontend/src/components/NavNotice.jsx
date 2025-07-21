import React from 'react'


const NavNotice = () => {
  return (
    <li className="nav-item dropdown">
        <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-bell"></i>
            <span className="badge bg-primary badge-number">4</span>
        </a>

        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
            <li className="dropdown-header">
            You have 4 new notifications
                <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
            </li>


            <li>
                <hr className="dropdown-divider" />
            </li>


            <li className="notification-item">
                <i className="bi bi-exclamation-circle text-warning"></i>
                <div>
                    <h4>Message from Alexander</h4>
                    <p>Your account has been updated.</p>
                    <p>20 min. ago</p>
                </div>
            </li>

            <li>
               <hr className="dropdown-divider" /> 
            </li>

            <li className="notification-item">
                <i className="bi bi-check-circle text-success"></i> 
                <div>
                    <h4>Transaction Successful</h4>
                    <p>Your payment of $200 was successful.</p>
                    <p>1 hour ago</p>
                </div>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>

            <li className="notification-item">
                <i className="bi bi-info-circle text-info"></i>
                <div>
                    <h4>System Update</h4>
                    <p>We have updated our terms of service.</p>
                    <p>2 hours ago</p>
                </div>
            </li>

            <li>
                <hr className="dropdown-divider" />
            </li>

            <li className='notification-item'>
                <i className="bi bi-people text-primary"></i>
                <div>
                    <h4>New User Registration</h4>
                    <p>John Doe has registered.</p>
                    <p>3 hours ago</p>
                </div>
            </li>

            <li>
                <hr className="dropdown-divider" />
            </li>

            <li className="dropdown-footer">
                <a href="#">Show all notifications</a>
            </li>
        </ul>
    </li>
  )
}

export default NavNotice