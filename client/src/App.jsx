import React from 'react';
import './App.css';
import Navigation from './pages/navigation/Navigation'
import Profile from './pages/userProfile/profile';
import Login from './pages/loginPage/login';
import Send from './pages/sendMoneyPage/Send'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


function App() {
  return (
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element ={<Login/>} />
          <Route path="/profile" element ={<Profile/>} />
          <Route path="/send" element ={<Send/>} />

        </Routes>
      </Router>
  )
}

export default App
