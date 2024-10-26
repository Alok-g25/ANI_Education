import React from 'react';
import man from '../../assets/man.png';
import flare from '../../assets/flare.png'
import rect3 from '../../assets/Rectangle 1.png'

const Hero2 = () => {
  return (
    <section className="bg-blue-950 text-white px:4 md:px-20 rounded-bl-[80px]">
      <div className="flex justify-between flex-col md:flex-row">
        <div className="w-full md:w-1/2 py-10 md:py-32 px-12 order-2 md:order-1">
            <h1 className="text-stat text-4xl md:text-6xl font-extrabold tracking-wide">
              Your Partner in
            </h1>
          <div className="inline-block">
            <h1 className="text-start font-bold text-2xl md:text-4xl w-full mt-4">
              {" "}
              Online Courses
            </h1>
            <h1 className="text-start font-bold text-2xl md:text-3xl w-full mt-4">
              {" "}
              From ANi Educations
            </h1>
            <p className="mt-4 md:mt-6 text-justify text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="flex gap-x-4 mt-4 md:mt-6">
            <button className="bg-white px-4 py-2 rounded-full hover:bg-blue-950 border transition duration-300 text-black hover:text-white">
              50+ Courses
            </button>
            <button className="bg-white px-4 py-2 rounded-full hover:bg-blue-950 border transition duration-300 text-black hover:text-white">
              Free Trail
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-5 md:mt-10 pt-6 order-1 md:order-2">
          <div className="relative h-full w-full flex justify-center items-center ">
            <img
              src={man}
              alt="Student with books"
              className="z-30 relative h-[380px] md:h-[600px] bg-cover bg-center"
            />
            <img
              src={rect3}
              alt="Background shape"
              className="absolute top-1/3 z-10  h-52 md:h-80"
            />
            <img
              src={flare}
              alt="Light flare effect"
              className="absolute w-[500px] -top-24 right-4 md:right-20 z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero2;