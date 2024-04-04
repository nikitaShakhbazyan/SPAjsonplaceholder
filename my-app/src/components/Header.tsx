import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        Click Here to be redirected to the 
        <NavLink to={'/'}> Main Page</NavLink>
    </div>
  )
}

export default Header