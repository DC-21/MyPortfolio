import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Player } from '@lottiefiles/react-lottie-player';


const Hero = () => {
  return (
    <div className='flex px-4 md:px-8  flex-wrap w-full h-[550px] pt-8 bg-slate-500'>
      <div className='md:w-1/2 w-full pt-10'>
        <div>
          <TypeAnimation
            sequence={[
              'I am Chola Kuboko', 2000,
              'A Junior Web Developer', 2000,
              'A Web Penetration Tester', 2000
            ]}
            className="text-2xl w-full font-bold text-left pt-0"
            repeat={Infinity}
            wrapper="p"
            style={{ color: 'linear-gradient(to right, #fafafa, #2d177d)' }}
          />
          <div className=''>
            <h1 className='pt-4'>Looking for Web Developer to Hire ?</h1>
            <h1 className='pt-3'>You have come to the right place where your dreams are Redesigned and brought to Life for you.</h1>
            <li className='list-none flex w-full gap-6 pt-4'>
              <a href=''>  <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="2em"
                width="2em"
              >
                <path d="M20 8l-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" />
              </svg></a>
              <a href=''>
                <svg
                  viewBox="0 0 448 512"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>
              <a href=''>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path d="M16.57 22a2 2 0 001.43-.59l2.71-2.71a1 1 0 000-1.41l-4-4a1 1 0 00-1.41 0l-1.6 1.59a7.55 7.55 0 01-3-1.59 7.62 7.62 0 01-1.59-3l1.59-1.6a1 1 0 000-1.41l-4-4a1 1 0 00-1.41 0L2.59 6A2 2 0 002 7.43 15.28 15.28 0 006.3 17.7 15.28 15.28 0 0016.57 22zM6 5.41L8.59 8 7.3 9.29a1 1 0 00-.3.91 10.12 10.12 0 002.3 4.5 10.08 10.08 0 004.5 2.3 1 1 0 00.91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 01-8.87-3.71A13.28 13.28 0 014 7.41zM20 11h2a8.81 8.81 0 00-9-9v2a6.77 6.77 0 017 7z" />
                  <path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z" />
                </svg>
              </a>
            </li>
            <button className='bg-slate-600 py-2 px-2 rounded mt-6'>
              Give me a shot
            </button>
          </div>
        </div>
        <div></div>
      </div>
      <div className='md:w-1/2 w-full'>
        <div>
          <Player
            autoplay
            loop
            src='https://assets3.lottiefiles.com/packages/lf20_Pr3rKjXraf.json'
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Hero
