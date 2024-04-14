import React from 'react'

const WhatWeDo = () => {
    const services = [
        {
            service: 'Course Advice',
            description: 'Depending on the level of education one intends to pursue, there are different academic requirements one must meet in order to be admitted to various study programs. Since entry requirements for institutions may vary. Our team will be available to help you navigate this.'
        },
        {
            service: 'Visa Processing',
            description: 'We will ensure you have all the necessary documents and meet the deadlines to make your visa application successful.'
        },
        {
            service: 'Pre Departure Support',
            description: 'We will assist the learner to prepare adequately with all the information, material and documents required for successful travel, learning and stay while away. '
        }               
    ]
  return (
    <section id='what-we-do' className='w-full min-h-screen'>
      <div className='flex items-center justify-evenly h-screen'>
          <div className='flex flex-col items-center justify-around w-1/2 ml-12'>
            {services.map(service => (
                <div key={service.service} className='mx-6'>
                    <h2 className='font-montserrat text-2xl font-bold'>{service.service}</h2>
                    <p className='font-montserrat mb-3 text-xl'>{service.description}</p>
                </div>
            ))}
          </div>
          <div className='w-1/2 flex flex-col items-center justify-around mr-12'>
            <p className='font-montserrat text-xl'>To ensure we provide value, we work with individual students, teachers, schools, academics, and institutions to ensure high success rates. We ensure that all constituents are knowledgeable about the educational opportunities available as they forge a path to their success. <br /> <br />TEL has provided direct benefit to our clients through competitive pricing, scalable capabilities, and building quality partnerships. We are committed to equal opportunity and diversity, which is clearly visible in throughout our workforce today. We are dedicated to building the necessary foundation for a sustainable future.</p>
          </div>
      </div>
    </section>
  )
}

export default WhatWeDo
