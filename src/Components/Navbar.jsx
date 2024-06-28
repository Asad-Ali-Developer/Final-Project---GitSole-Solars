import React, { useState } from 'react';

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="NavBar bg-gray-800 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="logo text-white font-bold text-xl">
              <img src="images/logo.jpg" width={40} alt="logo" />
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-7">
              <a href="#home" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-3 rounded-md text-sm font-medium"> Home </a>
              <a href="#about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-3 rounded-md text-sm font-medium"> About </a>
              <a href="#services" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-3 rounded-md text-sm font-medium"> Services </a>
              <a href="#contact" className="text-gray-300 bg-gray-700 hover:text-white px-3 py-3 rounded-md text-sm font-medium"> Contact Us </a>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`navMobile ${isOpen ? 'open' : ''} md:hidden`}>
        <div className="px-4 pt-2 pb-3 space-y-1 sm:px-4">
          <a href="#home" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"> Home </a>
          <a href="#about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"> About </a>
          <a href="#services" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"> Services </a>
          <a href="#contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"> Contact </a>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
