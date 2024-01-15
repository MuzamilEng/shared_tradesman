import React from 'react'
import Header from '../Component/Common/Header'
import Footer from '../Component/Common/Footer'

const Layout2 = ({ children }) => {
  return (
    <main className='w-full bg-white'>
      <Header />
      <section className='w-full h-full'>{children}</section>
      <Footer />
    </main>
  )
}

export default Layout2
