import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Player } from '@lottiefiles/react-lottie-player';


const Hero = () => {
  return (
    <div className='flex px-4 md:px-8  flex-wrap w-full h-screen pt-8'>
      <div className='md:w-1/2 w-full'>
        <div>
        <TypeAnimation
               sequence={[
                'A Junior Web Developer', 2000,
                'An AI Chatbot Developer', 2000,
                'A Web Penetration Tester', 2000
                   ]}
                className="text-2xl w-full font-bold text-left" 
                repeat={Infinity}
                wrapper="p"
                style={{ color: 'linear-gradient(to right, #fafafa, #2d177d)' }}
               />
          <h1>Web Developer for Hire</h1>
        </div>
        <div></div>
      </div>
      <div className='md:w-1/2 w-full'>
        <div>
          <Player
            autoplay
            loop
            src='https://assets3.lottiefiles.com/packages/lf20_Pr3rKjXraf.json'
            style={{ width: '100%', height:'auto' }}
          />
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Hero
