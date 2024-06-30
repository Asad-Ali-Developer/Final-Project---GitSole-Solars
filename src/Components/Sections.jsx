import React from 'react';
import Carousel from './Carousel';
import GridTypes from './types-of-grid';
import Services from './Services';
import SignUpForm from './SignUpForm';

const Sections = () => (
  <div>
    <section id="home" className="relative h-[100vh]">

      <Carousel />

      <div className="carousel-content flex flex-col absolute top-20 left-1/2 transform -translate-x-1/2 text-white p-4 font-sans">
        <h2 className="heading text-3xl text-zinc-100 font-bold">Our Installation Team</h2>
        <p className="carouselText text-md indent-5 text-justify">
          Installation, We take personal pride in the quality of our Installation Team, having honed them into a tight unit with unrivalled experience and attention to detail. We are a cut above with our passion for accuracy and quality. With a focus on delivering projects as per customer needs Actimake Solutions is revolutionizing the way end customers receive solar energy, we are their choice to build trust in solar industry.
        </p>
        <div className="flex font-semibold space-x-4">
          <a href="#services" className="btnIntro px-4 py-2 border-[1px] border-white text-white rounded">Our Installation Services</a>
        </div>
      </div>
    </section>


    <section id="services" className="section bg-slate-100 py-20 text-white text-center
    h-auto">
    
        <h1 className="text-2xl sm:text-3xl underline text-green-600 md:text-2xl lg:text-3xl font-semibold">
        Types of Solar Systems</h1>

        <GridTypes />

        <h1 className='text-2xl sm:text-2xl underline text-green-600 md:text-3xl lg:text-3xl font-semibold mt-20'>Our services</h1>

        <Services />

        <div className="payment-methods mt-20">

          <h4 className='text-center font-semibold text-black text-lg sm:text-md md:text-lg lg:text-xl xl:text-xl'>We Accepts:</h4>

          <div className="methods flex justify-center mt-5 items-center w-full h-10 gap-5">
            <img className='' src="https://www.scribbr.com/wp-content/themes/scribbr-2017/img/paymentlogos/new/mc.svg" alt="MasterCard" />
            <img src="https://www.scribbr.com/wp-content/themes/scribbr-2017/img/paymentlogos/new/visa.svg" alt="Visa" />
            <img className='w-10 h-10' src="https://www.scribbr.com/wp-content/themes/scribbr-2017/img/paymentlogos/new/paypal.svg" alt="PayPal" />
            <img src="https://www.scribbr.com/wp-content/themes/scribbr-2017/img/paymentlogos/new/googlepay.svg" alt="Google Pay" />
          </div>

        </div>

    </section>
    


    <section id="about" className="section bg-zinc-100 text-gray-800 text-center  h-auto">
      <div className="px-4 py-4 md:p-8 lg:p-12 xl:p-16 flex items-center flex-col justify-center">

        <div className="overview relative my-20 flex flex-col justify-center items-center">
          <img className='w-80 h-80 absolute -top-10' src="https://www.netsolar.pk/images/background/pattern-image-1.png" alt="" />

          <div className="text-log flex justify-center items-center gap-5">
          <h6 className='text-green-600 font-semibold'>WHO ARE GITSOLE SOLAR </h6>
          <img className='w-5' src="images/logo.svg" alt="logo.svg" />
          </div>

          <h2 className='font-medium text-lg my-10'>Helping Smart Comapnies With Better Integrated Solar Solutions</h2>
          <h5 className='text-blue-600 font-medium'>For Controling Your Energy Production</h5>

          <div className="decoration flex gap-1 mt-4">
            <div className="circle w-10 h-1 rounded-full bg-blue-500"></div>
            <div className="circle w-1 h-1 rounded-full bg-blue-500"></div>
            <div className="circle w-1 h-1 rounded-full bg-blue-500"></div>
            <div className="circle w-1 h-1 rounded-full bg-blue-500"></div>
          </div>
        </div>


        <h1 className="text-xl mt-20 sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold text-green-600">Our Companys Overview (Introduction)</h1>

        <p className='aboutPara w-[80%] text-justify indent-10 mt-5 m-auto'> <strong>GitSole Solar </strong> company was formed in August 2020 by a team of entrepreneurs, solar technologists, EPC developer partners and solar design specialists to provide state of the art, high quality, cost effective solar residential, commercial, agricultural and industrial solutions as well as small & medium sized solar power plants on lump-sum turnkey basis in All over the world. We also offer solar plants O&M services with environment friendly practices and energy efficiency applications. We are an EPC (Engineering, Procurement & Construction) company as well as O&M (Operation and Maintenance) company providing full scope of services on ground mounted solar power plants and rooftop installations. GitSole solar is committed to provide affordable solar solutions with ROI of 4 years by deploying best quality tier-one solar panels, best in class solar inverters, top branded batteries, solar pump drives, aluminum mounting structure etc. for residential, commercial, agricultural, community, government, industrial, institutional and Not-for-profit customers.</p>
      </div>
    </section>





    <section id="contact" className="section flex items-center flex-col  justify-center h-auto
   w-full my-32">

      <SignUpForm />
    
    </section>
  </div>
);

export default Sections;
