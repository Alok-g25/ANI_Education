import React from 'react';
import logo from '../assets/logo.png'; 
import InTouch from './InTouch';

const Footer = () => {
  return (
    <>
      <InTouch />
      <div className="bg-blue-950 text-white p-6 md:p-10">
      <div className="flex justify-between gap-5 flex-wrap">
        <div className="p-2 w-full sm:w-[300px]">
          <img src={logo} alt="ANI Education" className="mb-4" />
          <p className="text-sm text-justify">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
          </p>
        </div>
        <div className="  mt-5 md:mt-0 pt-0 md:pt-20">
          <h2 className="text-lg font-bold mb-4 underline underline-offset-2">Company</h2>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-gray-300">About Us</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-300">Services</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-300">Community</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-300">Testimonials</a></li>
          </ul>
        </div>
        <div className="  mt-5 md:mt-0 pt-0 md:pt-20">
          <h2 className="text-lg font-bold mb-4 underline underline-offset-2">Support</h2>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-gray-300">Help Center</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-300">Tweet Us</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-300">Webinars</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-300">Feedback</a></li>
          </ul>
        </div>
        <div className="  mt-5 md:mt-0 pt-0 md:pt-20">
          <h2 className="text-lg font-bold mb-4 underline underline-offset-2">Links</h2>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-gray-300">Courses</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-300">Become Teacher</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-300">Service</a></li>
          </ul>
        </div>
        <div className=" mt-5 md:mt-0 pt-0 md:pt-20">
          <h2 className="text-lg font-bold mb-4 underline underline-offset-2">Contact Us</h2>
          <ul>
            <li className="mb-2">91+123 4545 66454</li>
            <li className="mb-2">Markle@Gmail.Com</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
