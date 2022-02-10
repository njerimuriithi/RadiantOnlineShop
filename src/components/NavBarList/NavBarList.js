import React from 'react'
import{Link,Outlet} from 'react-router-dom'
import './NavBarList.scss'
//import Home from './Pages/Home'

function NavBarList() {

  return (
    <div className='navbarlistContainer'>
        <ul>

            <li>
                <Link to="/" >Home</Link>
            </li>
            <li>
                <Link to="/extensionproduct">Extensions</Link>
            </li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default NavBarList