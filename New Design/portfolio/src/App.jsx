import React from 'react'
import Home from './Components/Home/Home.jsx' 
import About from './Components/About/About.jsx'
import Skills from './Components/Skills/Skills.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./index.css"
import Projects from './Components/Projects/Projects.jsx';
import Contact from "./Components/ContactMe/Contact.jsx"

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App