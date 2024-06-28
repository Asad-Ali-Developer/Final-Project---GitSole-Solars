import React from 'react';
import Corousel from './Corousel';

const Sections = () => (
  <div>
    <section id="home" className='h-[100vh]'>

     <Corousel />  

     
        <div className="carousel-content absolute top-20 -translate-x-1/4 text-white p-4 font-sans">  

          <h2 className="heading text-3xl text-zinc-100 font-bold mb-5">Our Installation Team</h2>

          <p className="contentPara text-md indent-5 text-justify">Installation, We take personal pride in the quality of our Installation Team, having honed them into a tight unit with unrivalled experience and attention to detail. We are a cut above with our passion for accuracy and quality. With a focus on delivering projects as per customer needs Actimake Solutions is revolutionizing the way end customers receive solar energy, we are their choice to build trust in solar industry.
          </p>

          <div className="mt-8 font-semibold space-x-4">

            <a href='#services' className="btnIntro px-4 py-2 border-[1px] border-white text-white rounded
             hover:bg-blue-600">Our Installation Services</a>

          </div>


        </div> 
     
    </section>

    <section id="about"
      className="section bg-gray-100 text-gray-800 text-center flex items-center justify-center h-screen" >

      <div className="p-4 md:p-8 lg:p-12 xl:p-16">

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold"> About Section </h1>
        
        <p>About us content.</p>

      </div>

    </section>
    

    <section id="services"
      className="section bg-gray-800 text-white text-center flex items-center justify-center h-screen">

      <div className="p-4 md:p-8 lg:p-12 xl:p-16">

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">
          Services Section
        </h1>
        <p>Our services content.</p>
      </div>
    </section>
    <section
      id="contact"
      className="section bg-gray-100 text-gray-800 text-center flex items-center justify-center h-screen"
    >
      <div className="p-4 md:p-8 lg:p-12 xl:p-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">
          Contact Section
        </h1>
        <p>Contact us content.</p>
      </div>
    </section>
  </div>
);

export default Sections;
