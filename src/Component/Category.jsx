import React from "react";
import circle from "../assets/Group 16.png";
import bm from "../assets/management.png";
import cs from "../assets/science.png";
import art from "../assets/art.png";
import personal from "../assets/p-development.png";

// const CategoryImage = ({ src, alt }) => (
//   <div className="h-full w-full md:w-60 md:h-60 relative">
//     <img src={circle} alt="Circle background" className="w-full h-full absolute" />
//     <div className="w-full h-full absolute flex items-center justify-center">
//       <img src={src} alt={alt} className="w-24 h-24 object-cover" />
//     </div>
//   </div>
// );

// const CategoryItem = ({ imageSrc, title, subtitle }) => (
//   <div className="flex flex-col items-center w-full">
//     <CategoryImage src={imageSrc} alt={title} />
//     <h3 className="mt-3 text-xl font-bold text-center">{title}</h3>
//     {/* <p className="text-sm text-center">{subtitle}</p> */}
//   </div>
// );

const Category = () => {
  let categories = [
    {
      title: "Business Management",
      image: bm,
    },
    {
      title: "Art and Design",
      image: art,
    },
    {
      title: "Computer Science",
      image: cs,
    },
    {
      title: "Personal Development",
      image: personal,
    },
  ];

  return (
    <div className="container w-screen mx-auto px-4 py-10 md:py-20">
      <h2 className="text-3xl md:text-5xl font-bold text-blue-950 text-center mb-12">
        Course Categories
      </h2>
      <div className="flex justify-between items-center flex-wrap md:flex-nowrap w-full">
        {categories.map((category, index) => (
          <>
            <div className="w-full md:w-80 p-6 flex justify-center items-center flex-col gap-4">
              <div className="p-2 rounded-full border-[2px] border-dashed border-blue-950">
              <div className="bg-slate-300 w-56 h-56 rounded-full  flex justify-center items-center">
                <img src={category.image} alt="" className="" />
              </div>
              </div>
              <h2 className="text-xl font-bold">{category.title}</h2>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Category;
