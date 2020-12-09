import React from 'react'
import github from '../images/github.png'
import gmail from '../images/gmail.png'
import linkedin from '../images/linkedin.png'
import ContactUs from './ContactUs'
import { zoomIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  zoomIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(zoomIn, 'zoomIn')
  }
}


const Contact = () => {
  return (
    <StyleRoot>
    <div className='contact-div' style={styles.zoomIn}>
     <h1>Let's talk!</h1>
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
      <ContactUs />
    </div>
    </StyleRoot>
  )
}

export default Contact
