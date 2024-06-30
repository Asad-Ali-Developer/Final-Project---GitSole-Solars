import React from 'react';
import Links from './Links'

const Footer = () => (
  <footer className="bg-[#112047]  text-center py-3 ">


    <div className="mainContainer flex gap-20 px-10 py-10 flex-wrap justify-center items-top">

      <div className="Link bg-zinc-100 sm:h-8 md:h-10 xl:h-10 2xl:h-11 rounded-lg">
        <Links />
      </div>

      <div className="quick-links text-white flex flex-col gap-3 text-left">
        <h1 className='font-medium text-lg mb-2'>Quick Links</h1>
        <a className='text-sm text-zinc-100' href="#about">About GitSole Solar</a>
        <a className='text-sm text-zinc-100' href="#">Site Survey</a>
        <a className='text-sm text-zinc-100' href="#">Inverters</a>
        <a className='text-sm text-zinc-100' href="#">Contact Us</a>
        <a className='text-sm text-zinc-100' href="#">FAQ</a>
      </div>

      <div className="our-services text-white flex flex-col gap-3 text-left">
        <h1 className='font-medium text-lg mb-2'>Our Services</h1>
        <a className='text-sm text-zinc-100' href="#">Solar System O&M</a>
        <a className='text-sm text-zinc-100' href="#">Solar Industrial System</a>
        <a className='text-sm text-zinc-100' href="#">Solar Agricutltural/Street Light Solutions</a>
        <a className='text-sm text-zinc-100' href="#">Solar Micro/ Mini Solutions</a>
      </div>


    </div>


    <p className='text-white text-sm'> © 2024 GitSole Solar. All Rights Reserved.</p>
  </footer>
);

export default Footer;
