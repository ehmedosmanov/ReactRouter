import { useState } from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'
import Dropdown from '../../components/Dropdown'
import './index.scss'

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <nav id='nav'>
      <h1>
        <NavLink activeClassName='active' className={'logo'} to={'/'}>
          Dazzling Demo
        </NavLink>
      </h1>
      <ul className='navbar-items'>
        <li className='navbar-item'>
          <NavLink activeClassName='active' to={'/'}>
            Home
          </NavLink>
        </li>
        <li className='navbar-item'>
          <NavLink activeClassName='active' to={'/Gallery'}>
            Gallery
          </NavLink>
        </li>
        <li className='navbar-item'>
          <NavLink activeClassName='active' to={'/Shortcodes'}>
            Shortcodes
          </NavLink>
        </li>
        <li className='navbar-item' onClick={toggleDropdown}>
          About
          {isDropdownOpen && <Dropdown />}
        </li>
        <li className='navbar-item'>
          <NavLink activeClassName='active' to={'/Languages'}>
            Languages
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
