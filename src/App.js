import React from 'react'
import Header from './Header/Header'
import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import './App.css';
import {Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
     <Header />
     <Switch>
      <Route
      exact path='/'
      component={Home}
      >
      </Route>
      <Route exact path='/about'
      component={About}
      >
      </Route>
      <Route exact path='/projects'
      component={Projects}
      >
      </Route>
      <Route exact path='/contact'
      component={Contact}
      >
      </Route>

     </Switch>
    </div>
  );
}

export default App;
