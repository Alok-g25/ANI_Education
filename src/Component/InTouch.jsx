import React, { useState } from "react";
import rect from "../assets/Rectangle 20.png";

const InTouch = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault() / console.log("Email submitted:", email);
    setEmail("");
  };
  return (
    <>
      <div className="bg-blue-950 py-4">
        <div className="bg-gray-300  w-full py-14 px-6 flex justify-center items-center rounded-[92px_0px_92px_0px]">
          <div className="bg-blue-950 w-full md:w-3/4 rounded-[30px] text-white py-14 px-4">
            <h1 className="text-center text-4xl md:text-6xl font-extrabold ">
              Keep In Touch{" "}
            </h1>
            <p className="text-center text-md md:text-2xl bold mt-1 md:mt-3">
              Stay connected With for Updates, support and Assitance anything
            </p>
            <div className="w-full flex justify-center flex-row my-4 md:my-6">
            <form onSubmit={handleSubmit} className=" w-full md:w-2/3 flex gap-2">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="p-2 rounded-xl w-3/4 bg-gray-300 text-black outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-2 text-blue-950 bg-white rounded-lg cursor-pointer border hover:border-white duration-300 hover:bg-transparent hover:text-white" 
                >
                  Sent
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InTouch;
