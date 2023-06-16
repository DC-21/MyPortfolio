import React from 'react';
import Ai from '../images/aiweb.png';

const Portfolio = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden px-4 py-4 bg-blue-300">
      <h2 className="text-center mt-4 font-bold underline text-3xl title-font text-black tracking-widest">Projects</h2>
      <div className="container px-5 items-center justify-center mx-auto py-10">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 lg:mt-0 flex items-center justify-center"> {/* Added flex and justify-center classes */}
            <div className="text-center">
              <h1 className="text-gray-900 text-2xl title-font font-medium mb-1 mt-6">The Ai Web</h1>
              <p className="">Unleashing the power of AI revolutionizes industries, propelling innovation, automation, and transformative advancements. By tapping into its potential, we unlock a world of possibilities, shaping the future with intelligent technologies and redefining the way we live and work.</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <div className="">
                <button className="ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Visit Ai</button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 h-[70vh]">
            <img className='rounded mx-auto' src={Ai} /> {/* Added mx-auto class */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
