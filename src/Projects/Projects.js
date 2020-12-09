import React from 'react'
import MM from '../images/MM.png'
import swattr from '../images/swattr.png'
import LFF from '../images/LFF.png'

const Projects = () => {
  return (
    <div className='projects-div'>
      <h1>I build innovative and intuitive applications.</h1>

      <div className='theSwattr'>
        <h2>theSwattr</h2>
        <img src={swattr} alt='theSwattr'></img>
        <h3>Tech Stack: React, Node.js, Express, Postgresql</h3>
        <p>theSwattr is a development team tool that helps track submitted bugs in order of severity and status. 
          This application doubles as a user ticket system where registered users can submit bugs to the development team.
          In addition the user and development team can communicate via a built in comment thread that is attached to each bug.
          </p>
        <p>Live Link: <a href='https://cap3-client-team-a.vercel.app/' target='Blank'>theSwattr</a></p>
        <p>GitHub Client Link: <a href='https://github.com/Mark-The-Dev/theSwattr-Client' target='Blank'>Client Repo</a></p>
        <p>GitHub Server Link: <a href='https://github.com/Mark-The-Dev/theSwattr-Server/tree/master' target='Blank'>Server Repo</a></p>
      </div>
      <div className='mindful-muscle'>
        <h2>Mindful Muscle</h2>
        <img src={MM} alt='mindful-muscle'></img>
        <h3>Tech Stack: React, Node.js, Express, Postgresql</h3>
        <p>Mindful Muscle is a personal growth tool that customizes a exercise plan that works for you! 
        This application provides video instructions for each exercise to offer a safe plan to exercise and 
        does the leg work in creating a customized program based on your inputs.
          To use this application simply create an account, login, and set:<br></br><br></br>
          
          How often you want to exercise.<br></br><br></br>
          What your primary goal is.<br></br><br></br>
          What equipment that you have available (bonus: none is an available option).<br></br><br></br>
         
          If you followed these directions. Congratulations! You now have your very own customized workout plan based on your goals! 
        </p>
        <p>Live Link: <a href='https://m-muscle-client.vercel.app/' target='Blank'>Mindful Muscle</a></p>
        <p>GitHub Client Link: <a href='https://github.com/Mark-The-Dev/Mindful_Muscle_Client' target='Blank'>Client Repo</a></p>
        <p>GitHub Server Link: <a href='https://github.com/Mark-The-Dev/Mindful_Muscle_Server' target='Blank'>Server Repo</a></p>
      </div>
      <div className='learn-funny-french'>
        <h2>Learn Funny French Phrases</h2>
        <img src={LFF} alt='learn-funny-french'></img>
        <h3>Tech Stack: React, Node.js, Express, Postgresql</h3>
        <p>Learn Funny French Phrases is a tool to learn french with spaced repetition. This application works specifically 
          with funny french expressions that you could use in every day life! This application is for anyone who wants to learn 
          a little french, as well as have fun doing so! </p>
        <p>Live Link: <a href='https://client-snowy.vercel.app' target='Blank'>Learn Funny French Phrases</a></p>
        <p>GitHub Client Link: <a href='https://github.com/Mark-The-Dev/Funny-French-Phrases-Client' target='Blank'>Client Repo</a></p>
        <p>GitHub Server Link: <a href='https://github.com/Mark-The-Dev/Learn-Funny-French-Phrases-Server' target='Blank'>Server Repo</a></p>
      </div>

    </div>
  )
}

export default Projects

/*
The Project section:

is easy to find and each project is visible
has a clear, understandable layout
includes at least 3 original projects
Each project includes:

the title of your project
a description that explains what the app does, who it’s for, and why you built it (this text should not be hidden behind a hover or click event)

a list of skills/technology used (i.e. Node, Express, PostgreSQL, React)
compelling screenshots

a link to GitHub repo
a link to the live, working app
*/