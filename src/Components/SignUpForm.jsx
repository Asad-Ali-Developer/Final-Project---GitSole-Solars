import React from 'react';
import Links from './Links';


const SignUpForm = () => {

    return (
        <>

            <div className="signUpForm gap-10 w-full h-auto bg-white flex-col flex justify-center items-center">

                

                <div className="form w-[40%] h-auto text-white font-sans border-[2px] border-zinc-400 rounded-lg py-7 mb-10">

                <h4 className='text-zinc-800 pb-5 text-center text-lg sm:text-xl md:text-2xl xl:text-2xl 2xl:text-2xl font-bold'>
                Contact Us!</h4>    

                    <form className='flex flex-col gap-4 p-5' action="">

                        <div className="name flex flex-col gap-2 items-left w-full">
                            <label className='font-semibold text-md text-slate-800'>Name:</label>
                            <input className=' bg-zinc-200 text-black text-lg rounded-md w-full py-2 px-2 outline-none' type="text" required />
                        </div>
                        <div className="name flex gap-2 flex-col items-left">
                            <label className='font-semibold text-slate-800'>Email:</label>
                            <input className='w-full bg-zinc-200 text-black text-lg py-2
                            px-2 rounded-md outline-none' type="email" required />
                        </div>
                        
                        <button className='w-full bg-slate-600 py-3 mt-4 text-sm sm:text-sm font-medium rounded-md md:text-md 2xl:text-md' type="submit">Contact Us</button>

                    </form>
                </div>

                <div className="links bg-zinc-100 rounded-r-lg">
                <Links />
                </div>

            </div>


        </>
    );
};

export default SignUpForm;
