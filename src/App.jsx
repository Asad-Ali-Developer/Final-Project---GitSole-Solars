import React, { useEffect } from 'react'
import MyNavbar from './Components/Navbar';
import Sections from './Components/Sections';
import Footer from './Components/Footer';

const App = () => {

  return (
    <>

      <div className="font-sans">
        <MyNavbar />
        <Sections />
        <Footer />
      </div>

    </>
  )
}

export default App
