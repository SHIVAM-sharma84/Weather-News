import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row md:gap-10 gap-5'>
      <Link to='/' className='transition-all px-5 py-2  duration-300 ease-in-out hover:bg-blue-500  hover:text-white hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 hover:rounded-4xl text-2xl '>Home</Link>
      <Link to='/News' className='transition-all px-5 py-2 duration-300 ease-in-out  hover:bg-blue-500 hover:text-white text-xl hover:rounded-4xl md:text-2xl '>News</Link>
      <Link to='/Contact' className='transition-all duration-300 ease-in-out px-5 py-2 hover:text-white hover:bg-blue-500 text-xl hover:rounded-4xl md:text-2xl '>Contact</Link>
    </div>
  )
}

export default Navbar
