import React from 'react'

const About = () => {
  return (
    <section className='w-full min-h-screen bg-emerald-100' id='about'>
      <div className='flex flex-1 items-center justify-center flex-col h-screen pl-12 pr-12 w-full'>
        <p className='font-montserrat text-xl mt-6 text-left'>Tracuven Enterprises Limited (TEL) is a private limited liability company incorporated in Kenya under the <span className='font-bold'>Companies Act</span>. TEL specializes in provision of a wide range of services to support you with your international education journey. Tracuven embodies a hands-on culture that ensures assistance in accessing quality education not only in the East Africa Region but also beyond. With a team of dedicated staff offering a wide range of consultancy services, dreams of studying overseas are realized. <br /> <br /> 
        TEL boasts of a <em className='font-bold'>highly qualified</em> and <em className='font-bold'>professional</em> team of experienced, dedicated and committed professionals in the various operations to enhance delivery of quality services. <br /><br />The organization aims to <span className='font-bold'>develop strong teams, empower people and the community, provide quality services to ensure customer expectations are met</span>, if not exceeded.</p>
        
        <p className='font-montserrat text-xl text-left mt-6'>To ensure we provide value, we work with individual students, teachers, schools, academics, and institutions to ensure high success rates. We ensure that all constituents are knowledgeable about the educational opportunities available as they forge a path to their success. <br /> <br />TEL has provided direct benefit to our clients through competitive pricing, scalable capabilities, and building quality partnerships. We are committed to equal opportunity and diversity, which is clearly visible in throughout our workforce today. We are dedicated to building the necessary foundation for a sustainable future.</p>
      </div>
      {/* <div className='w-1/2 flex flex-col items-center justify-around mr-12 right-0'> */}
          {/* </div> */}
    </section>
  )
}

export default About
