import React from 'react';
import old from '../assets/old-man.png';
import inst2 from '../assets/rectbg.png';
import inst3 from '../assets/ryan.png';

const instructors = [
  {
    image: old,
    name: 'Dr. Jane Smith',
    title: 'Data Science Expert',
    description: `With a Ph.D. in Computer Science and over 15 years of experience in data analysis and machine learning, 
                  Dr. Smith is passionate about helping students unlock the power of data. Her courses blend theoretical 
                  knowledge with practical applications, making complex concepts accessible to everyone.`,
  },
  {
    image: inst2,
    name: 'Dr. John Doe',
    title: 'Machine Learning Specialist',
    description: `Dr. Doe has extensive experience in machine learning and artificial intelligence. He has worked on numerous 
                  high-profile projects and is dedicated to sharing his knowledge and expertise with students. His approach 
                  to teaching focuses on real-world applications and hands-on learning.`,
  },
  {
    image: inst3,
    name: 'Dr. Emily Johnson',
    title: 'AI Researcher',
    description: `Dr. Johnson is a leading researcher in artificial intelligence and deep learning. She has published several 
                  papers in top conferences and journals. Her teaching style emphasizes critical thinking and problem-solving, 
                  preparing students to tackle challenging issues in the AI field.`,
  },
];

const MeetOurInstructors = () => {
  return (
    <section className="bg-blue-950 py-32 w-full rounded-br-[100px]">
      <div className="container px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-16">Meet Some Of Our Top Instructors</h2>
      </div>
      {instructors.map((instructor, index) => (
        <div key={index} className="bg-gray-300 mb-16 rounded-br-[100px] rounded-tl-[100px]">
          <div className=" w-full container">
            <div className="py-14 flex justify-center items-center flex-warp md:flex-row flex-col gap-y-5">
              <div className="md:w-1/3">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="rounded-lg md:mx-auto object-cover w-80"
                />
              </div>
              <div className="text-center md:text-right md:w-1/2 p-6">
                <h3 className="text-5xl font-bold text-blue-900 mb-2">{instructor.name}</h3>
                <h4 className="text-3xl font-semibold text-gray-700 mb-4">{instructor.title}</h4>
                <p className="text-lg text-gray-600">{instructor.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MeetOurInstructors;
