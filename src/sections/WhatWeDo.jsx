import React from "react";

const WhatWeDo = () => {
  const services = [
    {
      service: "Job Placement",
      description:
        "Our job placement service helps learners find suitable employment opportunities that match their skills and career goals. We provide guidance on resume building, interview preparation, and connect them with potential employers.",
    },
    {
      service: "Course Advice",
      description:
        "Depending on the level of education one intends to pursue, there are different academic requirements one must meet in order to be admitted to various study programs. Since entry requirements for institutions may vary. Our team will be available to help you navigate this.",
    },
    {
      service: "Visa Processing",
      description:
        "We will ensure you have all the necessary documents and meet the deadlines to make your visa application successful.",
    },
    {
      service: "Pre Departure Support",
      description:
        "We will assist the learner to prepare adequately with all the information, material and documents required for successful travel, learning and stay while away. ",
    },
  ];
  return (
    <section id="what-we-do" className="w-full min-h-screen">
      <div className="flex items-center justify-evenly flex-col">
        <div className=" border-black  rounded-lg mt-6">
          <h1 className="font-montserrat font-bold p-3 text-4xl bg-emerald-100 w-fit mx-auto items-center">
            WHAT WE DO
          </h1>
        </div>
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col items-center justify-around w-1/2 ml-12">
            {services.map((service) => (
              <div key={service.service} className="mx-6">
                <h2 className="font-montserrat text-2xl font-bold">
                  {service.service}
                </h2>
                <p className="font-montserrat mb-3 text-xl">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <img src="/about.jpg" alt="about" className="h-4/5" />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
