import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='container mt-3'>
        <h2>Bienvenido al sistema de control.</h2>
      </div>
      <Footer full={true}/>
    </>
  )
}

export default Home