import React from 'react'
import Header from '../components/Header'

const Home = () => {
  return (
    <section className='w-fullmin-h-screen' id='home'>
      <Header/>
      <div className='w-full flex justify-between items-center'>
        <img src="/hero.jpg" alt="hero" className='w-3/5 ml-8'/>
        <div className='mx-20'>
            <span className='font-bold text-[60px]'>Tracuven Enterprises</span>
            <p className='font-montserrat mt-8 text-2xl'>Study abroad with us today.</p>

        <button className='rounded-xl border p-2 mt-8 bg-emerald-400'>
            <a href="#about">Find out how</a>
        </button>
        </div>
      </div>
    </section>
  )
}

export default Home
