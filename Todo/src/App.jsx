import { useState } from 'react'

import './App.css'
import Button from './components/Button'
import NavBar from './components/NavBar'
import UserInput from './components/UserInput'
import Hero from './components/Hero'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <main className=' w-full h-screen mt-14'>
        <Hero />
        <NavBar />
        <UserInput />
        <Footer />
      </main>     
    </>
  )
}

export default App
