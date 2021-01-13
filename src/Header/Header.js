import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='projects'>Projects</Link>
          <Link to='contact'>Contact</Link>
          <a href='https://docs.google.com/document/d/1eZUrfCBuc2OLjHcpPhVBHY_oGJuV6dwMXypp82S2mik/edit?usp=sharing' target='Blank'>Resume</a>
        </nav>

    </header>
  ) 
}

export default Header
