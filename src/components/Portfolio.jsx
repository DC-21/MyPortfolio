import React from 'react';
import Ai from '../images/aiweb.png';

const Portfolio = () => {
  return (
    <section id='projects' className="body-font items-center justify-center flex flex-col overflow-hidden px-4 py-2 md:py-20 bg-white h-auto lg:h-screen">
      <h2 className="font-bold md:text-3xl text-2xl mt-10 text-slate-600 text-center">Projects</h2>
      <div className="px-5 items-center justify-center py-4">
        <div className="flex flex-wrap w-full items-center justify-center">
          <div className="md:w-1/2 w-full flex items-center justify-center"> {/* Added flex and justify-center classes */}
            <div className="flex flex-col">
              <h1 className="text-center md:text-left font-medium md:text-2xl text-lg text-slate-600 mb-1 mt-1">The Ai Web</h1>
              <p className="text-center md:text-left my-2 text-slate-500">
                Unleashing the power of AI revolutionizes industries, propelling innovation, automation, and transformative advancements. By tapping into its potential, we unlock a world of possibilities, shaping the future with intelligent technologies and redefining the way we live and work.
              </p>
              <div className='flex md:justify-start justify-center w-full'>
                <button className="flex bg-slate-700 py-1 shadow-2xl px-8 rounded my-4 text-white font-bold hover:bg-slate-400 hover:text-white transition-all">
                  <a href='https://ai-chola.netlify.app/'>Visit</a>
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full mt-6 lg:mt-0 h-[70vh]">
            <img className='mx-auto' src={Ai} /> {/* Added mx-auto class */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
