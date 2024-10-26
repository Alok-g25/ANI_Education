import React from 'react';
import ins2 from '../assets/ins2.png';
import pd2 from '../assets/pd2.png';
import manage from '../assets/manage.png';

const data = [
  {
    image: ins2,
    title: 'Industry Expertise',
    content: `Each of our instructors brings years of real-world experience and in-depth knowledge, 
              ensuring you receive the highest quality education. They stay updated with the latest 
              industry trends and practices to provide you with relevant and practical insights.`,
  },
  {
    image: pd2,
    title: 'Professional Mentors',
    content: `Our mentors are professionals who have achieved significant success in their careers. 
              They provide personalized guidance and support to help you navigate your learning journey.`,
  },
  {
    image: manage,
    title: 'Flexible Learning',
    content: `We offer flexible learning options that cater to your schedule. Whether you prefer 
              online or offline learning, we have the right resources to support your education.`,
  },
];

const WhyLearnFromUs = () => {
  return (
    <section className="bg-gray-200 py-5 px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl leading-none font-bold text-blue-900 mb-20 tracking-wider">Why Learn From Our Instructors?</h2>
        {data.map((item, index) => (
          <div
            key={index}
            className="relative my-24 bg-gray-300 rounded-b-[50px] rounded-tr-[50px]  p-16 px-6 flex flex-col items-center justify-center"
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 rounded-full w-36 h-36 flex justify-center items-start p-4">
              <img src={item.image} alt={item.title} className="w-20 h-20" />
            </div>
            <div className="text-center  w-full px-4 md:px-8">
              <h3 className="text-4xl font-bold text-blue-900 mb-4">{item.title}</h3>
              <p className="text-black text-lg font-semibold">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyLearnFromUs;
