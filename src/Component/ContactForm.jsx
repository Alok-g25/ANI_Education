import React from 'react';
import logo from '../assets/logo.png';
import EmailIcon from '@mui/icons-material/Email';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactForm = () => {
  return (
    <div className='bg-gray-200'>
      <div className="bg-blue-950 flex items-start justify-around flex-wrap md:flex-nowrap p-4 rounded-bl-[150px] min-h-screen py-16">   
        <div className="w-full md:w-1/2 text-white p-0 md:p-10 md:pt-0 mb-10 md:mb-0">
          <div className="mb-12">
            <img src={logo} alt="ANI Education" />
          </div>
          <div className='flex flex-col gap-y-6'>
            <div className='flex flex-row gap-6 items-start'>
                <EmailIcon />
                <p>Info@markletechAndMedial.com</p>
            </div>
            <div className='flex flex-row gap-6 items-start'>
                <WifiCalling3Icon />
                <p>+91-55555555555</p>
            </div>
            <div className='flex flex-row gap-6 items-start'>
                <LocationOnIcon />
                <p>A-52, Som Bazar Rd, Commandar Chowk, <br /> Vikas Nagar, Uttam Nagar, new Delhi,110059</p>
            </div>
          </div>
        </div>
        
        
        <div className="w-full md:w-1/2">
          <form className=" flex flex-col justify-center items-center gap-6 md:p-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full md:w-3/4 p-3 rounded-full bg-gray-300 text-slate-900"
            />
            <input
              type="tel"
              placeholder="Ph No."
              className="w-full md:w-3/4 p-3 rounded-full bg-gray-300 text-slate-900"
            />
            <input
              type="email"
              placeholder="Email ID"
              className="w-full md:w-3/4 p-3 rounded-full bg-gray-300 text-slate-900"
            />
            <textarea
              placeholder="Leave a Message"
              className="w-full md:w-3/4 p-3 rounded-3xl bg-gray-300 text-slate-900 h-48"
            ></textarea>
            <div>
            <button
              type="submit"
              className="bg-white text-blue-900 font-bold py-2 px-8 rounded-full hover:bg-blue-100  duration-300"
            >
              Submit
            </button>
            </div>
          </form>
        </div>
      
    </div>
    </div>
  );
};

export default ContactForm;
