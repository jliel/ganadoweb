import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'



const Gastos = () => {
  return (
    <>
      <Navbar/>
      <main className="flex-shrink-0 mb-5">
        <div className='container container-nav'>

        <h2>Control de Gastos</h2>
        <Outlet/>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Gastos