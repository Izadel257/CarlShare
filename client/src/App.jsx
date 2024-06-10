import { useState } from 'react'
import './App.css'
import Navigation from './pages/navigation/Navigation'
import Profile from './pages/userProfile/Profile'
import Login from './pages/loginPage/login'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element ={<Login/>} />
          <Route path="/profile" element ={<Profile/>} />
        </Routes>
      </Router>
  )
}

export default App
