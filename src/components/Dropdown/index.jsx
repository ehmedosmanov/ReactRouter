import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
const Dropdown = () => {
  return (
    <ul className='dropdown'>
      <li>
        <Link to={'About/MarkUp'}>Page Markup And Formatting</Link>
      </li>
      <li>
        <Link to={'About/Contact'}>Contact Form</Link>
      </li>
      <li>
        <Link to={'About/PageImage'}>Page Image</Link>
      </li>
      <li>
        <Link to={'About/PageFloats'}>Clearing Floats</Link>
      </li>
      <li>
        <Link to={'About/Comments'}>Page With comments</Link>
      </li>
      <li>
        <Link to={'About/NoComments'}>Page with comments disabled</Link>
      </li>
    </ul>
  )
}

export default Dropdown
