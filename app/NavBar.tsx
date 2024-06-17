 import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  const links = [
    {label : 'dashboard', link : '/dashboard' },
    {label : 'issues', link : '/issues' }
  ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
    <Link href= "/"> logo</Link>
    <ul className='flex space-x-6' >
      {links.map(link => <Link key={link.label} className='text-zinc-500 hover:text-zinc-800 transition-colors' href = {link.link}>{link.label}</Link>)}
        
    </ul>
    </nav>
  )
}

export default NavBar