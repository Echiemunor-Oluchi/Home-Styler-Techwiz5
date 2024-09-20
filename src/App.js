
import './App.css';
import Findprofessionals from './pages/Findprofessionals/Findprofessionals';
import { BrowserRouter } from 'react-router-dom';
import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Product from '../src/Product'

const App = () => {
  return (
    <div>

      <div className='firstpage'>
        <Home />
        <div>
          <Navbar />
        </div>
        <div>

          <Product></Product>

        </div>

        <div>
          <Findprofessionals></Findprofessionals>

        </div>
      </div>
    </div>

  )
}

export default App
