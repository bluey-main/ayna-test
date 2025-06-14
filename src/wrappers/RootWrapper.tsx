import React from 'react'
import ScrollToTop from '../components/common/ScrollToTop'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const RootWrapper = () => {
  return (
    <>
    <ScrollToTop />
      <div className="flex flex-col jus min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Outlet/>
        </main>
        <Footer />
      </div>
      </>
  )
}

export default RootWrapper