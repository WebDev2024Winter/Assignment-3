import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-red-800'>
        <div className='container flex flex-row justify-around px-4 py-4 space-y-4 space-x-6'>
          <div className='flex flex-col justify-between px-4 py-4 space-y-3'>
        
            <div className='mx-16 w-60 h-16 '>
                <a href='/'>
                <h1 className='text-2xl font-bold text-white font-mono shadow-red-300'>Movies Database</h1>
                </a>
            </div>
            
          </div>

          <div className='flex flex-col justify-between px-4 py-2 space-y-2 text-red-300 text-sm'>
            <a className='flex flex-row hover:text-gray-800' href='https://twitter.com/MoviesDatabase/'>
              <img src='twitter-icon.svg'/>
              <h6 className='text-sm text-red-300'>Movies Database Twitter</h6>
            </a>

            <a className='flex flex-row hover:text-gray-800' href='https://facebook.com/MoviesDatabase/'>
              <img src='facebook-icon.svg'/>
              <h6 className='text-sm text-red-300'>Movies Database Facebook</h6>
            </a>

            <a className='flex flex-row hover:text-gray-800' href='https://instagram.com/MoviesDatabase/'>
              <img src='instagram-icon.svg'/>
              <h6 className='text-sm text-red-300'>Movies Database Instagram</h6>
            </a>

            <a className='flex flex-row hover:text-gray-800' href='https://reddit.com/MoviesDatabase/'>
              <img src='reddit-icon.svg'/>
              <h6 className='text-sm text-red-300'>Movies Database Reddit</h6>
            </a>

          </div>

          <div className='flex flex-col justify-between px-4 py-2 space-y-2'>
            <a href='/' className='text-red-300 hover:text-gray-800'>Home</a>
            <a href='#' className='text-red-300 hover:text-gray-800'>About</a>
            <a href='#' className='text-red-300 hover:text-gray-800'>Contact</a>
            <a href='#' className='text-red-300 hover:text-gray-800'>Help</a>
          </div>

          <div className='flex flex-col text-red-300 text-xm justify-between p-2 space-y-2'>
            <p className='text-lg'>Movies Database, Inc.</p>
            <p>Phone: +1-443-663-6623</p>
            <p>1155 Lincolin Way, NW, San Francisco, California</p>
            <p>Movies Database Copyright &copy; 2024 All rights reserved.</p>
          </div>
          
        </div>
    </footer>
  )
}

export default Footer