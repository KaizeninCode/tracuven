import React from 'react'
import Home from './sections/Home'
import About from './sections/About'
import WhatWeDo from './sections/WhatWeDo'
import Contact from './sections/Contact'

const App = () => {
  return (
    <main className='w-full min-h-screen'>
      <Home/>
      <About/>
      <WhatWeDo/>
      <Contact/>
    </main>
  )
}

export default App
