import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const Ganado = () => {
  return (
    <>
      <Navbar/>
      <div className='container mt-3'>
        <h2>Control de Ganado</h2>
        <Outlet/>

      </div>
      <Footer />
    </>
  )
}

export default Ganado