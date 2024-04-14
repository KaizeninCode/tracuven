import React from 'react'

const Header = () => {
    const navlinks = [
        {
            name: 'About Us',
            url: '#about'
        },
        {
            name: 'What We Do',
            url: '#what-we-do'
        },
        {
            name: 'Contact',
            url: '#contact'
        },
    ]
  return (
    <header className='w-full items-center justify-center flex pt-4'>
      <a className='mr-auto text-2xl font-montserrat ml-12' href={'#home'}>TRACUVEN ENTERPRISES LIMITED</a>
      <nav className='flex justify-center items-center mr-12'>
        {navlinks.map(link =>(
            <a key={link.url} href={link.url} className='font-montserrat text-xl mr-8'>{link.name}</a>
        ))}
      </nav>
    </header>
  )
}

export default Header
