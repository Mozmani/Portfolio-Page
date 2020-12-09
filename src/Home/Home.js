import React from 'react'
import {Link} from 'react-router-dom'
import github from '../images/github.png'
import gmail from '../images/gmail.png'
import linkedin from '../images/linkedin.png'

const Home = () => {
  return (
    <div className='home'>
      <div className='h2-header'>
        <h2>Hi, I'm Mark.</h2>
      </div>
      <div className='h1-header'>
        <h1>Software Developer. People Person. </h1>
      </div>
      <div className='home-desc'>
        <p>JavaScript full stack developer who builds, designs and fixes applications</p>
        <ul>
          <h3>List of services:</h3>
        <li>Custom Applications</li>
        <li>Custom Webpages</li>
        <li>Freelance Development</li>
        </ul>
        <Link to='/contact'>Contact me!</Link>
      </div>
      <div className='contact-bar'>
        <a href='https://github.com/Mark-The-Dev' target='Blank'> <img src={github} alt='GitHub'>
        </img>
          </a>
          <a href='mailto:SwiftTactics@gmail.com'>
        <img src={gmail} alt=''>

        </img>
        </a>
        <a href='https://www.linkedin.com/in/mark-marcello/' target='Blank'>
        <img src={linkedin} alt=''>
        </img>
        </a>
      </div>
      
    </div>
  )
}

export default Home
