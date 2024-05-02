import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineContactPhone } from "react-icons/md";

const Contact = () => {
    const contactlinks = [
        {
            name:'Email',
            link:'tracuvenent@gmail.com',
            icon:<TfiEmail />
        },
        {
            name:'Phone',
            link:'+254729449143',
            icon:<MdOutlineContactPhone />
        }
    ]
  return (
    <section className='w-full min-h-screen bg-emerald-500' id='contact'>
      <h1 className='text-[60px] text-white font-montserrat text-center mb-20 pt-20'>We'd love to hear from you.</h1>
      {contactlinks.map(link => (
        <div  key={link.link} className='text-white mb-5 font-montserrat flex items-center justify around flex-col'>
            <h3 className='text-[50px]'>{link.name}:</h3>
            <p className='text-[40px] font-roboto'>{link.link}</p>
        </div>
      ))}
    </section>
  )
}

export default Contact
