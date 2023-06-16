import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Player } from '@lottiefiles/react-lottie-player';


const Hero = () => {
  return (
    <div className='flex px-4 md:px-8  flex-wrap w-full lg:h-[620px] justify-center items-center h-fit pt-1 bg-slate-500'>
      <div className='md:w-1/2 w-full items-center'>
        <div>
          <TypeAnimation
            sequence={[
              'I am Chola Kuboko', 2000,
              'A Junior Web Developer', 2000,
              'A Web Penetration Tester', 2000
            ]}
            className="text-2xl md:text-left text-center w-full font-bold pt-0 text-white"
            repeat={Infinity}
            wrapper="p"
          />
          <div className=' text-center md:text-left'>
            <h1 className='pt-4 text-white font-medium'>Looking for Web Developer to Hire ?</h1>
            <h1 className='pt-3 text-slate-300 font-medium'>You have come to the right place where your dreams are Redesigned and brought to Life for you.</h1>
            <li className='list-none flex justify-center md:justify-start w-full gap-6 mt-6 duration-500'>
              {/*gmail*/}
              <a href='mailto:cholahkuboko@gmail.com'>  <svg
                viewBox="0 0 24 24"
                fill="white"
                height="2em"
                width="2em"
              >
                <path d="M20 8l-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" />
              </svg></a>
              {/*whatsapp*/}
              <a href='https://wa.me/0979054417?text=urlencodedtext'>
                <svg
                  viewBox="0 0 448 512"
                  fill="white"
                  height="2em"
                  width="2em"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>
              {/*contact*/}
              <a href='tel:0979054417'>
                <svg
                  viewBox="0 0 24 24"
                  fill="white"
                  height="2em"
                  width="2em"
                >
                  <path d="M16.57 22a2 2 0 001.43-.59l2.71-2.71a1 1 0 000-1.41l-4-4a1 1 0 00-1.41 0l-1.6 1.59a7.55 7.55 0 01-3-1.59 7.62 7.62 0 01-1.59-3l1.59-1.6a1 1 0 000-1.41l-4-4a1 1 0 00-1.41 0L2.59 6A2 2 0 002 7.43 15.28 15.28 0 006.3 17.7 15.28 15.28 0 0016.57 22zM6 5.41L8.59 8 7.3 9.29a1 1 0 00-.3.91 10.12 10.12 0 002.3 4.5 10.08 10.08 0 004.5 2.3 1 1 0 00.91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 01-8.87-3.71A13.28 13.28 0 014 7.41zM20 11h2a8.81 8.81 0 00-9-9v2a6.77 6.77 0 017 7z" />
                  <path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z" />
                </svg>
              </a>
              {/*github*/}
              <a href='https://github.com/dc-21/' className='flex gap-2'>
                <svg
                  viewBox="0 0 1024 1024"
                  fill="white"
                  height="2em"
                  width="2em"
                >
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                </svg>
              </a>
            </li>
            <button className='bg-white py-2 px-2 rounded mt-8 text-black font-bold hover:bg-black hover:text-white transition-all'>
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
