
import React from 'react'
import Work from './component/work'
import Header from './component/navbar/Top_down/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './multipage/Home'
import News from './multipage/News'
import Contact from './multipage/Contact'
import Navbar from './component/navbar/Navbar'
import Footer from './component/navbar/Top_down/footer'
import Wellpaper from './component/navbar/wellpaper'
const App = () => {

  // Background 

  return (
    <div className=" relative">
      
      <div className=" relative">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/News' element={<News />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
