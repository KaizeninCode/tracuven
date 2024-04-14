import React from 'react'

const About = () => {
  return (
    <section className='w-full min-h-screen' id='about'>
      <div className='flex items-center justify-around h-screen mx-12'>
        <p className='font-montserrat text-xl mx-6 mt-6 w-1/2 text-left'>Tracuven Enterprises Limited (TEL) is a private limited liability company incorporated in Kenya under the <span className='font-bold'>Companies Act</span>. TEL specializes in provision of a wide range of services to support you with your international education journey. Tracuven embodies a hands-on culture that ensures assistance in accessing quality education not only in the East Africa Region but also beyond. With a team of dedicated staff offering a wide range of consultancy services, dreams of studying overseas are realized. <br /> <br /> 
        TEL boasts of a <em className='font-bold'>highly qualified</em> and <em className='font-bold'>professional</em> team of experienced, dedicated and committed professionals in the various operations to enhance delivery of quality services. <br />The organization aims to <span className='font-bold'>develop strong teams, empower people and the community, provide quality services to ensure customer expectations are met</span>, if not exceeded.</p>
        <img src="/about.jpg" alt="about" className='h-4/5' />
      </div>
    </section>
  )
}

export default About
