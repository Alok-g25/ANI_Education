import React from 'react';
import course from '../../assets/Rectangle 14.png';
import ux from '../../assets/ux.png';
import sd from '../../assets/sd.png';
import wd from '../../assets/wd.png';
import SearchIcon from '@mui/icons-material/Search';

const CourseCategory = ({ title, courses, imageSrc }) => (
  <div className="bg-gray-100 rounded-lg shadow-md p-4">
    <div className="bg-white rounded-lg overflow-hidden mb-2">
      <img src={imageSrc} alt={title} className="w-full h-24 object-cover" />
    </div>
    <h3 className="font-bold text-blue-900 text-sm">{title}</h3>
    <p className="text-xs text-gray-600">{courses} Courses</p>
  </div>
);

const Courses1 = () => {
  const categories = [
    {
      title: "Graphic Design",
      courses: "700+",
      imageSrc: course
    },
    {
      title: "UI/UX Design",
      courses: "700+",
      imageSrc: ux
    },
    {
      title: "Software Development",
      courses: "700+",
      imageSrc: sd
    },
    {
      title: "Web Development",
      courses: "700+",
      imageSrc: wd
    },
    {
      title: "Graphic Design",
      courses: "700+",
      imageSrc: course
    },
    {
      title: "UI/UX Design",
      courses: "700+",
      imageSrc: ux
    },
    {
      title: "Software Development",
      courses: "700+",
      imageSrc: sd
    },
    {
      title: "Web Development",
      courses: "700+",
      imageSrc: wd
    },
    {
      title: "Graphic Design",
      courses: "700+",
      imageSrc: course
    },
    {
      title: "UI/UX Design",
      courses: "700+",
      imageSrc: ux
    },
    {
      title: "Software Development",
      courses: "700+",
      imageSrc: sd
    },
    {
      title: "Web Development",
      courses: "700+",
      imageSrc: wd
    },
    {
      title: "Graphic Design",
      courses: "700+",
      imageSrc: course
    },
    {
      title: "UI/UX Design",
      courses: "700+",
      imageSrc: ux
    },
    {
      title: "Software Development",
      courses: "700+",
      imageSrc: sd
    },
    {
      title: "Web Development",
      courses: "700+",
      imageSrc: wd
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-800 to-blue-950 p-6 md:pt-20 pb-24 md:pb-40 rounded-br-[100px] mt-16">
      <h1 className="text-white text-2xl md:text-5xl font-extrabold text-center">
        Course for you
      </h1>
      <h2 className='text-whte text-xl md:text-2xl text-white text-center my-2 tracking-widest'>Get Started Your Study</h2>
      <div className="flex gap-4 flex-row items-center w-full justify-center my-5 md:my-8">
        <div className="border-2 relative border-white rounded-lg overflow-hidden w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search Courses"
            className="bg-slate-200  text-slate-950 border border-white px-3 py-2 text-sm outline-none w-full pl-10 md:pl-20"
          />
          <SearchIcon className='text-[24px] absolute top-2 left-3 md:left-8 text-blue-950'/>
        </div>
        <button className="px-8 py-2 text-blue-950 font-bold bg-white rounded-lg cursor-pointer border hover:border-white duration-300 hover:bg-transparent hover:text-white">
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-14">
        {categories.map((category, index) => (
          <CourseCategory
            key={index}
            title={category.title}
            courses={category.courses}
            imageSrc={category.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses1;