import React from 'react'

import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className='bg-blue-500 text-white p-4 flex justify-between'>
        <h1 className='font-bold text-xl'>Travel Explorer</h1>
        <div className='space-x-4'>
            <Link to='/'>Home</Link>
            <Link to='/destinations'>Destinations</Link>
            <Link to='/about'>About</Link>
        </div>
    </nav>
  )
}

export default Header
