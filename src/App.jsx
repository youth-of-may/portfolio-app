import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainLayout from './layout/MainLayout'
import About from './pages/About';
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Projects from './pages/Projects'

function App() {


  return (
    <>
      <MainLayout>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/contacts" element={<Contact/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
        </BrowserRouter>
        
      </MainLayout>
    </>
  )
}

export default App
