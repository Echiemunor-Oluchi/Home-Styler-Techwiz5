import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Home from './pages/home/Home'

const App = () => {
  return (
    <div>
      <div className='firstpage'>
      <Home />
      <div>
      <Navbar />
      </div>
      </div>
     
    </div>
  )
}

export default App