import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Skill from './pages/Skill'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import LowerFooter from './components/LowerFooter'

function App() {
  return (
    <main>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/skill' element={<Skill/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
      <LowerFooter/>
    </BrowserRouter>
    
    </main>
  )
}

export default App
