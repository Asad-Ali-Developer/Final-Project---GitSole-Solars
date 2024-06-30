import React from 'react'

const Services = () => {

    const services = [
        {
            type : "Home",
            budget : "500$",
            installationTime : "Install Once",
            payment : "100% down payment",
            systemType : "Offgrid Solar System",
            description : "Complete Installation",
            otherFacility : "Artificial Sunlight"
        },
        {
            type : "Farms",
            budget : "1100$",
            installationTime : "Install Once",
            payment : "Full Coverage",
            systemType : "Ongrid Solar System",
            description : "Complete Installation",
            otherFacility : "Water System",
            otherFacility2 : "Artificial Sunlight"
        },
        {
            type : "Bussiness",
            budget : "1500$",
            installationTime : "Install Once",
            payment : "40% Down Payment",
            systemType : "Hybrid",
            description : "100% Conversion",
            otherFacility : "Water System",
            
        }
    ]

  return (
    <div>
      
    
          <div className="services-cards mt-14 flex flex-wrap sm:w-full justify-center items-center gap-7">

      {services.map((services, index) => (

            <div key={index} className="servicesCard  p-5 w-60 h-auto flex flex-col hhover:-translate-y-1 gap-2 hover:text-green-500 relative border-green-600 border-[1px] hover:border-green-500 bg-transparent overflow-hidden text-green-500 rounded-lg shadow-lg bg-white">

                <div  className="effect w-full h-14 sm:h-14 md:h-16 xl:h-16 2xl:h-16 bg-green-500 shadow-lg absolute top-0 left-0"></div>

                    <h2 className="text-sm md:text-md xl:text-md 2xl:text-md text-white z-10 font-semibold">{services.type}</h2>

                    <h3 className="text-yellow-500 text-2xl sm:text-2xl md:text-3xl xl:text-3xl 2xl:text-4xl mt-5 py-2 font-bold">{services.budget}</h3>
                    <h3 className="text-sm sm:text font-semibold">{services.installationTime}</h3>
                    <h3 className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg 2xl:text-lg font-semibold mt-5">{services.payment}</h3>
                    <h3 className="text-md sm:text-sm md:text-md xl:text-lg 2xl:text-lg font-semibold">{services.systemType}</h3>
                    <h3 className="text-md sm:text-sm md:text-md xl:text-lg 2xl:text-lg font-semibold">{services.description}</h3>
                    <h3 className="text-md sm:text-sm md:text-md xl:text-lg 2xl:text-lg font-semibold">{services.otherFacility}</h3>
                    <h3 className="text-md sm:text-sm md:text-md xl:text-lg 2xl:text-lg font-semibold">{services.otherFacility2}</h3>

                    <a className='border-[1px] mt-3 py-2 text-md font-md bg-green-500 hover:bg-green-600 hover:transition-all text-white text-center rounded-lg' href="#home">Check Out</a>
            </div>

        ))}
        

        </div>

    </div>
  )
}

export default Services
