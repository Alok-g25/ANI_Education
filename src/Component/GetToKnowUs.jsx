import img1 from "../assets/rectbg.png";
import img2 from "../assets/rectfr.png";

const GetToKnowUs = () => {
  return (
    <section className="bg-gray-200 px-6 py-10 md:px-10 md:py-16 w-full rounded-bl-[100px]">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 p-2 md:p-4">
          <div className="relative w-full md:w-1/2 my-10">
            <img
              src={img1}
              alt="Woman with laptop"
              className="rounded-lg z-10 w-full bg-contain"
            />
            <img
              src={img2}
              alt="Person at desk"
              className="absolute top-40 z-20  md:-right-1/2 md:w-5/6  hidden md:block"
            />
          </div>
        </div>
        <div className="md:w-1/2 p-6 flex flex-col md:justify-end items-end mt-0 md:mt-24">
          <h2 className="text-blue-800 text-2xl md:text-4xl font-semibold my-2 text-right">
            Get to Know Us
          </h2>
          <h3 className=" text-xl md:text-4xl font-bold my-4 text-right">
            Enhance your abilities, learn <br /> with us anywhere, anytime
          </h3>
          <p className="text-xl my-3 text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="flex flex-wrap justify-end w-full md:w-2/3 py-6 gap-3">
            <button className="bg-blue-900 text-white px-3 md:px-0 md:w-1/3 py-2 hover:border-blue-950 hover:text-blue-950 hover:bg-transparent duration-300 border font-bold  rounded-full">
              Expert trainers
            </button>
            <button className="bg-blue-900 text-white px-3 md:px-0 md:w-1/3 py-2 hover:border-blue-950 hover:text-blue-950 hover:bg-transparent duration-300 border font-bold  rounded-full">
              Lifetime access
            </button>
            <button className="bg-blue-900 text-white px-3 md:px-0 md:w-1/3 py-2 hover:border-blue-950 hover:text-blue-950 hover:bg-transparent duration-300 border font-bold  rounded-full">
              Great results
            </button>
            <button className="bg-blue-900 text-white px-3 md:px-0 md:w-1/3 py-2 hover:border-blue-950 hover:text-blue-950 hover:bg-transparent duration-300 border font-bold  rounded-full">
              Online learning
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetToKnowUs;
