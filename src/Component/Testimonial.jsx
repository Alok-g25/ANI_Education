import React from 'react';
import test1 from '../assets/Ellipse 6.png';
import test2 from '../assets/Ellipse 7.png';

const TestimonialCard = ({ name, image, testimonial }) => (
  <div className="bg-gray-200 rounded-b-3xl rounded-tr-3xl p-6 flex items-center w-72 md:w-96 relative">
    <img src={image} alt={name} className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover absolute -left-6 sm:-left-11 top-1/2 transform -translate-y-1/2" />
    <div className="ml-20 sm:ml-24">
      <h3 className="font-bold text-blue-900 text-lg">{name}</h3>
      <p className="text-sm text-gray-700 text-justify">{testimonial}</p>
    </div>
  </div>
);

const Testimonial = () => {
  return (
    <div className="bg-blue-950 text-white p-6 md:p-10">
      <div className="w-full">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-3 md:mb-5">Hear From Our Students</h1>
        <p className="text-xl md:text-4xl text-center mb-10 sm:mb-16">Student's Testimonials</p>
        <div className="flex flex-col items-center md:flex-row justify-evenly gap-y-10 my-6 md:my-10 flex-wrap lg:flex-nowrap">
          <TestimonialCard
            name="Anhishek Sharma"
            image={test1}
            testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <TestimonialCard
            name="Kajal Sharma"
            image={test2}
            testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
