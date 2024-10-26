import React from 'react';
import professor from '../assets/professor.png';

const Knowledge = () => {
  return (
    <div className='p-6 md:p-10'>
      <div className="bg-[rgba(217,217,217,0.26)] p-6 sm:p-10 my-10 rounded-bl-3xl flex flex-col lg:flex-row items-center">
      <div className="flex-shrink-0 mb-6 lg:mb-0 lg:mr-8">
        <div className="rounded-3xl overflow-hidden shadow-lg w-72 h-96 sm:w-80 sm:h-96 lg:w-72 lg:h-96 mx-auto">
          <img
            src={professor}
            alt="Professional man"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex-grow text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-90 mb-2">
          Knowledge From
        </h2>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-700 mb-4">
          The Best Minds
        </h3>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 text-justify">
          Our Courses Are Led By Industry Experts Who Are Dedicated To Your Success. Each Instructor
          Brings A Wealth Of Real-World Experience And Deep Knowledge In Their Field, Ensuring You
          Receive The Highest Quality Education. With Guidance From Seasoned Professionals, You'll
          Gain Practical Skills And Valuable Insights That Can Be Immediately Applied To Elevate
          Your Career. Our Commitment Is To Provide You With The Tools And Knowledge You Need To Achieve
          Your Goals. Learn From The Best To Become The Best, And Embark On A
          Learning Journey That Is Both Enriching And Transformative.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Knowledge;
