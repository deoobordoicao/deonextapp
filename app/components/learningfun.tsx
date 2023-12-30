import React from "react";

const LearnFun: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <div className="lg:ml-20 lg:pl-40 ml-15 pl-40 absolute">
          <span className="relative flex h-3 w-3 mb-8">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
        </div>
        <h1 className="lg:text-2xl p-5 py-1 text-center text-yellow animate-fade-in font-bold font-serif shadow-lg hover:text-blue-500 bg-blue-300 rounded-full hover:scale-125 sm:scale-x-75: sm:scale-y-50:">
          Learning is fun!
        </h1>
      </div>
      <h1 className="text-center text-6xl pt-2 mx-auto animate-pulse">☕</h1>
    </>
  );
};

export default LearnFun;
