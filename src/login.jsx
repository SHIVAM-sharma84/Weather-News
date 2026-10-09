import React from 'react'
import App from './App'
import { Route, Routes } from 'react-router-dom'
import Home from './multipage/Home'
import News from './multipage/News'
import Contact from './multipage/Contact'
import Navbar from './component/navbar/Navbar'
import Header from './component/navbar/Top_down/Header'
import Footer from './component/navbar/Top_down/footer'
const Login = () => {
  return (
    <div className='relative  w-full'>
      <App/>
    </div>
  )
}

export default Login
