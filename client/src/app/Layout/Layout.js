import React from 'react'
import Header from '../Component/Common/Header'
import Footer from '../Component/Common/Footer'
import Navbar from '../Component/Common/Navbar'

const Layout = ({ children }) => {
  return (
    <main className='w-full bg-white'>
      {/* <Header /> */}
      <Navbar />
      <section className='w-full h-full'>{children}</section>
      <Footer />
    </main>
  )
}

export default Layout
