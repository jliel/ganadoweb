import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Reportes = () => {
    return (
        <>
          <Navbar/>
          <main className="flex-shrink-0 mb-5">
            <div className='container container-nav'>
    
            <h2>Reportes</h2>
            <Outlet/>
            </div>
          </main>
    
          <Footer />
        </>
      )
}

export default Reportes