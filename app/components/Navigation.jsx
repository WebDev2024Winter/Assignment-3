"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from "next/link"

const Navigation = () => {
    const pathname = usePathname();

    const NavItems = [
        { label: "Home", href: "/" },
        { label: "Movies", href: "/Movies" },
        { label: "New Movies", href: "/NewMovies" },
        { label: "Most Popular", href: "/MostPopular" },
        { label: "About", href: "/About" },
        { label: "Contact", href: "/Contact" }
    ]

    return (
    <nav className='relative container mx-auto bg-red-700 text-white p-6'>
        <div className="flex items-center justify-between">

          <div className='mx-16 w-32 h-16 '>
            <a href='/'>
            <h1 className='text-4xl font-bold text-red-200 font-mono shadow-2xl'>Movies Database</h1>
            </a>
          </div>

          <div className='flex-row space-x-6 mr-12 text-xl font-semibold text-red-200'>
            {
                NavItems.map((item, index) => (
                    <Link key={index}
                    href={item.href}
                    className={ pathname === `${item.href}` ? 'font-bold text-red-950 shadow-md' : '' }
                    > {item.label} </Link>
                ))
            }
        
          </div>
          
          <div className='flex flex-row justify space-x-1 shadow-lg'>
            <input className='text-red-700 p-2 rounded-xl font-semibold'
            type='text'
            placeholder='Search'
            />

            <button type='button' className='bg-red-700 px-4 py-4 hover:bg-red-900 font-semibold rounded-md'>Search</button>
          </div>
        
        </div>
    </nav>
  )
}

export default Navigation