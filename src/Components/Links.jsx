import React from 'react'

const Links = () => {
    return (
        <>

            <div className="links-text flex items-center justify-center gap-4 py-2 px-3 rounded-lg">

                <h3 className='font-medium text-sm sm:text-sm lg:text-lg xl:text-lg 2xl:text-lg'>Connect With Us:</h3>

                <div className="links flex gap-2">

                                        
                    <a href="https://github.com/Asad-Ali-Developer"><img className='w-5 h-5 sm:w-5 sm:h-5 md:h-5 md:w-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7' src="images/github.svg" alt="" /></a>

                    <a href="https://www.linkedin.com/in/asad-ali-najaf-35102720b/"><img className='w-5 h-5 sm:w-5 sm:h-5 md:h-5 md:w-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7' src="images/linkedin.svg" alt="" /></a>

                    <a href="https://www.instagram.com/asadalinajaf/"><img className='w-5 h-5 sm:w-5 sm:h-5 md:h-5 md:w-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7' src="images/instagram.svg" alt="" /></a>

                </div>
            </div>

        </>
    )
}

export default Links
